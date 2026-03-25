import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options.once !== false) {
            observer.unobserve(element)
          }
        } else if (options.once === false) {
          setIsInView(false)
        }
      },
      { threshold: options.threshold ?? 0.2, rootMargin: options.rootMargin ?? '0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, options.once])

  return [ref, isInView]
}

export function useStaggerInView(options = {}) {
  const containerRef = useRef(null)
  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const children = container.querySelectorAll('[data-animate]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]))
            }, (options.stagger ?? 100) * index)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: options.threshold ?? 0.1 }
    )

    children.forEach((child) => observer.observe(child))
    return () => observer.disconnect()
  }, [options.stagger, options.threshold])

  return [containerRef, visibleItems]
}
