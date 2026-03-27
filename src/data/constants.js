export const NAV_ITEMS = [
  { id: 'strengths', label: '강점' },
  { id: 'diary', label: '일기' },
  { id: 'journey', label: '여정' },
  { id: 'career', label: '경력' },
  { id: 'collabs', label: '콜라보' },
  { id: 'metrics', label: '성과' },
  { id: 'revenue', label: '펜션' },
  { id: 'automation', label: '자동화' },
  { id: 'lectures', label: '교육' },
  { id: 'techstack', label: '기술' },
]

export const HERO_STATS = [
  { value: '10년', label: '창업' },
  { value: '1,000+', label: '제작' },
  { value: '350+', label: '펜션 예약 팀' },
  { value: '2억+', label: '연평균 매출' },
  { value: '84명', label: 'AI 에이전트' },
]

export const GALLERY_IMAGES = [
  { src: '/images/sol-workshop-review.jpg', caption: '공방에서 도면 검토 중' },
  { src: '/images/sol-sand-closeup.jpg', caption: '샌딩 작업 — 세밀한 후처리' },
  { src: '/images/sol-wood-assembly.jpg', caption: '목재 조립 작업' },
  { src: '/images/sol-laser-work.jpg', caption: '레이저 커터 가동' },
  { src: '/images/sol-laser-setup.jpg', caption: '레이저 커팅 세팅' },
]

export const JOURNEY_DATA = [
  { year: '2016.07.25', title: '스토리팜 창업', desc: '13평 작은 공간에서 3D프린팅 공방으로 시작' },
  { year: '2017', title: 'B2B 시제품 제작', desc: '라돈, 동서컨트롤 등 수주' },
  { year: '2018', title: '메이커 교육 시작', desc: '기전대·완주문화재단' },
  { year: '2019', title: '펜션+골프용품', desc: '달팽이아지트+지보드' },
  { year: '2020', title: 'CNC 공장 전환', desc: '120평 제조 공장 구축' },
  { year: '2021', title: '콜라보 폭발', desc: '아디다스&스토리팜 · 콘크리트스튜디오&스토리팜 · 리슬&스토리팜 · 더보이즈 뮤비 소품 제작' },
  { year: '2022', title: '브랜드 기획', desc: 'sneff 캠핑 13종' },
  { year: '2025', title: '펜션 운영 5년차', desc: '매년 20%+ 성장 · 26년 연매출 1억 초과 예정' },
  { year: '2026', title: 'AI 자동화 시스템', desc: '40건+ 개발 · AI 에이전트 84명 구축 · AI 스터디 모임 예정' },
]

export const METRICS_DATA = [
  { value: '4억+', label: '골프용품 1년 매출', color: '#40916C' },
  { value: '1,746%', label: '한꼬 와디즈', color: '#C4960C' },
  { value: '692만', label: '더보이즈 뮤비', color: '#4A7ACD' },
  { value: '1억+', label: '2026 펜션(예정)', color: '#2D6A4F' },
  { value: '1,000+', label: '누적 제작', color: '#8B6914' },
  { value: '350+', label: '누적 예약 팀', color: '#FF5A5F' },
  { value: '2억+', label: '공방 연평균 매출', color: '#E07A5F' },
]

export const REVENUE_DATA = [
  { year: '2021', amount: 12, growth: null },
  { year: '2022', amount: 37, growth: '+213%' },
  { year: '2023', amount: 48, growth: '+29%' },
  { year: '2024', amount: 57, growth: '+17%' },
  { year: '2025', amount: 82, growth: '+45%' },
  { year: '2026', amount: 100, growth: '+20%' },
]

export const PENSION_STATS = [
  { value: '304건', label: '누적예약' },
  { value: '6,600+', label: '방문객' },
  { value: '28%', label: '재방문' },
  { value: '23명', label: '평균인원' },
  { value: '60:40', label: '직접:에어비앤비' },
]

export const AGENT_TEAMS = [
  {
    name: 'A팀: 달팽이아지트 펜션',
    count: 19,
    color: '#1B4332',
    agents: ['리서치PM', '시장리서처', '가망고객헌터', '견적산출봇', '수익분석가', '운영PM', '예약관리', '고객안내', '후기관리', '상품PM', '패키지기획', '시즌기획', '체험설계', '콘텐츠PM', '사진작가', '카피라이터', '마케팅PM', '블로거', '광고운영'],
  },
  {
    name: 'B팀: 스토리팜 CNC 공방',
    count: 21,
    color: '#2D6A4F',
    agents: ['리서치PM', '트렌드분석', '경쟁자분석', '기술리서처', '수요분석', '제조PM', '주문관리', '견적산출', '품질관리', '재고관리', '배송관리', '상품PM', '디자이너', '파일러', '신제품기획', '교육PM', '수강생관리', '강사님', '영업PM', '협업이', 'B2B영업'],
  },
  {
    name: 'C팀: 마케팅·자동화',
    count: 16,
    color: '#40916C',
    agents: ['인스타', '유튜버', '카카오', '네이버', '광고주', '뉴스레터', '분석가', '제휴왕', '자동화', '보고왕', 'SNS매니저', '리타게팅', 'CRM봇', '이벤트기획', '리뷰수집', '데이터봇'],
  },
  {
    name: 'D팀: 웹개발 에이전시',
    count: 15,
    color: '#52B788',
    agents: ['기획자', 'UI디자이너', '프론트', '백엔드', '풀스택', 'SEO봇', 'QA테스터', '견적왕', '영업이', 'PM', 'DB설계', '보안리뷰', '기술문서', '리서치PM', '경쟁분석'],
  },
  {
    name: 'E팀: 사업기획',
    count: 10,
    color: '#74C69D',
    agents: ['기획PM', '시장리서처', '전략가', '재무분석', '마케팅전략', '문서편집', '발표자료', '지원사업', '트렌드봇', '벤치마킹'],
  },
  {
    name: 'F팀: 사업계획 에이전시',
    count: 10,
    color: '#95D5B2',
    agents: ['디렉터', '시장분석', 'BM설계', '재무설계', '마케팅기획', '전략컨설턴트', '에디터', 'IR전문가', '피칭코치', 'QA리뷰'],
  },
]

export const AUTOMATION_STATS = [
  { value: '97%', label: '응답단축' },
  { value: '80%', label: '자동처리' },
  { value: '70%', label: '콘텐츠절감' },
  { value: '60%', label: '운영절감' },
]

export const LECTURES_DATA = [
  { place: '제주더큰내일센터', title: '디지털 마케팅 특강', date: '2021.12' },
  { place: '광주청년창업사관학교', title: '작은 브랜드의 마케팅', date: '2021.05' },
  { place: '와디즈', title: '크라우드 펀딩 마케팅', date: '2021.02' },
  { place: '대구 KRIFI', title: '크라우드펀딩 이해하기', date: '2020.11' },
  { place: '전주대학교', title: '미래인문학부 자문위원', date: '2019~20' },
]

export const TECH_STACK = [
  { icon: '🏭', name: '제조 장비', items: ['CNC 라우터 3대', '레이저 커터 4대', '3D프린터 40대'] },
  { icon: '🖥️', name: '프론트엔드', items: ['React+Vite', 'Tailwind CSS', 'Vercel'] },
  { icon: '⚙️', name: '백엔드', items: ['Supabase', 'PostgreSQL+RLS', 'REST API'] },
  { icon: '🔄', name: '자동화', items: ['n8n', 'Solapi SMS/LMS', 'KakaoTalk API'] },
  { icon: '🤖', name: 'AI/LLM', items: ['Claude API', 'Claude Projects', '멀티에이전트 84명'] },
  { icon: '📊', name: '데이터', items: ['Google Sheets', 'Supabase DB', '304건 분석'] },
]

export const EXTERNAL_LINKS = [
  { icon: '🏠', label: '펜션', url: 'https://dalpaengi-five.vercel.app' },
  { icon: '🧩', label: '조립공간', url: 'https://jolib-booking.vercel.app' },
  { icon: '📝', label: '블로그', url: 'https://blog.naver.com/sool9241' },
  { icon: '🏕️', label: 'sneff', url: 'https://sneff.co.kr/product/list.html?cate_no=61' },
]

export const FILTER_TAGS = ['핵심', '전체', '콜라보', '브랜드', '제조', '숙박', 'AI', '웹', '체험', '교육', 'B2B', 'F&B', '데이터', '자동화', '전시']
