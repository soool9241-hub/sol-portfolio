import { REVENUE_DATA, PENSION_STATS } from '../data/constants.js'
import { useInView } from '../hooks/useInView.js'

export default function Revenue() {
  const [chartRef, chartInView] = useInView({ threshold: 0.2 })
  const [statsRef, statsInView] = useInView({ threshold: 0.2 })

  return (
    <section id="revenue" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-2">
          <p className="font-mono text-[#40916C] text-sm tracking-widest uppercase mb-2">
            REVENUE
          </p>
          <h2 className="text-3xl font-bold text-white">
            펜션 매출 5년간 7배 성장
          </h2>
        </div>
        <p className="text-[#888] text-sm mb-12">
          달팽이아지트 304건 Supabase 데이터 기반
        </p>

        {/* Bar Chart */}
        <div ref={chartRef} className="space-y-3">
          {REVENUE_DATA.map((item, i) => {
            const widthPercent = (item.amount / 82) * 100

            return (
              <div key={item.year} className="flex items-center gap-2 sm:gap-4">
                {/* Year */}
                <span className="w-[40px] sm:w-[60px] font-mono text-[#40916C] font-bold text-right shrink-0 text-xs sm:text-base">
                  {item.year}
                </span>

                {/* Bar */}
                <div className="flex-1 relative">
                  <div
                    className="h-[28px] sm:h-[40px] rounded-r-lg bg-gradient-to-r from-[#1B4332] to-[#40916C]"
                    style={{
                      width: chartInView ? `${widthPercent}%` : '0%',
                      transition: `all 1500ms ease ${i * 200}ms`,
                    }}
                  />
                </div>

                {/* Amount */}
                <span className="font-mono text-white font-bold w-[45px] sm:w-[60px] shrink-0 text-xs sm:text-base">
                  {item.amount}만
                </span>

                {/* Growth Badge */}
                <span className="text-[#40916C] text-xs sm:text-sm w-[45px] sm:w-[60px] shrink-0">
                  {item.growth || ''}
                </span>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8"
        >
          {PENSION_STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-[#111111] p-4 rounded-xl border border-[#1a1a1a] text-center"
              style={{
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? 'translateY(0)' : 'translateY(16px)',
                transition: `all 500ms ease ${i * 80}ms`,
              }}
            >
              <div className="font-mono text-xl font-bold text-white">
                {stat.value}
              </div>
              <p className="text-[12px] text-[#888] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
