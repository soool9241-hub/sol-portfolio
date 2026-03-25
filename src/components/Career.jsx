import { useState } from 'react'
import { useInView } from '../hooks/useInView.js'
import { PROJECTS } from '../data/projects.js'
import { FILTER_TAGS } from '../data/constants.js'

function ProjectCard({ item }) {
  const Wrapper = item.url ? 'a' : 'div'
  const linkProps = item.url ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Wrapper
      {...linkProps}
      className={`group bg-[#111111] p-4 rounded-xl border border-[#1a1a1a] hover:border-[#40916C]/30 hover:-translate-y-1 transition-all relative overflow-hidden block ${
        item.highlight ? 'border-l-2 border-l-[#40916C]' : ''
      }`}
    >
      {/* Green gradient line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#40916C] to-[#2D6A4F] opacity-0 group-hover:opacity-100 transition-opacity" />

      <h4 className="font-bold text-white text-[15px] mb-1 flex items-center gap-2">
        {item.title}
        {item.url && <span className="text-[#40916C] text-xs font-normal">↗</span>}
      </h4>

      {item.desc && (
        <p className="text-[#888] text-xs leading-relaxed mb-3">{item.desc}</p>
      )}

      {item.steps && (
        <div className="flex gap-2 mb-3">
          {[
            { key: 'plan', label: '기획' },
            { key: 'dev', label: '개발' },
            ...(item.steps.produce !== undefined ? [{ key: 'produce', label: '생산' }] : []),
            ...(item.steps.prototype !== undefined ? [{ key: 'prototype', label: '시제품제작' }] : []),
            ...(item.steps.install !== undefined ? [{ key: 'install', label: '설치' }] : []),
            ...(item.steps.deploy !== undefined ? [{ key: 'deploy', label: '배포' }] : []),
            ...(item.steps.upgrade !== undefined ? [{ key: 'upgrade', label: '고도화' }] : []),
            { key: 'publish', label: '퍼블리싱' },
          ].map(({ key, label }) => (
            <span
              key={key}
              className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                item.steps[key]
                  ? 'bg-[#40916C]/20 text-[#40916C]'
                  : 'bg-[#1a1a1a] text-[#555]'
              }`}
            >
              {item.steps[key] ? '✓' : '○'} {label}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <span className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a1a] text-[#888]">
          {item.scope}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-[#1B4332]/30 text-[#40916C]">
          {item.tag}
        </span>
      </div>
    </Wrapper>
  )
}

export default function Career() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 })
  const [activeFilter, setActiveFilter] = useState('핵심')

  const filteredProjects = PROJECTS.map((group) => ({
    ...group,
    items: activeFilter === '전체'
      ? group.items
      : activeFilter === '핵심'
        ? group.items.filter((item) => item.highlight)
        : group.items.filter((item) => item.tag === activeFilter),
  })).filter((group) => group.items.length > 0)

  return (
    <section id="career" className="py-20 px-4">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div
          ref={headerRef}
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
          className="mb-8"
        >
          <p className="font-mono text-[#40916C] tracking-widest text-sm">CAREER</p>
          <h2 className="text-3xl font-bold mt-2 text-white">프로젝트 경력</h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                activeFilter === tag
                  ? 'bg-[#40916C] text-white'
                  : 'bg-[#111111] text-[#888] border border-[#1a1a1a] hover:border-[#40916C]/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Year groups */}
        <div className="space-y-8">
          {filteredProjects.map((group) => (
            <YearGroup key={group.year} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}

function YearGroup({ group }) {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <div className="sticky top-16 bg-[#080808] py-3 border-b border-[#1a1a1a] mb-4 z-10 flex items-center gap-3">
        <span className="font-mono font-black text-3xl md:text-4xl text-[#40916C]">{group.year}</span>
        <span className="h-[2px] flex-1 bg-gradient-to-r from-[#40916C]/40 to-transparent" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(() => {
          const rendered = []
          const seen = new Set()
          group.items.forEach((item, i) => {
            if (item.group) {
              if (seen.has(item.group)) return
              seen.add(item.group)
              const grouped = group.items.filter((it) => it.group === item.group)
              rendered.push(
                <div key={`group-${item.group}`} className="bg-[#111111] rounded-xl border border-[#1a1a1a] overflow-hidden">
                  <div className="px-4 pt-4 pb-2 border-b border-[#1a1a1a]">
                    <span className="text-[#40916C] font-bold text-sm">🚌 {item.group}</span>
                    <span className="text-[#555] text-xs ml-2">{grouped.length}개 앱</span>
                  </div>
                  <div className="divide-y divide-[#1a1a1a]">
                    {grouped.map((sub, j) => {
                      const W = sub.url ? 'a' : 'div'
                      const lp = sub.url ? { href: sub.url, target: '_blank', rel: 'noopener noreferrer' } : {}
                      return (
                        <W key={j} {...lp} className="block px-4 py-3 hover:bg-[#1a1a1a]/50 transition-colors">
                          <h4 className="font-bold text-white text-[14px] flex items-center gap-2">
                            {sub.title.replace(/뛰뛰빵빵 버스콜 — /, '')}
                            {sub.url && <span className="text-[#40916C] text-xs font-normal">↗</span>}
                          </h4>
                          <p className="text-[#888] text-xs mt-0.5">{sub.desc}</p>
                        </W>
                      )
                    })}
                  </div>
                  <div className="px-4 py-3 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a1a] text-[#888]">{item.scope}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#1B4332]/30 text-[#40916C]">{item.tag}</span>
                  </div>
                </div>
              )
            } else {
              rendered.push(<ProjectCard key={i} item={item} />)
            }
          })
          return rendered
        })()}
      </div>
    </div>
  )
}
