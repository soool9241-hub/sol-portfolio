import { useInView } from '../hooks/useInView.js'
import { STRENGTHS } from '../data/strengths.js'

function StrengthCard({ item, index }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
      className="bg-[#111111] rounded-2xl overflow-hidden border border-[#1a1a1a] hover:border-[#40916C]/30 transition-all hover:-translate-y-1"
    >
      <img
        src={item.image}
        alt={item.tag}
        className="h-[160px] w-full object-cover"
      />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{item.icon}</span>
          <span className="text-[#40916C] font-bold">{item.tag}</span>
        </div>
        <blockquote className="italic text-[#888] border-l-2 border-[#40916C] pl-4 my-3">
          {item.quote}
        </blockquote>
        <ul className="space-y-1.5">
          {item.points.map((point, i) => (
            <li key={i} className="text-sm text-[#e0e0e0]">
              <span className="text-[#40916C] mr-1">→</span> {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Strengths() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 })

  return (
    <section id="strengths" className="py-20 px-4">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div
          ref={headerRef}
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
          className="mb-12"
        >
          <p className="font-mono text-[#40916C] tracking-widest text-sm">MY STRENGTHS</p>
          <h2 className="text-3xl font-bold mt-2 text-white">저의 강점은요.</h2>
          <p className="text-[#888] mt-2">
            서툴지만 진심을 다해, 끈임없이 만들고, 배우고, 나누는 메이커
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STRENGTHS.map((item, index) => (
            <StrengthCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
