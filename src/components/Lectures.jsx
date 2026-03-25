import { useInView } from '../hooks/useInView.js'
import { LECTURES_DATA } from '../data/constants.js'

export default function Lectures() {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <section id="lectures" ref={ref} className="py-20 px-6 bg-[#080808]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <p
          className={`font-mono text-[#40916C] text-sm tracking-widest uppercase transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          LECTURES
        </p>
        <h2
          className={`text-3xl font-bold text-white mt-2 transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          강연 &amp; 자문
        </h2>

        {/* Lecture List */}
        <div className="mt-10">
          {LECTURES_DATA.map((item, i) => (
            <div
              key={`${item.place}-${item.date}`}
              className={`bg-[#111111] p-5 rounded-xl border border-[#1a1a1a] hover:border-[#40916C]/30 transition-all mb-3 flex justify-between items-center duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isInView ? `${200 + i * 80}ms` : '0ms' }}
            >
              <div>
                <div className="font-bold text-white">{item.place}</div>
                <div className="text-[#888] text-sm mt-1">{item.title}</div>
              </div>
              <div className="font-mono text-[#40916C] text-sm whitespace-nowrap ml-4">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
