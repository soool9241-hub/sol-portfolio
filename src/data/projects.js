export const PROJECTS = [
  {
    year: '2026',
    items: [
      { title: 'AI 에이전트 40명 설계', highlight: true, desc: '펜션·경쟁정보·CNC 3개 팀 멀티에이전트 시스템 설계', scope: '기획 · 설계', tag: 'AI', steps: { plan: true, dev: true, publish: false } },
      { title: 'n8n+Solapi 마케팅 자동화', desc: '예약 확인·리뷰 요청·프로모션 SMS/LMS 자동 발송', scope: '기획 · 개발', tag: '자동화', steps: { plan: true, dev: true, publish: true } },
      { title: '임솔 포트폴리오 사이트', desc: '청년장인 이력·경력·성과를 담은 원페이지 포트폴리오', scope: '기획 · 개발', tag: '웹', url: 'https://sol-portfolio-neon.vercel.app', steps: { plan: true, dev: true, publish: true } },
      { title: '달팽이 멤버십 앱', desc: '펜션 재방문 고객 전용 멤버십·포인트·쿠폰 시스템', scope: '기획 · 개발', tag: '웹', url: 'https://web-snail1.vercel.app', steps: { plan: true, dev: true, publish: true } },
      { title: '당뇨관리앱 (당비서)', desc: '혈당 기록·식단 추천·복약 알림 헬스케어 앱', scope: '기획 · 개발', tag: '웹', url: 'https://dangbiseo.vercel.app', steps: { plan: true, dev: true, publish: true } },
      { title: '달팽이아지트 펜션 사이트 개발', desc: '독채 펜션 실시간 예약·결제·관리 통합 시스템', scope: '기획 · 개발 · 배포 · 고도화', tag: '웹', url: 'https://dalpaengi-five.vercel.app', highlight: true, steps: { plan: true, dev: true, deploy: true, upgrade: true, publish: true } },
      { title: '펜션 예약 사이트 (개발 80%)', desc: '펜션 랜딩페이지 + 예약 흐름 UI/UX 설계', scope: '기획 · 개발', tag: '웹', url: 'https://my-landingpage-at5k.vercel.app', steps: { plan: true, dev: true, publish: false } },
      { title: '펜션 예약 판매 상세페이지', desc: '객실별 상세 정보·갤러리·후기 기반 판매 페이지', scope: '기획 · 개발', tag: '웹', url: 'https://v0-landing-page-development-xi.vercel.app', steps: { plan: true, dev: true, publish: true } },
      { title: '펜션 예약 플랫폼 (에어비앤비)', desc: '에어비앤비 스타일 프리미엄 펜션 예약 플랫폼', scope: '기획 · 개발', tag: '웹', url: 'https://v0-premium-pension-platform-alpha.vercel.app', steps: { plan: true, dev: true, publish: true } },
      { title: '뛰뛰빵빵 버스콜 — 메인(견적요청)', desc: '버스 견적 요청·예약 플랫폼 메인 서비스', scope: '기획 · 개발', tag: '웹', url: 'https://bus-platform-green.vercel.app', group: '버스콜', steps: { plan: true, dev: true, publish: true } },
      { title: '뛰뛰빵빵 버스콜 — 관리자', desc: '버스 예약·배차·정산 관리자 대시보드', scope: '기획 · 개발', tag: '웹', url: 'https://bus-platform-green.vercel.app/admin.html', group: '버스콜', steps: { plan: true, dev: true, publish: true } },
      { title: '뛰뛰빵빵 버스콜 — 기사 전용앱', desc: '버스 기사 배차 확인·운행 관리 전용 앱', scope: '기획 · 개발', tag: '웹', url: 'https://bus-platform-green.vercel.app/driver.html', group: '버스콜', steps: { plan: true, dev: true, publish: true } },
      { title: '1초 픽업 딜리버리 — 할리스 정안휴게소', desc: '카페 사전주문·픽업 딜리버리 모바일 서비스', scope: '기획 · 개발', tag: '웹', url: 'https://v0-user-journey-mapping-umber.vercel.app', steps: { plan: true, dev: true, publish: true } },
      { title: '스시바 집기 도매 사이트', desc: '스시·초밥 전문 집기류 B2B 도매 이커머스', scope: '기획 · 개발', tag: '웹', url: 'https://muji-soul-palette.lovable.app', steps: { plan: true, dev: true, publish: true } },
      { title: '멤버십 구축 SaaS 서비스', desc: '소상공인 전용 멤버십·포인트·혜택 관리 플랫폼', scope: '기획 · 개발', tag: '웹', url: 'https://benefit-hub-plus.lovable.app', steps: { plan: true, dev: true, publish: true } },
      { title: '상패 주문 서비스 ①', desc: 'CNC 가공 맞춤 상패·트로피 온라인 주문 시스템', scope: '기획 · 개발', tag: '웹', url: 'https://flo.host/v4uOyRC/#order', steps: { plan: true, dev: true, publish: true } },
      { title: '상패 주문 서비스 ②', desc: '프리미엄 상패·감사패 커스텀 제작 주문 페이지', scope: '기획 · 개발', tag: '웹', url: 'https://flo.host/N483MwG/', steps: { plan: true, dev: true, publish: true } },
      { title: '완주 정월대보름 축제 예약 시스템', desc: '조립공간 완주 정월대보름 축제 예약 관리 시스템', scope: '기획 · 개발', tag: '웹', steps: { plan: true, dev: true, publish: false } },
      { title: '스시 오마카세 인테리어', highlight: true, desc: '스시 오마카세 매장 CNC 맞춤 인테리어 기획부터 설치까지', scope: '기획 · 개발 · 생산 · 설치', tag: '제조', url: 'https://blog.naver.com/sool9241/224170422293', steps: { plan: true, dev: true, produce: true, install: true, publish: true } },
    ],
  },
  {
    year: '2025',
    items: [
      { title: '달팽이아지트 펜션', desc: '60평 독채 펜션 7년 운영, 에어비앤비 5.0', scope: '대표(전체)', tag: '숙박' },
      { title: '고객 DB 구축', desc: '304건 예약 데이터 기반 고객 분석 시스템', scope: '기획 · 구축', tag: '데이터' },
      { title: '달팽이아지트 홈페이지', desc: '펜션 소개·예약·후기 웹사이트', scope: '기획 · 개발', tag: '웹' },
    ],
  },
  {
    year: '2023',
    items: [
      { title: '더잠 브랜드 100평 팝업 인테리어', highlight: true, desc: '더잠 브랜드 100평 팝업스토어 인테리어 공사 전체 시공', scope: '개발 · 생산 · 설치', tag: '제조', url: 'https://cafe.naver.com/storyfarmspace/101', steps: { plan: false, dev: true, produce: true, install: true, publish: true } },
    ],
  },
  {
    year: '2022',
    items: [
      { title: '캠핑 sneff 13종', highlight: true, desc: '우드 캠핑 용품 브랜드 13종 기획·생산', scope: '기획 · 개발 · 생산', tag: '브랜드', url: 'https://sneff.co.kr/product/list.html?cate_no=61' },
      { title: '프리미엄 BBQ', desc: '펜션 부대 서비스 프리미엄 BBQ 패키지', scope: '기획 · 운영', tag: 'F&B' },
    ],
  },
  {
    year: '2021',
    items: [
      { title: '아디다스&스토리팜 — 손흥민 뱃지 제작', highlight: true, desc: '손흥민 뱃지 제작 프로젝트', scope: '기획 · 개발 · 생산', tag: '콜라보' },
      { title: '콘크리트 스튜디오&스토리팜 — 유아인 굿즈', highlight: true, desc: '유아인 안마기 굿즈 제작', scope: '기획 · 개발 · 생산', tag: '콜라보', url: 'https://blog.naver.com/sool9241/222298755001' },
      { title: '리슬&스토리팜 — 이날치 귀고리 제작', highlight: true, desc: '범 내려온다 색동 저고리 귀고리 CNC 가공 제작', scope: '가공', tag: '콜라보', url: 'https://blog.naver.com/sool9241/222302616271' },
      { title: '더보이즈 뮤직비디오 촬영 소품 제작', highlight: true, desc: '촬영 소품 제작 — 692만뷰', scope: '기획 · 개발 · 생산', tag: '콜라보' },
      { title: '한꼬 숨숨집 와디즈', highlight: true, desc: '고양이 용품 브랜드 한꼬&스토리팜 콜라보 — 1,700만원 펀딩 달성 (1,746%)', scope: '개발 · 생산', tag: '브랜드', url: 'https://www.wadiz.kr/web/campaign/detail/41761' },
    ],
  },
  {
    year: '2020',
    items: [
      { title: 'CNC 공장 120평', highlight: true, desc: '3D프린팅 공방에서 120평 CNC 제조 공장 전환', scope: '대표(전체)', tag: '제조' },
    ],
  },
  {
    year: '2019',
    items: [
      { title: '골프용품 지보드 시리즈', desc: '단일 브랜드 단일 제품 1년간 4억+ 매출 돌파', scope: '기획 · 개발 · 생산', tag: '브랜드', highlight: true },
      { title: '김덕규 타이밍 (타격용) 제작', desc: '야구 타격 훈련용 타이밍 장비 시제품 개발·생산', scope: '개발 · 생산 · 시제품제작', tag: 'B2B', steps: { plan: false, dev: true, produce: true, prototype: true, publish: false } },
    ],
  },
  {
    year: '2018',
    items: [
      { title: '전주대 메이커 30h', desc: '전주대학교 메이커 실습 교육 30시간', scope: '기획 · 교육', tag: '교육' },
      { title: '기전대 메이커 30h', desc: '기전대학교 메이커 실습 교육 30시간', scope: '기획 · 교육', tag: '교육' },
      { title: '누에살롱 팝업 공간 운영', desc: '메이커 작품 전시 팝업 스토어 기획·운영', scope: '기획 · 운영', tag: '전시', url: 'https://www.jjan.kr/article/20180627643404' },
    ],
  },
  {
    year: '2017',
    items: [
      { title: '멀티슬로프', highlight: true, desc: '멀티슬로프 제품 개발 및 생산', scope: '개발 · 생산', tag: '브랜드', url: 'https://smartstore.naver.com/multislope', steps: { plan: false, dev: true, produce: true, publish: true } },
      { title: 'B2B 부품 다수', desc: '라돈·동서컨트롤 등 B2B 시제품·부품 생산', scope: '개발 · 생산', tag: 'B2B' },
    ],
  },
]
