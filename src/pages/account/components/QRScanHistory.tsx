import { useState } from 'react';
import { scanHistory, weeklyScans, productScanTotals } from '@/mocks/scanHistory';
import ShareProductPanel from './ShareProductPanel';

type FilterProduct = 'all' | string;

const maxScans = Math.max(...weeklyScans.map((d) => d.scans));

const actionColor: Record<string, string> = {
  'Viewed shelter page': 'bg-[#F5EDE6] text-[#C97D5D]',
  'Viewed adoptable animals': 'bg-emerald-50 text-emerald-700',
  'Shared shelter link': 'bg-amber-50 text-amber-700',
};

const actionIcon: Record<string, string> = {
  'Viewed shelter page': 'ri-home-heart-line',
  'Viewed adoptable animals': 'ri-heart-line',
  'Shared shelter link': 'ri-share-line',
};

export default function QRScanHistory() {
  const [filter, setFilter] = useState<FilterProduct>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const products = [...new Set(scanHistory.map((s) => s.product))];

  const filtered = filter === 'all' ? scanHistory : scanHistory.filter((s) => s.product === filter);

  const totalScans = productScanTotals.reduce((acc, p) => acc + p.total, 0);
  const weekTotal = weeklyScans.reduce((acc, d) => acc + d.scans, 0);

  return (
    <div className="flex flex-col gap-6">

      {/* Top stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Scans', value: String(totalScans), icon: 'ri-qr-code-line', color: 'text-[#C97D5D]', bg: 'bg-[#F5EDE6]' },
          { label: 'This Week', value: String(weekTotal), icon: 'ri-bar-chart-2-line', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Products Active', value: String(productScanTotals.length), icon: 'ri-t-shirt-line', color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Unique Locations', value: '8', icon: 'ri-map-pin-line', color: 'text-[#C97D5D]', bg: 'bg-[#F5EDE6]' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl border border-[#F0EAE4] p-5">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${stat.bg} mb-3`}>
              <i className={`${stat.icon} text-base ${stat.color}`}></i>
            </div>
            <p className={`font-serif text-3xl font-semibold mb-1 ${stat.color}`}>{stat.value}</p>
            <p className="text-[#6B6B6B] text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Weekly bar chart + per-product breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Weekly chart */}
        <div className="bg-white rounded-2xl border border-[#F0EAE4] p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-serif text-lg text-[#2D2D2D]">Scans This Week</h3>
            <span className="text-xs text-[#A8A8A8]">Apr 16 – Apr 22</span>
          </div>
          <div className="flex items-end gap-2 h-28">
            {weeklyScans.map((d, i) => {
              const heightPct = Math.round((d.scans / maxScans) * 100);
              return (
                <div key={i} className="flex flex-col items-center gap-1.5 flex-1 group">
                  <span className="text-[10px] text-[#A8A8A8] opacity-0 group-hover:opacity-100 transition-opacity">{d.scans}</span>
                  <div className="w-full rounded-t-md bg-[#F5EDE6] relative overflow-hidden" style={{ height: '80px' }}>
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-[#C97D5D] rounded-t-md transition-all duration-500"
                      style={{ height: `${heightPct}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] text-[#A8A8A8]">{d.day}</span>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-[#A8A8A8] mt-4 text-center">Hover over bars to see daily totals</p>
        </div>

        {/* Per-product totals */}
        <div className="bg-white rounded-2xl border border-[#F0EAE4] p-6">
          <h3 className="font-serif text-lg text-[#2D2D2D] mb-5">Scans by Product</h3>
          <div className="flex flex-col gap-4">
            {productScanTotals.map((p, i) => {
              const pct = Math.round((p.total / totalScans) * 100);
              return (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-[#2D2D2D]">{p.product}</p>
                      <p className="text-xs text-[#A8A8A8]">{p.shelter}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#C97D5D] font-bold text-base">{p.total}</p>
                      <p className="text-[10px] text-[#A8A8A8]">
                        <span className="text-emerald-600 font-medium">+{p.thisWeek}</span> this week
                      </p>
                    </div>
                  </div>
                  <div className="h-2 bg-[#F5EDE6] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C97D5D] rounded-full transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-[#F7F5F2]">
            <p className="text-xs text-[#A8A8A8] flex items-center gap-1.5">
              <i className="ri-information-line text-[#C97D5D]"></i>
              Each scan connects someone to real animals at your chosen shelter.
            </p>
          </div>
        </div>
      </div>

      {/* Share product panel */}
      <ShareProductPanel />

      {/* Scan timeline */}
      <div className="bg-white rounded-2xl border border-[#F0EAE4] p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="font-serif text-lg text-[#2D2D2D]">Scan Timeline</h3>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${filter === 'all' ? 'bg-[#C97D5D] text-white' : 'bg-[#F5EDE6] text-[#C97D5D] hover:bg-[#eedad0]'}`}
            >
              All Products
            </button>
            {products.map((p) => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${filter === p ? 'bg-[#C97D5D] text-white' : 'bg-[#F5EDE6] text-[#C97D5D] hover:bg-[#eedad0]'}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col divide-y divide-[#F7F5F2]">
          {filtered.map((scan) => (
            <div key={scan.id} className="py-4">
              <button
                onClick={() => setExpanded(expanded === scan.id ? null : scan.id)}
                className="w-full text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Action icon */}
                  <div className={`w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 ${actionColor[scan.action] ?? 'bg-[#F5EDE6] text-[#C97D5D]'}`}>
                    <i className={`${actionIcon[scan.action] ?? 'ri-qr-code-line'} text-sm`}></i>
                  </div>

                  {/* Main info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p className="text-sm font-medium text-[#2D2D2D]">{scan.product}</p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${actionColor[scan.action] ?? 'bg-[#F5EDE6] text-[#C97D5D]'}`}>
                        {scan.action}
                      </span>
                    </div>
                    <p className="text-xs text-[#A8A8A8] mt-0.5 flex items-center gap-2 flex-wrap">
                      <span className="flex items-center gap-1">
                        <i className="ri-map-pin-line text-[#C97D5D]"></i>
                        {scan.location}
                      </span>
                      <span className="hidden sm:inline text-[#E0D8D0]">·</span>
                      <span>{scan.timestamp}</span>
                    </p>
                  </div>

                  {/* Expand arrow */}
                  <div className="w-5 h-5 flex items-center justify-center text-[#A8A8A8] flex-shrink-0">
                    {expanded === scan.id
                      ? <i className="ri-arrow-up-s-line text-sm"></i>
                      : <i className="ri-arrow-down-s-line text-sm"></i>
                    }
                  </div>
                </div>
              </button>

              {/* Expanded detail */}
              {expanded === scan.id && (
                <div className="mt-3 ml-[52px] bg-[#FAFAF8] rounded-xl p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Device', value: scan.device, icon: 'ri-smartphone-line' },
                    { label: 'Shelter Linked', value: scan.shelter, icon: 'ri-home-heart-line' },
                    { label: 'Shelter Location', value: scan.shelterLocation, icon: 'ri-map-pin-line' },
                  ].map((detail, i) => (
                    <div key={i}>
                      <p className="text-[10px] text-[#A8A8A8] uppercase tracking-wide mb-1 flex items-center gap-1">
                        <i className={`${detail.icon} text-[#C97D5D]`}></i>
                        {detail.label}
                      </p>
                      <p className="text-xs font-medium text-[#2D2D2D]">{detail.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F5EDE6] mx-auto mb-3">
              <i className="ri-qr-code-line text-xl text-[#C97D5D]"></i>
            </div>
            <p className="text-[#6B6B6B] text-sm">No scans recorded for this product yet.</p>
          </div>
        )}
      </div>

      {/* Info callout */}
      <div className="bg-[#F5EDE6] rounded-2xl p-5 flex items-start gap-4">
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white flex-shrink-0">
          <i className="ri-lightbulb-line text-[#C97D5D]"></i>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#2D2D2D] mb-1">Every scan is a direct connection to a shelter.</p>
          <p className="text-xs text-[#6B6B6B] leading-relaxed">
            When someone scans your QR code, they see real animals available for adoption right now — not a static page. Campaign-level scan tracking and deeper insights are coming soon.
          </p>
        </div>
      </div>

    </div>
  );
}
