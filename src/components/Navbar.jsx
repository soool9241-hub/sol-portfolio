import { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS } from '../data/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const observerRef = useRef(null);

  // Scroll state & progress
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section detection
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    observerRef.current = observer;

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#080808]/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <span
          onClick={scrollToTop}
          className="font-mono text-[#40916C] text-lg sm:text-xl font-bold cursor-pointer select-none shrink-0"
        >
          SOL.
        </span>

        {/* Nav items */}
        <div className="flex items-center gap-1 sm:gap-3 flex-nowrap overflow-x-auto scrollbar-hide ml-4">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative text-xs sm:text-sm whitespace-nowrap px-2 py-2 transition-colors duration-200 shrink-0 ${
                  isActive ? 'text-[#40916C]' : 'text-[#888] hover:text-white'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#40916C]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-[#40916C] origin-left transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
    </nav>
  );
}
