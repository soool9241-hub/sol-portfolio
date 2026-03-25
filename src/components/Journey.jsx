import { useStaggerInView } from '../hooks/useInView.js'
import { JOURNEY_DATA } from '../data/constants.js'
import { useInView } from '../hooks/useInView.js'

export default function Journey() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 })
  const [timelineRef, visibleItems] = useStaggerInView({ stagger: 120, threshold: 0.05 })

  return (
    <section id="journey" className="py-20 px-4">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div
          ref={headerRef}
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-[#40916C] tracking-widest text-sm">HISTORY</p>
          <h2 className="text-3xl font-bold mt-2 text-white">걸어온 히스토리</h2>
        </div>

        <div ref={timelineRef} className="relative max-w-[600px] mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-[#1a1a1a]" />

          <div className="space-y-8">
            {[...JOURNEY_DATA].reverse().map((item, index) => {
              const isVisible = visibleItems.has(String(index))

              return (
                <div
                  key={index}
                  data-animate
                  data-index={index}
                  className="flex items-start gap-6 group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                  }}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-3 h-3 rounded-full bg-[#40916C] transition-all duration-300 group-hover:scale-[1.4] group-hover:shadow-[0_0_12px_#40916C]"
                    />
                  </div>

                  {/* Content */}
                  <div className="-mt-1">
                    <span className="font-mono text-[#40916C] font-bold text-sm">
                      {item.year}
                    </span>
                    <h3 className="text-white font-bold mt-0.5">{item.title}</h3>
                    <p className="text-[#888] text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
