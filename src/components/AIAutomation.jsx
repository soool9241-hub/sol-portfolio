import { useInView } from '../hooks/useInView.js'
import { AGENT_TEAMS, AUTOMATION_STATS } from '../data/constants.js'

export default function AIAutomation() {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <section id="automation" ref={ref} className="py-20 px-6 bg-[#080808]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <p
          className={`font-mono text-[#40916C] text-sm tracking-widest uppercase transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          AI &amp; AUTOMATION
        </p>
        <h2
          className={`text-3xl font-bold text-white mt-2 transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          AI 에이전트 &amp; 자동화
        </h2>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {AGENT_TEAMS.map((team, i) => (
            <div
              key={team.name}
              className={`bg-[#111111] p-6 rounded-2xl border border-[#1a1a1a] relative transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: isInView ? `${200 + i * 100}ms` : '0ms',
                borderLeftWidth: '3px',
                borderLeftColor: team.color,
              }}
            >
              {/* Team Name + Count Badge */}
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-lg">{team.name}</span>
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold"
                  style={{
                    backgroundColor: `${team.color}33`,
                    color: team.color,
                  }}
                >
                  {team.count}
                </span>
              </div>

              {/* Agent List */}
              <div className="flex flex-wrap gap-2 mt-4">
                {team.agents.map((agent) => (
                  <span
                    key={agent}
                    className="px-3 py-1 rounded-full text-xs bg-[#1a1a1a] text-[#888] border border-[#1a1a1a]"
                  >
                    {agent}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Automation Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {AUTOMATION_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-[#111111] p-5 rounded-xl border border-[#1a1a1a] text-center transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isInView ? `${500 + i * 100}ms` : '0ms' }}
            >
              <div className="font-mono text-3xl font-bold text-[#40916C]">{stat.value}</div>
              <div className="text-sm text-[#888] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
