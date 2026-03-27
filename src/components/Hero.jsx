import { HERO_STATS } from '../data/constants';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Green radial glow background */}
      <div
        className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(64,145,108,0.20) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
          {/* Left: Profile image */}
          <div className="shrink-0">
            <img
              src="/images/sol-profile-bw.jpg"
              alt="임솔 프로필"
              className="w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[280px] md:h-[420px] object-cover rounded-[20px] shadow-2xl"
            />
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Subtitle */}
            <p className="font-mono text-[#40916C] tracking-[6px] text-xs mb-4">
              MAKER &middot; BUILDER &middot; CREATOR
            </p>

            {/* Name */}
            <h1
              className="font-black text-white leading-none mb-5"
              style={{ fontSize: 'clamp(36px, 8vw, 80px)' }}
            >
              임 솔
            </h1>

            {/* Description */}
            <p className="text-[#ccc] text-sm sm:text-base leading-relaxed mb-1">
              120평 CNC 공방 &middot; 60평 독채 펜션 &middot; AI 에이전트 84명
            </p>
            <p className="text-[#40916C] text-sm sm:text-base leading-relaxed mb-6">
              스토리팜 대표 &middot; 청년장인 &middot; 10년차 메이커
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 justify-center md:justify-start">
              {HERO_STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-mono font-bold text-white text-lg sm:text-xl">
                    {value}
                  </div>
                  <div className="text-xs text-[#888]">{label}</div>
                </div>
              ))}
            </div>

            {/* Contact pills */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a1a1a] text-[#aaa] text-xs">
                <span className="text-[#40916C]">tel</span> 010-8531-9531
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a1a1a] text-[#aaa] text-xs">
                <span className="text-[#40916C]">kakao</span> sool9241
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a1a1a] text-[#aaa] text-xs">
                <span className="text-[#40916C]">email</span> sool9241@naver.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
