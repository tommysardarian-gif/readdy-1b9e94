import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

interface PrintQRTagModalProps {
  open: boolean;
  onClose: () => void;
  productName: string;
  productType: string;
  shelter: string;
  shelterLocation: string;
  qrLink: string;
  totalScans: number;
}

type TagStyle = 'minimal' | 'warm' | 'bold';

const tagStyles: { id: TagStyle; label: string }[] = [
  { id: 'minimal', label: 'Minimal' },
  { id: 'warm', label: 'Warm' },
  { id: 'bold', label: 'Bold' },
];

export default function PrintQRTagModal({
  open,
  onClose,
  productName,
  productType,
  shelter,
  shelterLocation,
  qrLink,
  totalScans,
}: PrintQRTagModalProps) {
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [tagStyle, setTagStyle] = useState<TagStyle>('warm');
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    QRCode.toDataURL(qrLink, {
      width: 300,
      margin: 1,
      color: {
        dark: tagStyle === 'bold' ? '#FFFFFF' : '#2D2D2D',
        light: tagStyle === 'bold' ? '#C97D5D' : '#FFFFFF',
      },
      errorCorrectionLevel: 'H',
    })
      .then(setQrDataUrl)
      .catch(() => setQrDataUrl(''));
  }, [open, qrLink, tagStyle]);

  const handlePrint = () => {
    window.print();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden-overlay">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 print:hidden"
        onClick={onClose}
      ></div>

      {/* Modal shell */}
      <div className="relative bg-white rounded-2xl border border-[#F0EAE4] w-full max-w-2xl max-h-[92vh] overflow-y-auto z-10 print:hidden">

        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F7F5F2]">
          <div>
            <h3 className="font-serif text-lg text-[#2D2D2D]">Print QR Tag</h3>
            <p className="text-xs text-[#A8A8A8] mt-0.5">Choose a style, preview, then print.</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F5EDE6] text-[#A8A8A8] hover:text-[#C97D5D] transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-lg"></i>
          </button>
        </div>

        {/* Style picker */}
        <div className="px-6 pt-5 pb-4">
          <p className="text-xs font-semibold text-[#A8A8A8] uppercase tracking-wide mb-3">Tag Style</p>
          <div className="flex gap-2">
            {tagStyles.map((s) => (
              <button
                key={s.id}
                onClick={() => setTagStyle(s.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 whitespace-nowrap ${
                  tagStyle === s.id
                    ? 'bg-[#C97D5D] text-white'
                    : 'bg-[#F5EDE6] text-[#C97D5D] hover:bg-[#eedad0]'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Preview area */}
        <div className="px-6 pb-6 flex flex-col items-center gap-6">
          <div className="w-full flex items-center justify-center bg-[#F7F5F2] rounded-2xl py-10 px-4">
            <TagCard
              style={tagStyle}
              productName={productName}
              productType={productType}
              shelter={shelter}
              shelterLocation={shelterLocation}
              qrDataUrl={qrDataUrl}
              totalScans={totalScans}
              printRef={printRef}
            />
          </div>

          {/* Info row */}
          <div className="flex items-start gap-3 bg-[#F5EDE6] rounded-xl p-4 w-full">
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <i className="ri-printer-line text-[#C97D5D] text-sm"></i>
            </div>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              <span className="font-semibold text-[#2D2D2D]">Best results:</span> Print on cardstock at 100% scale (no fit-to-page). Cut along the card edge and attach to your product tag, packaging, or display.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 w-full">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-[#F0EAE4] text-sm text-[#6B6B6B] font-medium cursor-pointer hover:bg-[#FAFAF8] transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              onClick={handlePrint}
              disabled={!qrDataUrl}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#C97D5D] text-white text-sm font-medium cursor-pointer hover:bg-[#b56d4e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
            >
              <i className="ri-printer-line"></i>
              Print Tag
            </button>
          </div>
        </div>
      </div>

      {/* ── PRINT-ONLY CARD ── rendered outside modal, visible only when printing */}
      <div className="hidden print:block print-tag-root">
        <TagCard
          style={tagStyle}
          productName={productName}
          productType={productType}
          shelter={shelter}
          shelterLocation={shelterLocation}
          qrDataUrl={qrDataUrl}
          totalScans={totalScans}
          printRef={undefined}
        />
      </div>
    </div>
  );
}

/* ─── Shared card component ─── */
interface TagCardProps {
  style: TagStyle;
  productName: string;
  productType: string;
  shelter: string;
  shelterLocation: string;
  qrDataUrl: string;
  totalScans: number;
  printRef?: React.RefObject<HTMLDivElement> | undefined;
}

function TagCard({
  style,
  productName,
  productType,
  shelter,
  shelterLocation,
  qrDataUrl,
  totalScans,
  printRef,
}: TagCardProps) {
  if (style === 'minimal') {
    return (
      <div
        ref={printRef}
        className="w-[280px] bg-white border border-[#E8E0D8] rounded-2xl overflow-hidden flex flex-col items-center p-6 gap-4"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        <div className="w-full flex items-center justify-between">
          <span className="text-[10px] font-sans font-semibold tracking-[0.15em] uppercase text-[#A8A8A8]">RescueWear</span>
          <span className="text-[10px] font-sans text-[#C97D5D] tracking-wide">{productType}</span>
        </div>
        <div className="w-[160px] h-[160px] flex items-center justify-center border border-[#E8E0D8] rounded-xl p-2 bg-white">
          {qrDataUrl
            ? <img src={qrDataUrl} alt="QR" className="w-full h-full object-contain" />
            : <i className="ri-loader-4-line text-2xl text-[#C97D5D] animate-spin"></i>
          }
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-[#2D2D2D] leading-snug">{productName}</p>
          <p className="text-[11px] text-[#6B6B6B] mt-1">{shelter}</p>
          <p className="text-[10px] text-[#A8A8A8]">{shelterLocation}</p>
        </div>
        <div className="w-full border-t border-dashed border-[#E8E0D8] pt-3 text-center">
          <p className="text-[10px] font-sans text-[#A8A8A8] leading-relaxed">Scan to meet real animals<br />available for adoption now.</p>
        </div>
      </div>
    );
  }

  if (style === 'warm') {
    return (
      <div
        ref={printRef}
        className="w-[280px] bg-[#FDF8F4] border border-[#EDD9C8] rounded-2xl overflow-hidden flex flex-col"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-[#C97D5D]"></div>
        <div className="flex flex-col items-center p-6 gap-4">
          <div className="text-center">
            <p className="text-[10px] font-sans font-bold tracking-[0.18em] uppercase text-[#C97D5D]">RescueWear</p>
            <p className="text-base font-semibold text-[#2D2D2D] mt-1 leading-snug">{productName}</p>
          </div>
          {/* QR */}
          <div className="w-[156px] h-[156px] flex items-center justify-center bg-white border-2 border-[#EDD9C8] rounded-xl p-2 relative">
            {qrDataUrl
              ? <img src={qrDataUrl} alt="QR" className="w-full h-full object-contain" />
              : <i className="ri-loader-4-line text-2xl text-[#C97D5D] animate-spin"></i>
            }
            <span className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C97D5D]"></span>
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C97D5D]"></span>
            <span className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C97D5D]"></span>
            <span className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C97D5D]"></span>
          </div>
          {/* Shelter info */}
          <div className="w-full bg-white rounded-xl border border-[#EDD9C8] px-4 py-3 flex items-center gap-3">
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#F5EDE6] flex-shrink-0">
              <i className="ri-home-heart-line text-[#C97D5D] text-sm"></i>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-[#2D2D2D] truncate">{shelter}</p>
              <p className="text-[10px] text-[#A8A8A8]">{shelterLocation}</p>
            </div>
          </div>
          {/* CTA */}
          <div className="text-center">
            <p className="text-[11px] font-sans font-semibold text-[#C97D5D] tracking-wide">SCAN TO MEET REAL ANIMALS</p>
            <p className="text-[10px] font-sans text-[#A8A8A8] mt-0.5">Available for adoption right now.</p>
          </div>
          {/* Scan count */}
          <div className="flex items-center gap-1.5 text-[10px] font-sans text-[#A8A8A8]">
            <i className="ri-qr-code-line text-[#C97D5D]"></i>
            <span>{totalScans} people connected so far</span>
          </div>
        </div>
        <div className="h-1.5 w-full bg-[#EDD9C8]"></div>
      </div>
    );
  }

  // bold
  return (
    <div
      ref={printRef}
      className="w-[280px] rounded-2xl overflow-hidden flex flex-col"
      style={{ fontFamily: "'Georgia', serif", background: '#1a1a1a' }}
    >
      <div className="flex flex-col items-center p-6 gap-4">
        <div className="text-center">
          <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#C97D5D]">RescueWear</p>
          <p className="text-base font-semibold text-white mt-1 leading-snug">{productName}</p>
          <p className="text-[10px] font-sans text-[#A8A8A8] mt-0.5">{productType}</p>
        </div>
        {/* QR on orange bg */}
        <div className="w-[156px] h-[156px] flex items-center justify-center bg-[#C97D5D] rounded-xl p-3">
          {qrDataUrl
            ? <img src={qrDataUrl} alt="QR" className="w-full h-full object-contain" />
            : <i className="ri-loader-4-line text-2xl text-white animate-spin"></i>
          }
        </div>
        {/* Shelter */}
        <div className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex items-center gap-3">
          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C97D5D]/20 flex-shrink-0">
            <i className="ri-home-heart-line text-[#C97D5D] text-sm"></i>
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold text-white truncate">{shelter}</p>
            <p className="text-[10px] text-[#A8A8A8]">{shelterLocation}</p>
          </div>
        </div>
        {/* CTA */}
        <div className="text-center">
          <p className="text-[11px] font-sans font-bold text-[#C97D5D] tracking-widest uppercase">Scan to adopt</p>
          <p className="text-[10px] font-sans text-[#A8A8A8] mt-0.5">Real animals. Real shelters. Right now.</p>
        </div>
      </div>
    </div>
  );
}
