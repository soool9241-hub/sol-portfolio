import { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../data/constants';

export default function PhotoStrip() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-highlight every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-t border-b border-[#1a1a1a]">
      <div className="flex justify-center gap-4 overflow-x-auto py-8 px-4 sm:px-6 scrollbar-hide">
        {GALLERY_IMAGES.map(({ src, caption }, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative w-[240px] h-[160px] rounded-xl overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-500 ${
                isActive
                  ? 'scale-105 brightness-100 border-2 border-[#40916C]'
                  : 'brightness-[0.6] scale-100 border-2 border-transparent'
              }`}
            >
              <img
                src={src}
                alt={caption}
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                <p className="text-white text-xs">{caption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
