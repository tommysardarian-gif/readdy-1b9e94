import { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { productScanTotals } from '@/mocks/scanHistory';
import PrintQRTagModal from './PrintQRTagModal';

const BASE_URL = 'https://rescuewear.co/shelter';

const productLinks: Record<string, string> = {
  "Biscuit's Custom Tee": `${BASE_URL}/sunridge-animal-rescue?ref=biscuit-tee`,
  "Luna's Rescue Hoodie": `${BASE_URL}/coastal-paws-rescue?ref=luna-hoodie`,
};

export default function ShareProductPanel() {
  const [selectedProduct, setSelectedProduct] = useState(productScanTotals[0].product);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [printOpen, setPrintOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLink = productLinks[selectedProduct] ?? `${BASE_URL}?ref=product`;

  useEffect(() => {
    QRCode.toDataURL(currentLink, {
      width: 220,
      margin: 2,
      color: { dark: '#2D2D2D', light: '#FFFFFF' },
      errorCorrectionLevel: 'H',
    }).then(setQrDataUrl).catch(() => setQrDataUrl(''));
  }, [currentLink]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
      const el = document.createElement('textarea');
      el.value = currentLink;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handlePrintOpen = () => setPrintOpen(true);

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    const safeName = selectedProduct.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    a.download = `qr-${safeName}.png`;
    a.click();
  };

  const selectedMeta = productScanTotals.find((p) => p.product === selectedProduct);

  return (
    <>
    <div className="bg-white rounded-2xl border border-[#F0EAE4] overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-[#F7F5F2] flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-serif text-lg text-[#2D2D2D]">Share Your Product</h3>
          <p className="text-xs text-[#A8A8A8] mt-0.5">Copy your QR link or download the code to share anywhere.</p>
        </div>
        {/* Product selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#F0EAE4] bg-[#FAFAF8] text-sm text-[#2D2D2D] font-medium cursor-pointer hover:border-[#C97D5D] transition-colors whitespace-nowrap"
          >
            <i className="ri-t-shirt-line text-[#C97D5D]"></i>
            <span className="max-w-[160px] truncate">{selectedProduct}</span>
            <i className={`ri-arrow-down-s-line text-[#A8A8A8] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}></i>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-1.5 bg-white border border-[#F0EAE4] rounded-xl shadow-sm z-20 min-w-[200px] overflow-hidden">
              {productScanTotals.map((p) => (
                <button
                  key={p.product}
                  onClick={() => { setSelectedProduct(p.product); setDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-3 text-sm flex items-center gap-2.5 cursor-pointer transition-colors ${selectedProduct === p.product ? 'bg-[#F5EDE6] text-[#C97D5D] font-medium' : 'text-[#2D2D2D] hover:bg-[#FAFAF8]'}`}
                >
                  <i className="ri-t-shirt-line text-[#C97D5D]"></i>
                  <span className="truncate">{p.product}</span>
                  {selectedProduct === p.product && <i className="ri-check-line ml-auto text-[#C97D5D]"></i>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col md:flex-row gap-8 items-start">

        {/* QR Code display */}
        <div className="flex flex-col items-center gap-3 flex-shrink-0">
          <div className="w-[180px] h-[180px] flex items-center justify-center rounded-2xl border-2 border-[#F0EAE4] bg-white p-3 relative overflow-hidden">
            {qrDataUrl ? (
              <img src={qrDataUrl} alt="QR Code" className="w-full h-full object-contain" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <i className="ri-loader-4-line text-3xl text-[#C97D5D] animate-spin"></i>
              </div>
            )}
            {/* Corner accents */}
            <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C97D5D] rounded-tl-sm"></span>
            <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C97D5D] rounded-tr-sm"></span>
            <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C97D5D] rounded-bl-sm"></span>
            <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C97D5D] rounded-br-sm"></span>
          </div>
          <button
            onClick={handleDownload}
            disabled={!qrDataUrl}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2D2D2D] text-white text-sm font-medium cursor-pointer hover:bg-[#1a1a1a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
          >
            <i className="ri-download-2-line"></i>
            Download QR
          </button>
          <button
            onClick={handlePrintOpen}
            disabled={!qrDataUrl}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#C97D5D] text-[#C97D5D] text-sm font-medium cursor-pointer hover:bg-[#F5EDE6] transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
          >
            <i className="ri-printer-line"></i>
            Print QR Tag
          </button>
        </div>

        {/* Right side: link + stats + tips */}
        <div className="flex-1 flex flex-col gap-5 min-w-0">

          {/* Product meta */}
          {selectedMeta && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
                <i className="ri-t-shirt-line text-[#C97D5D]"></i>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2D2D2D]">{selectedMeta.product}</p>
                <p className="text-xs text-[#A8A8A8]">Linked to {selectedMeta.shelter} · {selectedMeta.total} total scans</p>
              </div>
            </div>
          )}

          {/* Link copy row */}
          <div>
            <p className="text-xs font-semibold text-[#A8A8A8] uppercase tracking-wide mb-2">Product QR Link</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center gap-2 bg-[#FAFAF8] border border-[#F0EAE4] rounded-xl px-4 py-2.5 min-w-0">
                <i className="ri-link text-[#C97D5D] flex-shrink-0 text-sm"></i>
                <span className="text-xs text-[#6B6B6B] truncate font-mono">{currentLink}</span>
              </div>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 whitespace-nowrap flex-shrink-0 ${copied ? 'bg-emerald-500 text-white' : 'bg-[#C97D5D] text-white hover:bg-[#b56d4e]'}`}
              >
                <i className={`${copied ? 'ri-check-line' : 'ri-file-copy-line'} text-sm`}></i>
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>

          {/* Share channels */}
          <div>
            <p className="text-xs font-semibold text-[#A8A8A8] uppercase tracking-wide mb-2">Share To</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Instagram', icon: 'ri-instagram-line', color: 'text-pink-500', bg: 'bg-pink-50 hover:bg-pink-100' },
                { label: 'Facebook', icon: 'ri-facebook-circle-line', color: 'text-[#1877F2]', bg: 'bg-[#EEF4FF] hover:bg-[#dce9ff]' },
                { label: 'X / Twitter', icon: 'ri-twitter-x-line', color: 'text-[#2D2D2D]', bg: 'bg-[#F5F5F5] hover:bg-[#e8e8e8]' },
                { label: 'WhatsApp', icon: 'ri-whatsapp-line', color: 'text-emerald-600', bg: 'bg-emerald-50 hover:bg-emerald-100' },
              ].map((ch) => (
                <button
                  key={ch.label}
                  onClick={handleCopy}
                  title={`Copy link to share on ${ch.label}`}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium cursor-pointer transition-colors whitespace-nowrap ${ch.bg} ${ch.color}`}
                >
                  <i className={`${ch.icon} text-sm`}></i>
                  {ch.label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-[#A8A8A8] mt-2">Clicking any channel copies your link — paste it wherever you share.</p>
          </div>

          {/* Tip */}
          <div className="flex items-start gap-3 bg-[#F5EDE6] rounded-xl p-4">
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <i className="ri-lightbulb-flash-line text-[#C97D5D] text-sm"></i>
            </div>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              <span className="font-semibold text-[#2D2D2D]">Pro tip:</span> Print the QR code on your product tag, packaging, or social posts. Every scan shows real animals available for adoption right now.
            </p>
          </div>

        </div>
      </div>
    </div>

      {selectedMeta && (
        <PrintQRTagModal
          open={printOpen}
          onClose={() => setPrintOpen(false)}
          productName={selectedMeta.product}
          productType={selectedMeta.type}
          shelter={selectedMeta.shelter}
          shelterLocation="Austin, TX"
          qrLink={currentLink}
          totalScans={selectedMeta.total}
        />
      )}
    </>
  );
}
