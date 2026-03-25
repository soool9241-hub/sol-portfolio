import { useInView } from '../hooks/useInView.js'
import { TECH_STACK } from '../data/constants.js'

export default function TechStack() {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <section id="techstack" ref={ref} className="py-20 px-6 bg-[#080808]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <p
          className={`font-mono text-[#40916C] text-sm tracking-widest uppercase transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          TECH STACK
        </p>
        <h2
          className={`text-3xl font-bold text-white mt-2 transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          기술 스택
        </h2>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {TECH_STACK.map((tech, i) => (
            <div
              key={tech.name}
              className={`bg-[#111111] p-6 rounded-2xl border border-[#1a1a1a] hover:border-[#40916C]/30 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isInView ? `${200 + i * 100}ms` : '0ms' }}
            >
              <div className="text-3xl">{tech.icon}</div>
              <div className="font-bold text-white mt-3">{tech.name}</div>
              <ul>
                {tech.items.map((item) => (
                  <li key={item} className="text-sm text-[#888] mt-1">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
