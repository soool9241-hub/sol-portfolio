import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView.js'
import { supabase } from '../lib/supabase.js'

const PASS = '9241'

function formatDate(iso) {
  const d = new Date(iso)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const h = String(d.getHours()).padStart(2, '0')
  const min = String(d.getMinutes()).padStart(2, '0')
  return `${y}.${m}.${day} ${h}:${min}`
}

function DiaryEntry({ entry, manageMode, onDelete, onSave }) {
  const [editing, setEditing] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [editContent, setEditContent] = useState(entry.content)

  const handleSave = () => {
    if (!editContent.trim()) return
    onSave(entry.id, editContent.trim())
    setEditing(false)
  }

  const lineCount = entry.content.split('\n').length
  const isLong = lineCount > 3 || entry.content.length > 150

  return (
    <div className="bg-[#111111] rounded-xl border border-[#1a1a1a] p-5 hover:border-[#40916C]/20 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#40916C] text-sm font-mono font-bold">{formatDate(entry.created_at)}</span>
        {manageMode && !editing && (
          <div className="flex gap-2">
            <button
              onClick={() => setEditing(true)}
              className="text-xs px-3 py-1 rounded-md bg-[#1a1a1a] text-[#888] hover:text-white transition-colors"
            >
              수정
            </button>
            <button
              onClick={() => onDelete(entry.id)}
              className="text-xs px-3 py-1 rounded-md bg-red-900/20 text-red-400 hover:bg-red-900/40 transition-colors"
            >
              삭제
            </button>
          </div>
        )}
      </div>
      {editing ? (
        <div>
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows={4}
            className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#40916C] focus:outline-none resize-none leading-relaxed"
          />
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={() => { setEditing(false); setEditContent(entry.content) }}
              className="text-xs px-4 py-1.5 rounded-md bg-[#1a1a1a] text-[#888] hover:text-white transition-colors"
            >
              취소
            </button>
            <button
              onClick={handleSave}
              disabled={!editContent.trim()}
              className="text-xs px-4 py-1.5 rounded-md bg-[#40916C] text-white hover:bg-[#2D6A4F] transition-colors disabled:opacity-40"
            >
              저장
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p
            className={`text-[#e0e0e0] text-sm leading-relaxed whitespace-pre-wrap ${
              !expanded && isLong ? 'line-clamp-3' : ''
            }`}
          >
            {entry.content}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#40916C] text-xs mt-2 hover:text-white transition-colors"
            >
              {expanded ? '접기 ▲' : '더보기 ▼'}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default function Diary() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 })
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [manageMode, setManageMode] = useState(false)
  const [managePass, setManagePass] = useState('')
  const [manageAuth, setManageAuth] = useState(false)
  const [manageError, setManageError] = useState('')

  const fetchEntries = async () => {
    const { data, error } = await supabase
      .from('diary')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error && data) setEntries(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  const handleAuth = () => {
    if (password === PASS) {
      setAuthenticated(true)
      setError('')
    } else {
      setError('비밀번호가 틀렸습니다')
    }
  }

  const handleManageAuth = () => {
    if (managePass === PASS) {
      setManageAuth(true)
      setManageError('')
    } else {
      setManageError('비밀번호가 틀렸습니다')
    }
  }

  const handleSubmit = async () => {
    if (!content.trim()) return
    const { error } = await supabase
      .from('diary')
      .insert({ content: content.trim() })
    if (!error) {
      setContent('')
      setShowForm(false)
      setAuthenticated(false)
      setPassword('')
      fetchEntries()
    }
  }

  const handleDelete = async (id) => {
    const { error } = await supabase.from('diary').delete().eq('id', id)
    if (!error) fetchEntries()
  }

  const handleSave = async (id, newContent) => {
    const { error } = await supabase.from('diary').update({ content: newContent }).eq('id', id)
    if (!error) fetchEntries()
  }

  const toggleManage = () => {
    if (manageMode) {
      setManageMode(false)
      setManageAuth(false)
      setManagePass('')
      setManageError('')
    } else {
      setManageMode(true)
    }
  }

  const displayEntries = showAll ? entries : entries.slice(0, 3)

  return (
    <section id="diary" className="py-20 px-4">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div
          ref={headerRef}
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
          className="mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-0"
        >
          <div>
            <p className="font-mono text-[#40916C] tracking-widest text-sm">GROWTH DIARY</p>
            <h2 className="text-3xl font-bold mt-2 text-white">청년장인 성장일기</h2>
          </div>
          <div className="flex gap-2">
            {entries.length > 0 && (
              <button
                onClick={toggleManage}
                className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                  manageMode
                    ? 'bg-red-900/20 text-red-400 hover:bg-red-900/30'
                    : 'bg-[#1a1a1a] text-[#888] hover:text-white'
                }`}
              >
                {manageMode ? '관리 종료' : '관리'}
              </button>
            )}
            <button
              onClick={() => {
                setShowForm(!showForm)
                if (showForm) {
                  setAuthenticated(false)
                  setPassword('')
                  setError('')
                }
              }}
              className="text-sm px-4 py-2 rounded-lg bg-[#40916C]/20 text-[#40916C] hover:bg-[#40916C]/30 transition-colors"
            >
              {showForm ? '닫기' : '글쓰기'}
            </button>
          </div>
        </div>

        {/* Manage password */}
        {manageMode && !manageAuth && (
          <div className="mb-6 bg-[#111111] rounded-xl border border-red-900/30 p-5">
            <div className="flex gap-3 items-center">
              <input
                type="password"
                value={managePass}
                onChange={(e) => setManagePass(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleManageAuth()}
                placeholder="관리 비밀번호 입력"
                className="flex-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-2.5 text-white text-sm focus:border-[#40916C] focus:outline-none"
              />
              <button
                onClick={handleManageAuth}
                className="px-5 py-2.5 bg-[#40916C] text-white text-sm rounded-lg hover:bg-[#2D6A4F] transition-colors"
              >
                확인
              </button>
              {manageError && <span className="text-red-400 text-xs">{manageError}</span>}
            </div>
          </div>
        )}

        {/* Write form */}
        {showForm && (
          <div className="mb-8 bg-[#111111] rounded-xl border border-[#1a1a1a] p-5">
            {!authenticated ? (
              <div className="flex gap-3 items-center">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                  placeholder="비밀번호 입력"
                  className="flex-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-2.5 text-white text-sm focus:border-[#40916C] focus:outline-none"
                />
                <button
                  onClick={handleAuth}
                  className="px-5 py-2.5 bg-[#40916C] text-white text-sm rounded-lg hover:bg-[#2D6A4F] transition-colors"
                >
                  확인
                </button>
                {error && <span className="text-red-400 text-xs">{error}</span>}
              </div>
            ) : (
              <div>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="오늘의 성장 일기를 적어보세요..."
                  rows={4}
                  className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white text-sm focus:border-[#40916C] focus:outline-none resize-none leading-relaxed"
                />
                <div className="flex justify-end mt-3">
                  <button
                    onClick={handleSubmit}
                    disabled={!content.trim()}
                    className="px-5 py-2 bg-[#40916C] text-white text-sm rounded-lg hover:bg-[#2D6A4F] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    작성하기
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Entries */}
        {loading ? (
          <div className="text-center py-16 text-[#555]">
            <p className="text-sm">불러오는 중...</p>
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-16 text-[#555]">
            <p className="text-lg">아직 작성된 일기가 없습니다</p>
            <p className="text-sm mt-1">첫 번째 성장 일기를 남겨보세요!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {displayEntries.map((entry) => (
              <DiaryEntry
                key={entry.id}
                entry={entry}
                manageMode={manageMode && manageAuth}
                onDelete={handleDelete}
                onSave={handleSave}
              />
            ))}

            {entries.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="w-full py-3 text-sm text-[#40916C] hover:text-white transition-colors"
              >
                {showAll ? '접기' : `더보기 (${entries.length - 3}개 더)`}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
