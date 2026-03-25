import { useState, useEffect } from 'react'
import { METRICS_DATA } from '../data/constants.js'
import { useInView } from '../hooks/useInView.js'

function parseValue(str) {
  // Extract numeric part and suffix
  const match = str.match(/^([0-9,.]+)(.*)$/)
  if (!match) return { number: 0, suffix: str, prefix: '' }
  const prefixMatch = str.match(/^([^0-9]*)/)
  const prefix = prefixMatch ? prefixMatch[1] : ''
  const rest = str.slice(prefix.length)
  const numMatch = rest.match(/^([0-9,.]+)(.*)$/)
  if (!numMatch) return { number: 0, suffix: str, prefix: '' }
  const numStr = numMatch[1].replace(/,/g, '')
  return {
    number: parseFloat(numStr),
    suffix: numMatch[2],
    prefix,
    hasComma: numMatch[1].includes(','),
    original: str,
  }
}

function formatNumber(num, hasComma) {
  if (Number.isInteger(num)) {
    return hasComma ? num.toLocaleString() : String(num)
  }
  // Keep one decimal if original had it
  const formatted = num.toFixed(1)
  return hasComma ? parseFloat(formatted).toLocaleString() : formatted
}

function AnimatedValue({ value, isInView }) {
  const [displayValue, setDisplayValue] = useState(value)
  const parsed = parseValue(value)

  useEffect(() => {
    if (!isInView || parsed.number === 0) {
      setDisplayValue(value)
      return
    }

    const duration = 1200
    const startTime = performance.now()
    let rafId

    function animate(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = parsed.number * eased
      const formatted = formatNumber(
        Number.isInteger(parsed.number) ? Math.round(current) : parseFloat(current.toFixed(1)),
        parsed.hasComma
      )
      setDisplayValue(`${parsed.prefix}${formatted}${parsed.suffix}`)

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    setDisplayValue(`${parsed.prefix}0${parsed.suffix}`)
    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, value, parsed.number, parsed.prefix, parsed.suffix, parsed.hasComma])

  return <>{displayValue}</>
}

export default function Metrics() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="metrics" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-[#40916C] text-sm tracking-widest uppercase mb-2">
            ACHIEVEMENTS
          </p>
          <h2 className="text-3xl font-bold text-white">핵심 성과</h2>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {METRICS_DATA.map((item, i) => (
            <div
              key={i}
              className="bg-[#111111] p-5 rounded-xl border border-[#1a1a1a] text-center"
              style={{
                borderTopColor: item.color,
                borderTopWidth: '3px',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 500ms ease ${i * 100}ms`,
              }}
            >
              <div
                className="font-mono text-3xl md:text-4xl font-bold"
                style={{ color: item.color }}
              >
                <AnimatedValue value={item.value} isInView={isInView} />
              </div>
              <p className="text-[12px] text-[#888] mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
