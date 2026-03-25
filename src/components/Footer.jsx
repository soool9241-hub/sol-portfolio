import { useState, useEffect } from 'react'
import { EXTERNAL_LINKS } from '../data/constants.js'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] py-12 px-6 relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Profile Image */}
        <img
          src="/images/sol-workshop-front.jpg"
          alt="임솔"
          className="w-20 h-20 rounded-full object-cover mx-auto"
        />

        {/* Logo */}
        <div className="font-mono text-[#40916C] text-2xl mt-4 text-center font-bold">SOL.</div>

        {/* Quote */}
        <p className="text-[#888] italic text-center mt-2">
          달팽이처럼 천천히, 하지만 정성을 담아 준비하겠습니다.
        </p>

        {/* Contact */}
        <div className="flex gap-6 justify-center mt-6">
          <a href="tel:010-2345-6789" className="text-[#888] text-sm hover:text-[#40916C] transition">
            전화
          </a>
          <a href="https://open.kakao.com" className="text-[#888] text-sm hover:text-[#40916C] transition">
            카카오톡
          </a>
          <a href="mailto:sool9241@naver.com" className="text-[#888] text-sm hover:text-[#40916C] transition">
            이메일
          </a>
        </div>

        {/* External Links */}
        <div className="flex gap-4 justify-center mt-4">
          {EXTERNAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[#888] hover:text-[#40916C] transition"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-[#555] text-xs mt-8">
          &copy; 2026 스토리팜. 임솔.
        </p>
      </div>

      {/* Back to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[#40916C] text-white flex items-center justify-center cursor-pointer hover:bg-[#2D6A4F] transition-all duration-300 shadow-lg"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  )
}
