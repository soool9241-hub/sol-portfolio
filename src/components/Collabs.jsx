import { COLLABS } from '../data/collabs.js'
import { useInView } from '../hooks/useInView.js'

export default function Collabs() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="collabs" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-[#40916C] text-sm tracking-widest uppercase mb-2">
            COLLABORATION
          </p>
          <h2 className="text-3xl font-bold text-white">
            브랜드 콜라보 & 제조 기획
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {COLLABS.map((item, i) => (
            <div
              key={i}
              className="bg-[#111111] p-4 sm:p-6 rounded-2xl border border-[#1a1a1a] hover:border-[#40916C]/30 transition-all group relative overflow-hidden"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 600ms ease ${i * 80}ms`,
              }}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base sm:text-[22px] font-bold text-white break-keep">
                    {item.brand}
                  </h3>
                  <p className="text-[12px] text-[#888] mt-1">{item.sub}</p>
                </div>
                <span className="text-[28px] group-hover:scale-[1.3] group-hover:rotate-[-10deg] transition-transform">
                  {item.emoji}
                </span>
              </div>

              {/* Scope Tag */}
              <div className="mt-4">
                <span className="text-[#40916C] text-sm bg-[#1B4332]/20 px-3 py-1 rounded-full inline-block">
                  {item.scope}
                </span>
              </div>

              {/* Hover Bottom Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1B4332] to-[#40916C] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
