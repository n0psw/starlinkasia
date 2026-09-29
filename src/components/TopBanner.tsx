const TopBanner = () => (
  <div
    data-top-banner="true"
    className="relative w-full overflow-hidden flex items-center justify-center py-2 px-4 text-center"
    style={{
      background: 'linear-gradient(90deg, rgba(14,165,233,0.12), rgba(56,189,248,0.08), rgba(14,165,233,0.12))',
      borderBottom: '1px solid rgba(14,165,233,0.15)',
    }}
  >
    <p className="text-[11px] md:text-[12px] font-medium tracking-wide" style={{ color: '#7dd3fc' }}>
      🛰️ Starlink Asia — Высокоскоростной спутниковый интернет по всей Азии &nbsp;·&nbsp; Официальный дилер
    </p>
  </div>
)

export default TopBanner
