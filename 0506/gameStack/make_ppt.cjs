const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "GameStack";

// ── 컬러 팔레트 ──────────────────────────────────────────
const C = {
  bg:       "06070D",   // 슬라이드 배경 (거의 검정)
  card:     "12142A",   // 카드 배경
  card2:    "1A1C38",   // 카드 배경 밝은 버전
  purple:   "7C3AED",   // 메인 퍼플
  purple2:  "A855F7",   // 연한 퍼플
  purple3:  "C084FC",   // 더 연한 퍼플
  white:    "F0F0FF",   // 본문 텍스트
  gray:     "9899B8",   // 보조 텍스트
  muted:    "5F607A",   // 흐린 텍스트
  divider:  "1E2040",   // 구분선
};

// ── 공통 헬퍼 ────────────────────────────────────────────
function addBg(slide) {
  slide.background = { color: C.bg };
}

// 카드 박스
function addCard(slide, x, y, w, h, color) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: color || C.card },
    line: { color: C.purple, width: 0.5 },
  });
}

// 퍼플 사각형 강조 바
function addAccentBar(slide, x, y, h) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 0.07, h,
    fill: { color: C.purple },
    line: { color: C.purple, width: 0 },
  });
}

// 슬라이드 번호 (우하단)
function addSlideNum(slide, num, total) {
  slide.addText(`${num} / ${total}`, {
    x: 8.8, y: 5.2, w: 1.0, h: 0.3,
    fontSize: 9, color: C.muted, align: "right",
  });
}

// 상단 섹션 라벨 (작은 캡션)
function addLabel(slide, text, x, y) {
  slide.addText(text, {
    x, y, w: 8, h: 0.25,
    fontSize: 9, color: C.purple2, bold: true,
    charSpacing: 3,
  });
}

const TOTAL = 16;

// ═══════════════════════════════════════════════════════
// SLIDE 1 — 타이틀
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  // 배경 글로우 효과 (큰 반투명 사각형)
  s.addShape(pres.shapes.OVAL, {
    x: -1, y: -1, w: 7, h: 5,
    fill: { color: "3B0D8A", transparency: 85 },
    line: { color: "3B0D8A", width: 0 },
  });

  // 상단 태그
  s.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 1.0, w: 3.0, h: 0.32,
    fill: { color: C.card },
    line: { color: C.purple, width: 0.8 },
  });
  s.addText("웹프로그래밍 응용  |  팀 프로젝트  |  2026", {
    x: 3.5, y: 1.0, w: 3.0, h: 0.32,
    fontSize: 9, color: C.purple3, align: "center", valign: "middle",
    charSpacing: 1,
  });

  // 메인 타이틀
  s.addText("GameStack", {
    x: 1.0, y: 1.55, w: 8.0, h: 1.4,
    fontSize: 72, bold: true, color: C.white,
    align: "center", valign: "middle",
    charSpacing: -1,
    fontFace: "Arial",
  });

  // 서브타이틀
  s.addText("게이머를 위한 통합 포트폴리오 플랫폼", {
    x: 1.0, y: 3.0, w: 8.0, h: 0.5,
    fontSize: 18, color: C.gray, align: "center",
    fontFace: "Arial",
  });

  // 하단 구분선
  s.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 3.7, w: 3.0, h: 0.03,
    fill: { color: C.purple },
    line: { color: C.purple, width: 0 },
  });

  // 기술 스택 태그들
  const tags = ["React + Vite", "Supabase", "RAWG API", "Vercel"];
  tags.forEach((tag, i) => {
    const x = 1.8 + i * 1.7;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 3.95, w: 1.45, h: 0.32,
      fill: { color: "1E103A" },
      line: { color: C.purple, width: 0.6 },
    });
    s.addText(tag, {
      x, y: 3.95, w: 1.45, h: 0.32,
      fontSize: 10, color: C.purple3, align: "center", valign: "middle",
    });
  });

  addSlideNum(s, 1, TOTAL);
}

// ═══════════════════════════════════════════════════════
// SLIDE 2 — 목차
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  addLabel(s, "TABLE OF CONTENTS", 0.5, 0.2);
  addAccentBar(s, 0.5, 0.5, 0.65);
  s.addText("목차", {
    x: 0.7, y: 0.45, w: 8, h: 0.7,
    fontSize: 36, bold: true, color: C.white, fontFace: "Arial",
  });

  const items = [
    "사이트 소개",
    "역할 분담 & 협업 방식",
    "API 소개 & 파싱",
    "사용자 이벤트 처리",
    "DB 구성 & Supabase 구현",
    "Vercel 배포",
    "시연 (Live Demo)",
  ];

  // 2열 그리드
  items.forEach((item, i) => {
    const col = i < 4 ? 0 : 1;
    const row = i < 4 ? i : i - 4;
    const x = col === 0 ? 0.5 : 5.3;
    const y = 1.4 + row * 0.85;
    const w = 4.5;

    addCard(s, x, y, w, 0.7, C.card);

    // 번호 원
    s.addShape(pres.shapes.OVAL, {
      x: x + 0.12, y: y + 0.13, w: 0.44, h: 0.44,
      fill: { color: C.purple },
      line: { color: C.purple, width: 0 },
    });
    s.addText(String(i + 1), {
      x: x + 0.12, y: y + 0.13, w: 0.44, h: 0.44,
      fontSize: 12, bold: true, color: C.white,
      align: "center", valign: "middle",
    });

    s.addText(item, {
      x: x + 0.68, y: y, w: w - 0.8, h: 0.7,
      fontSize: 14, color: C.white, valign: "middle",
      fontFace: "Arial",
    });
  });

  addSlideNum(s, 2, TOTAL);
}

// ═══════════════════════════════════════════════════════
// SLIDE 3 — 사이트 소개
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  addLabel(s, "PROJECT OVERVIEW", 0.5, 0.2);
  addAccentBar(s, 0.5, 0.5, 0.65);
  s.addText("사이트 소개", {
    x: 0.7, y: 0.45, w: 8, h: 0.7,
    fontSize: 36, bold: true, color: C.white, fontFace: "Arial",
  });

  // 메인 설명
  s.addText("Steam · PlayStation · Xbox — 흩어진 플랫폼의 게임 이력을 통합 관리하고\n나만의 게이머 포트폴리오를 만들어 공유하는 서비스", {
    x: 0.5, y: 1.25, w: 9.0, h: 0.85,
    fontSize: 14, color: C.gray, lineSpacingMultiple: 1.4,
    fontFace: "Arial",
  });

  // 지난 학기 연장선 박스
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 9.0, h: 0.48,
    fill: { color: "1A0D3A" },
    line: { color: C.purple, width: 0.8 },
  });
  s.addText("💡  지난 학기 정적 HTML/CSS 게임 페이지 → 실제 DB + 외부 API가 연결된 풀스택 서비스로 발전", {
    x: 0.5, y: 2.15, w: 9.0, h: 0.48,
    fontSize: 12, color: C.purple3, align: "center", valign: "middle",
  });

  // 3개 기능 카드
  const features = [
    { icon: "📚", title: "게임 라이브러리", desc: "Backlog · Playing\nCompleted · Dropped\n상태별 체계적 관리" },
    { icon: "📊", title: "플레이 통계", desc: "장르 분포, 월별 추가 수\n상태별 비율\n실시간 시각화" },
    { icon: "🔍", title: "유저 검색", desc: "닉네임으로 검색\n공개 프로필 공유\n게이머 커뮤니티" },
  ];

  features.forEach((f, i) => {
    const x = 0.5 + i * 3.1;
    addCard(s, x, 2.82, 2.85, 2.5, C.card);

    // 상단 퍼플 바
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 2.82, w: 2.85, h: 0.07,
      fill: { color: C.purple },
      line: { color: C.purple, width: 0 },
    });

    s.addText(f.icon, {
      x, y: 3.0, w: 2.85, h: 0.55,
      fontSize: 26, align: "center",
    });
    s.addText(f.title, {
      x, y: 3.6, w: 2.85, h: 0.38,
      fontSize: 13, bold: true, color: C.white, align: "center",
      fontFace: "Arial",
    });
    s.addText(f.desc, {
      x, y: 4.02, w: 2.85, h: 1.15,
      fontSize: 11, color: C.gray, align: "center", lineSpacingMultiple: 1.4,
      fontFace: "Arial",
    });
  });

  addSlideNum(s, 3, TOTAL);
}

// ═══════════════════════════════════════════════════════
// SLIDE 4 — 역할 분담
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  addLabel(s, "TEAM ROLES", 0.5, 0.2);
  addAccentBar(s, 0.5, 0.5, 0.65);
  s.addText("역할 분담", {
    x: 0.7, y: 0.45, w: 8, h: 0.7,
    fontSize: 36, bold: true, color: C.white, fontFace: "Arial",
  });

  const roles = [
    {
      label: "팀원 A",
      role: "DB · 인증",
      color: "7C3AED",
      emoji: "🛡️",
      items: ["supabase.js", "AuthContext.jsx", "useLibrary.js", "Google OAuth"],
    },
    {
      label: "팀원 B",
      role: "API · 페이지",
      color: "A855F7",
      emoji: "⚡",
      items: ["rawg.js", "useSearch.js", "LibraryPage.jsx", "GameDetailPage.jsx"],
    },
    {
      label: "팀원 C",
      role: "UI · 컴포넌트",
      color: "C084FC",
      emoji: "🎨",
      items: ["components/ 전체", "ProfilePage.jsx", "StatsPage.jsx", "LFGPage.jsx"],
    },
  ];

  roles.forEach((r, i) => {
    const x = 0.45 + i * 3.1;
    addCard(s, x, 1.35, 2.9, 3.9, C.card);

    // 상단 컬러 바
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.35, w: 2.9, h: 0.08,
      fill: { color: r.color },
      line: { color: r.color, width: 0 },
    });

    // 이모지 원
    s.addShape(pres.shapes.OVAL, {
      x: x + 1.1, y: 1.55, w: 0.7, h: 0.7,
      fill: { color: "1E103A" },
      line: { color: r.color, width: 1 },
    });
    s.addText(r.emoji, {
      x: x + 1.1, y: 1.55, w: 0.7, h: 0.7,
      fontSize: 18, align: "center", valign: "middle",
    });

    s.addText(r.label, {
      x, y: 2.35, w: 2.9, h: 0.38,
      fontSize: 16, bold: true, color: C.white, align: "center",
      fontFace: "Arial",
    });
    s.addText(r.role, {
      x, y: 2.72, w: 2.9, h: 0.32,
      fontSize: 12, color: r.color, align: "center", bold: true,
      charSpacing: 1,
    });

    // 구분선
    s.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.3, y: 3.1, w: 2.3, h: 0.02,
      fill: { color: C.divider },
      line: { color: C.divider, width: 0 },
    });

    // 파일 목록
    r.items.forEach((item, j) => {
      s.addShape(pres.shapes.RECTANGLE, {
        x: x + 0.2, y: 3.2 + j * 0.48, w: 2.5, h: 0.35,
        fill: { color: "0D0F20" },
        line: { color: C.divider, width: 0.5 },
      });
      s.addText(item, {
        x: x + 0.2, y: 3.2 + j * 0.48, w: 2.5, h: 0.35,
        fontSize: 10, color: C.gray, align: "center", valign: "middle",
        fontFace: "Courier New",
      });
    });
  });

  addSlideNum(s, 4, TOTAL);
}

// ═══════════════════════════════════════════════════════
// SLIDE 5 — 협업 방식
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  addLabel(s, "COLLABORATION", 0.5, 0.2);
  addAccentBar(s, 0.5, 0.5, 0.65);
  s.addText("협업 방식", {
    x: 0.7, y: 0.45, w: 8, h: 0.7,
    fontSize: 36, bold: true, color: C.white, fontFace: "Arial",
  });

  // 플로우 단계
  const steps = [
    { icon: "💬", label: "카카오톡\n회의" },
    { icon: "📝", label: "노션 & MD\n내용 정리" },
    { icon: "📋", label: "PRD\n제작" },
    { icon: "✅", label: "Todo List\n작성" },
    { icon: "🌿", label: "GitHub\n브랜치 작업" },
  ];

  steps.forEach((step, i) => {
    const x = 0.5 + i * 1.85;

    // 원형 아이콘 박스
    s.addShape(pres.shapes.OVAL, {
      x, y: 1.4, w: 1.2, h: 1.2,
      fill: { color: "1E103A" },
      line: { color: C.purple, width: 1 },
    });
    s.addText(step.icon, {
      x, y: 1.4, w: 1.2, h: 1.2,
      fontSize: 26, align: "center", valign: "middle",
    });

    // 라벨
    s.addText(step.label, {
      x: x - 0.1, y: 2.68, w: 1.4, h: 0.65,
      fontSize: 11, color: C.gray, align: "center", lineSpacingMultiple: 1.3,
      fontFace: "Arial",
    });

    // 화살표 (마지막 제외)
    if (i < steps.length - 1) {
      s.addShape(pres.shapes.RECTANGLE, {
        x: x + 1.25, y: 1.92, w: 0.55, h: 0.03,
        fill: { color: C.muted },
        line: { color: C.muted, width: 0 },
      });
      s.addText("▶", {
        x: x + 1.68, y: 1.82, w: 0.2, h: 0.22,
        fontSize: 9, color: C.muted, align: "center",
      });
    }
  });

  // 브랜치 전략 섹션
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.55, w: 9.0, h: 1.75,
    fill: { color: C.card },
    line: { color: C.purple, width: 0.5 },
  });

  s.addText("GitHub 브랜치 전략", {
    x: 0.75, y: 3.65, w: 3, h: 0.35,
    fontSize: 12, bold: true, color: C.purple2,
    fontFace: "Arial",
  });

  const branches = [
    { text: "main", x: 0.75, y: 4.05, color: C.purple },
    { text: "└── dev  (통합 브랜치)", x: 1.0, y: 4.38, color: C.gray },
    { text: "feat/auth  ·  feat/library  ·  feat/search  ·  feat/game-detail  ·  feat/user-search", x: 1.6, y: 4.72, color: C.muted },
  ];

  branches.forEach(b => {
    s.addText(b.text, {
      x: b.x, y: b.y, w: 8, h: 0.3,
      fontSize: 11, color: b.color, fontFace: "Courier New",
    });
  });

  addSlideNum(s, 5, TOTAL);
}

// ═══════════════════════════════════════════════════════
// SLIDE 6 — API 소개
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  addLabel(s, "EXTERNAL API", 0.5, 0.2);
  addAccentBar(s, 0.5, 0.5, 0.65);
  s.addText("API 소개 & 파싱", {
    x: 0.7, y: 0.45, w: 8, h: 0.7,
    fontSize: 36, bold: true, color: C.white, fontFace: "Arial",
  });

  // 왼쪽: API 정보
  addCard(s, 0.4, 1.35, 4.3, 3.95, C.card);

  s.addText("RAWG API", {
    x: 0.6, y: 1.5, w: 3.9, h: 0.45,
    fontSize: 18, bold: true, color: C.purple2, fontFace: "Arial",
  });
  s.addText("https://api.rawg.io/api", {
    x: 0.6, y: 1.95, w: 3.9, h: 0.3,
    fontSize: 10, color: C.muted, fontFace: "Courier New",
  });

  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 2.32, w: 3.9, h: 0.02,
    fill: { color: C.divider },
    line: { color: C.divider, width: 0 },
  });

  const endpoints = [
    { method: "GET", path: "/games?search={query}", desc: "게임 검색" },
    { method: "GET", path: "/games/{id}", desc: "게임 상세 정보" },
  ];

  endpoints.forEach((ep, i) => {
    const y = 2.48 + i * 0.85;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y, w: 0.5, h: 0.28,
      fill: { color: "1A5C1A" },
      line: { color: "1A5C1A", width: 0 },
    });
    s.addText(ep.method, {
      x: 0.6, y, w: 0.5, h: 0.28,
      fontSize: 8, bold: true, color: "6EE76E",
      align: "center", valign: "middle",
    });
    s.addText(ep.path, {
      x: 1.18, y, w: 3.2, h: 0.28,
      fontSize: 10, color: C.gray, fontFace: "Courier New", valign: "middle",
    });
    s.addText(ep.desc, {
      x: 0.6, y: y + 0.32, w: 3.9, h: 0.25,
      fontSize: 11, color: C.white, fontFace: "Arial",
    });
  });

  // 디바운싱 설명
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 4.2, w: 3.9, h: 0.85,
    fill: { color: "0D0F20" },
    line: { color: C.purple, width: 0.5 },
  });
  s.addText("⏱  검색 디바운싱 — 500ms", {
    x: 0.6, y: 4.28, w: 3.9, h: 0.3,
    fontSize: 11, bold: true, color: C.purple3, align: "center",
  });
  s.addText("타이핑 중 과도한 API 호출 방지\nuseSearch.js → setTimeout 적용", {
    x: 0.6, y: 4.58, w: 3.9, h: 0.42,
    fontSize: 10, color: C.gray, align: "center", lineSpacingMultiple: 1.3,
  });

  // 오른쪽: 파싱 필드
  addCard(s, 4.9, 1.35, 4.7, 3.95, C.card);

  s.addText("파싱 필드 (JSON)", {
    x: 5.1, y: 1.5, w: 4.3, h: 0.45,
    fontSize: 14, bold: true, color: C.purple2, fontFace: "Arial",
  });

  // 코드 블록 배경
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 2.0, w: 4.4, h: 3.05,
    fill: { color: "090A18" },
    line: { color: C.divider, width: 0.5 },
  });

  const codeLines = [
    { text: "{", color: C.white },
    { text: '  id,              // RAWG 게임 ID', color: C.gray },
    { text: '  name,            // 게임 제목', color: C.gray },
    { text: '  background_image, // 커버 이미지 URL', color: C.gray },
    { text: '  genres,          // 장르 배열', color: C.gray },
    { text: '  metacritic,      // 메타스코어', color: C.gray },
    { text: '  released,        // 출시일', color: C.gray },
    { text: '  description_raw  // 게임 설명', color: C.gray },
    { text: "}", color: C.white },
  ];

  codeLines.forEach((line, i) => {
    s.addText(line.text, {
      x: 5.1, y: 2.1 + i * 0.32, w: 4.2, h: 0.3,
      fontSize: 9.5, color: line.color, fontFace: "Courier New",
      margin: 0,
    });
  });

  addSlideNum(s, 6, TOTAL);
}

// ═══════════════════════════════════════════════════════
// 이벤트 처리 공통 레이아웃 함수
// ═══════════════════════════════════════════════════════
function makeEventSlide(num, label, title, file, points, codeLines) {
  const s = pres.addSlide();
  addBg(s);

  addLabel(s, `USER EVENT  ${num}/4  —  ${label}`, 0.5, 0.2);
  addAccentBar(s, 0.5, 0.5, 0.65);
  s.addText("사용자 이벤트 처리", {
    x: 0.7, y: 0.45, w: 5.5, h: 0.7,
    fontSize: 32, bold: true, color: C.white, fontFace: "Arial",
  });

  // 파일명 칩 (우상단)
  s.addShape(pres.shapes.RECTANGLE, {
    x: 7.4, y: 0.52, w: 2.2, h: 0.35,
    fill: { color: "1A0D3A" },
    line: { color: C.purple, width: 0.6 },
  });
  s.addText(file, {
    x: 7.4, y: 0.52, w: 2.2, h: 0.35,
    fontSize: 11, color: C.purple3, fontFace: "Courier New",
    align: "center", valign: "middle",
  });

  // ── 왼쪽: 설명 패널 ──
  addCard(s, 0.35, 1.35, 4.3, 4.0, C.card);
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.35, y: 1.35, w: 4.3, h: 0.08,
    fill: { color: C.purple },
    line: { color: C.purple, width: 0 },
  });
  s.addText(title, {
    x: 0.55, y: 1.52, w: 3.9, h: 0.5,
    fontSize: 18, bold: true, color: C.white, fontFace: "Arial",
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 2.08, w: 3.9, h: 0.02,
    fill: { color: C.divider },
    line: { color: C.divider, width: 0 },
  });

  points.forEach((pt, i) => {
    s.addShape(pres.shapes.OVAL, {
      x: 0.55, y: 2.2 + i * 0.72, w: 0.28, h: 0.28,
      fill: { color: C.purple },
      line: { color: C.purple, width: 0 },
    });
    s.addText(pt, {
      x: 0.95, y: 2.15 + i * 0.72, w: 3.5, h: 0.55,
      fontSize: 12, color: C.white, lineSpacingMultiple: 1.35,
      fontFace: "Arial",
    });
  });

  // ── 오른쪽: 코드 패널 ──
  addCard(s, 4.85, 1.35, 4.8, 4.0, C.card);
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.85, y: 1.35, w: 4.8, h: 0.08,
    fill: { color: C.purple2 },
    line: { color: C.purple2, width: 0 },
  });
  s.addText("CODE", {
    x: 4.85, y: 1.43, w: 4.8, h: 0.28,
    fontSize: 9, bold: true, color: C.muted, align: "right",
    charSpacing: 3, fontFace: "Arial",
  });

  // 코드 배경
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.95, y: 1.78, w: 4.6, h: 3.42,
    fill: { color: "090A18" },
    line: { color: C.divider, width: 0.4 },
  });

  codeLines.forEach((line, i) => {
    s.addText(line.text, {
      x: 5.08, y: 1.88 + i * 0.27, w: 4.38, h: 0.27,
      fontSize: 9.5, color: line.color || C.gray,
      fontFace: "Courier New", margin: 0,
    });
  });

  addSlideNum(s, num + 6, TOTAL);
  return s;
}

// ─── SLIDE 7: 검색 디바운싱 ───
makeEventSlide(
  1, "검색 디바운싱",
  "검색 디바운싱",
  "useSearch.js",
  [
    "검색어 입력 시 즉시 API 호출하지 않고\n500ms 대기 후 호출",
    "연속 타이핑 중에는 이전 타이머를\nclearTimeout으로 취소",
    "API 과호출 방지 →\n서버 부하 감소 + UX 향상",
  ],
  [
    { text: "useEffect(() => {",                       color: C.white },
    { text: "  if (!query) {",                         color: C.gray },
    { text: "    setResults([]);",                     color: C.gray },
    { text: "    return;",                             color: C.gray },
    { text: "  }",                                    color: C.gray },
    { text: "",                                        color: C.gray },
    { text: "  // ← 500ms 대기 후 API 호출",            color: "5F6A8A" },
    { text: "  const timer = setTimeout(async () => {", color: C.white },
    { text: "    setIsLoading(true);",                 color: C.gray },
    { text: "    const data = await searchGames(query);", color: C.gray },
    { text: "    setResults(data);",                   color: C.gray },
    { text: "    setIsLoading(false);",                color: C.gray },
    { text: "  }, 500);",                             color: "A855F7" },
    { text: "",                                        color: C.gray },
    { text: "  // ← 타이핑 시 이전 타이머 취소",          color: "5F6A8A" },
    { text: "  return () => clearTimeout(timer);",     color: C.white },
    { text: "}, [query]);",                            color: C.white },
  ]
);

// ─── SLIDE 8: 게임 추가 ───
makeEventSlide(
  2, "게임 추가",
  "게임 추가",
  "useLibrary.js",
  [
    "검색 결과 클릭 시\nrawg_id 기준 중복 체크",
    "Supabase games 테이블에\nINSERT 실행",
    "DB 저장 성공 후 로컬 상태 즉시 반영\n→ 새로고침 없이 화면 업데이트",
  ],
  [
    { text: "const addGameToLibrary = async (game) => {", color: C.white },
    { text: "  // 중복 체크",                             color: "5F6A8A" },
    { text: "  if (library.some(g =>",                   color: C.gray },
    { text: "    g.rawg_id === game.rawg_id)) {",         color: C.gray },
    { text: "    alert('이미 있는 게임!');",               color: C.gray },
    { text: "    return false;",                          color: C.gray },
    { text: "  }",                                       color: C.gray },
    { text: "",                                           color: C.gray },
    { text: "  // Supabase INSERT",                       color: "5F6A8A" },
    { text: "  const { data } = await supabase",          color: C.white },
    { text: "    .from('games')",                         color: "A855F7" },
    { text: "    .insert([{ user_id, rawg_id,",           color: C.gray },
    { text: "      title, cover, genres,",                color: C.gray },
    { text: "      status: 'backlog' }])",                color: C.gray },
    { text: "    .select().single();",                    color: C.gray },
    { text: "",                                           color: C.gray },
    { text: "  // 로컬 상태 즉시 반영",                    color: "5F6A8A" },
    { text: "  setLibrary(prev => [data, ...prev]);",     color: C.white },
    { text: "};",                                         color: C.white },
  ]
);

// ─── SLIDE 9: 로그아웃 팝업 ───
makeEventSlide(
  3, "로그아웃 팝업",
  "로그아웃 팝업",
  "Sidebar.jsx",
  [
    "useState로 팝업 열림/닫힘 상태 관리",
    "유저 영역 클릭 시\nsetShowMenu 토글",
    "showMenu가 true일 때만\n팝업 컴포넌트 렌더링 (조건부 렌더링)",
  ],
  [
    { text: "const [showMenu, setShowMenu]",             color: C.white },
    { text: "  = useState(false);",                      color: C.white },
    { text: "",                                           color: C.gray },
    { text: "// 클릭 시 토글",                             color: "5F6A8A" },
    { text: "<button",                                    color: C.white },
    { text: "  onClick={() => setShowMenu(v => !v)}>",   color: "A855F7" },
    { text: "  <Avatar name={displayName} />",            color: C.gray },
    { text: "  <Icon name='chevron'",                    color: C.gray },
    { text: "    style={{ transform:",                   color: C.gray },
    { text: "      showMenu ? 'rotate(180deg)' : 'none'", color: C.gray },
    { text: "    }} />",                                  color: C.gray },
    { text: "</button>",                                  color: C.white },
    { text: "",                                           color: C.gray },
    { text: "// 조건부 렌더링",                            color: "5F6A8A" },
    { text: "{showMenu && (",                             color: C.white },
    { text: "  <div>",                                   color: C.gray },
    { text: "    <button onClick={handleSignOut}>",       color: C.gray },
    { text: "      로그아웃",                              color: C.gray },
    { text: "    </button>",                              color: C.gray },
    { text: "  </div>",                                   color: C.gray },
    { text: ")}",                                         color: C.white },
  ]
);

// ─── SLIDE 10: 별점 클릭 ───
makeEventSlide(
  4, "별점 클릭",
  "별점 클릭",
  "StarRating.jsx",
  [
    "1~5 배열을 map으로 순회하며\n별 아이콘 렌더링",
    "클릭 시 onChange(i) 콜백 실행\n→ 부모 컴포넌트의 rating 상태 업데이트",
    "readOnly prop으로\n클릭 가능/불가능 제어",
  ],
  [
    { text: "function StarRating(",                       color: C.white },
    { text: "  { value, onChange, readOnly = false }",   color: C.gray },
    { text: ") {",                                        color: C.white },
    { text: "  return (",                                 color: C.white },
    { text: "    <div>",                                  color: C.gray },
    { text: "      {[1, 2, 3, 4, 5].map((i) => (",       color: C.gray },
    { text: "        <span",                              color: C.white },
    { text: "          key={i}",                          color: C.gray },
    { text: "          // 클릭 이벤트",                    color: "5F6A8A" },
    { text: "          onClick={() =>",                   color: "A855F7" },
    { text: "            !readOnly && onChange(i)}",      color: "A855F7" },
    { text: "          style={{",                         color: C.gray },
    { text: "            cursor: readOnly",               color: C.gray },
    { text: "              ? 'default' : 'pointer',",     color: C.gray },
    { text: "            // 클릭한 별까지 색상 적용",        color: "5F6A8A" },
    { text: "            color: i <= value",              color: C.white },
    { text: "              ? '#f59e0b'",                  color: "F59E0B" },
    { text: "              : 'rgba(255,255,255,0.15)',",  color: C.gray },
    { text: "          }}>★</span>",                     color: C.gray },
    { text: "      ))}",                                  color: C.gray },
    { text: "    </div>",                                 color: C.gray },
    { text: "  );",                                       color: C.white },
    { text: "}",                                          color: C.white },
  ]
);

// ═══════════════════════════════════════════════════════
// SLIDE 8 — Supabase 소개 (개념)
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  addLabel(s, "BACKEND AS A SERVICE", 0.5, 0.2);
  addAccentBar(s, 0.5, 0.5, 0.65);
  s.addText("Supabase란?", {
    x: 0.7, y: 0.45, w: 8, h: 0.7,
    fontSize: 36, bold: true, color: C.white, fontFace: "Arial",
  });

  // 한 줄 정의 박스
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.32, w: 9.2, h: 0.55,
    fill: { color: "1A0D3A" },
    line: { color: C.purple, width: 0.8 },
  });
  s.addText("서버 없이 DB · 인증 · 권한 관리를 바로 쓸 수 있는 오픈소스 백엔드 플랫폼 (PostgreSQL 기반)", {
    x: 0.4, y: 1.32, w: 9.2, h: 0.55,
    fontSize: 13, color: C.purple3, align: "center", valign: "middle",
    fontFace: "Arial",
  });

  // 핵심 기능 4개 카드 (더 크게)
  const features = [
    { icon: "🗄️", title: "Database",      desc: "PostgreSQL 기반\nSQL 그대로 사용 가능\n테이블 생성 시\n자동 REST API 생성", color: "7C3AED" },
    { icon: "🔐", title: "Auth",           desc: "Google · GitHub 등\n소셜 로그인 즉시 지원\nJWT 토큰 · 세션\n자동 관리",         color: "A855F7" },
    { icon: "🛡️", title: "RLS",            desc: "Row Level Security\n유저별 데이터\n접근 권한 제어\n정책 기반 보안",            color: "C084FC" },
    { icon: "⚡", title: "클라이언트 SDK", desc: "supabase-js 하나로\n프론트에서 직접 DB 접근\n별도 서버 코드\n전혀 불필요",     color: "7C3AED" },
  ];

  features.forEach((f, i) => {
    const x = 0.4 + i * 2.32;
    addCard(s, x, 2.05, 2.15, 3.1, C.card);

    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 2.05, w: 2.15, h: 0.08,
      fill: { color: f.color },
      line: { color: f.color, width: 0 },
    });

    s.addText(f.icon, {
      x, y: 2.18, w: 2.15, h: 0.58,
      fontSize: 26, align: "center",
    });
    s.addText(f.title, {
      x, y: 2.78, w: 2.15, h: 0.4,
      fontSize: 13, bold: true, color: C.white, align: "center",
      fontFace: "Arial",
    });
    s.addText(f.desc, {
      x, y: 3.22, w: 2.15, h: 1.75,
      fontSize: 11, color: C.gray, align: "center", lineSpacingMultiple: 1.45,
      fontFace: "Arial",
    });
  });

  addSlideNum(s, 11, TOTAL);
}

// ═══════════════════════════════════════════════════════
// SLIDE 12 — Supabase 프로젝트 적용
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  addLabel(s, "SUPABASE IN OUR PROJECT", 0.5, 0.2);
  addAccentBar(s, 0.5, 0.5, 0.65);
  s.addText("Supabase 적용 현황", {
    x: 0.7, y: 0.45, w: 8, h: 0.7,
    fontSize: 36, bold: true, color: C.white, fontFace: "Arial",
  });

  // 구성도 (상단 전체 폭)
  addCard(s, 0.4, 1.32, 9.2, 1.15, C.card);
  s.addText("서비스 구성도", {
    x: 0.65, y: 1.4, w: 2, h: 0.3,
    fontSize: 11, bold: true, color: C.purple2, fontFace: "Arial",
  });

  // 구성도 아이템들
  const flow = [
    { label: "브라우저\n(React)", x: 0.7 },
    { label: "supabase-js\n클라이언트", x: 2.85 },
    { label: "Supabase\n클라우드", x: 5.3 },
    { label: "PostgreSQL\nDB", x: 7.5 },
  ];

  flow.forEach((f, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: f.x, y: 1.75, w: 1.75, h: 0.6,
      fill: { color: "1A0D3A" },
      line: { color: C.purple, width: 0.6 },
    });
    s.addText(f.label, {
      x: f.x, y: 1.75, w: 1.75, h: 0.6,
      fontSize: 9.5, color: C.white, align: "center", valign: "middle",
      lineSpacingMultiple: 1.3, fontFace: "Arial",
    });
    if (i < flow.length - 1) {
      s.addText("→", {
        x: f.x + 1.78, y: 1.88, w: 0.3, h: 0.3,
        fontSize: 13, color: C.purple2, align: "center",
      });
    }
  });

  // 선택 이유 (왼쪽)
  addCard(s, 0.4, 2.65, 4.45, 2.65, C.card);
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.65, w: 4.45, h: 0.08,
    fill: { color: C.purple },
    line: { color: C.purple, width: 0 },
  });
  s.addText("선택 이유", {
    x: 0.6, y: 2.78, w: 4.0, h: 0.38,
    fontSize: 13, bold: true, color: C.purple2, fontFace: "Arial",
  });

  const reasons = [
    { icon: "✅", text: "별도 서버(Node.js/Express) 개발 불필요" },
    { icon: "✅", text: "팀 전원이 프론트엔드에 집중 가능" },
    { icon: "✅", text: "무료 플랜으로 프로젝트 규모 충분" },
    { icon: "✅", text: "Google OAuth 한 줄로 연동 가능" },
  ];
  reasons.forEach((r, i) => {
    s.addText(`${r.icon}  ${r.text}`, {
      x: 0.6, y: 3.22 + i * 0.48, w: 4.1, h: 0.4,
      fontSize: 12, color: C.white, fontFace: "Arial",
    });
  });

  // 실제 적용 현황 (오른쪽)
  addCard(s, 5.1, 2.65, 4.5, 2.65, C.card);
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.65, w: 4.5, h: 0.08,
    fill: { color: C.purple2 },
    line: { color: C.purple2, width: 0 },
  });
  s.addText("실제 적용 현황", {
    x: 5.3, y: 2.78, w: 4.1, h: 0.38,
    fontSize: 13, bold: true, color: C.purple2, fontFace: "Arial",
  });

  const usages = [
    { feature: "Auth",     desc: "Google OAuth 로그인 / 로그아웃 / 세션 유지" },
    { feature: "profiles", desc: "유저 닉네임 · 이메일 저장 및 수정" },
    { feature: "games",    desc: "게임 추가 · 삭제 · 상태 변경 CRUD" },
    { feature: "RLS",      desc: "본인 게임만 수정, 프로필은 전체 조회" },
  ];
  usages.forEach((u, i) => {
    const y = 3.22 + i * 0.48;
    s.addShape(pres.shapes.RECTANGLE, {
      x: 5.3, y: y + 0.04, w: 0.9, h: 0.3,
      fill: { color: "1A0D3A" },
      line: { color: C.purple, width: 0.4 },
    });
    s.addText(u.feature, {
      x: 5.3, y: y + 0.04, w: 0.9, h: 0.3,
      fontSize: 9, bold: true, color: C.purple3,
      align: "center", valign: "middle", fontFace: "Courier New",
    });
    s.addText(u.desc, {
      x: 6.3, y, w: 3.1, h: 0.4,
      fontSize: 11, color: C.gray, fontFace: "Arial", valign: "middle",
    });
  });

  addSlideNum(s, 12, TOTAL);
}

// ═══════════════════════════════════════════════════════
// SLIDE 13 — Supabase 설정 ① (프로젝트 생성 / Key / 테이블)
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  addLabel(s, "SUPABASE SETUP  ①  —  프로젝트 초기 설정", 0.5, 0.2);
  addAccentBar(s, 0.5, 0.5, 0.65);
  s.addText("Supabase 설정 방법", {
    x: 0.7, y: 0.45, w: 8.5, h: 0.7,
    fontSize: 32, bold: true, color: C.white, fontFace: "Arial",
  });

  const setupSteps1 = [
    {
      n: "01", title: "프로젝트 생성", color: C.purple,
      details: [
        "supabase.com 접속 → 로그인",
        "우상단  New project  클릭",
        "이름: gameStack  /  Region: Asia-Pacific",
        "DB 비밀번호 입력 → Create new project",
      ],
    },
    {
      n: "02", title: "Key & URL 발급", color: C.purple2,
      details: [
        "좌측 메뉴  Project Settings  클릭",
        "Settings → API Keys 탭 선택",
        "anon public 키 복사 → VITE_SUPABASE_ANON_KEY",
        "Project URL 복사 → VITE_SUPABASE_URL  →  .env 저장",
      ],
    },
    {
      n: "03", title: "테이블 생성 (SQL Editor)", color: C.purple3,
      details: [
        "좌측 메뉴  SQL Editor  클릭",
        "New query → SQL 붙여넣기 → ▶ Run",
        "profiles · games · comments · ratings 순서로 실행",
        "Table Editor에서 4개 테이블 생성 확인",
      ],
    },
  ];

  setupSteps1.forEach((st, i) => {
    const y = 1.35 + i * 1.37;
    addCard(s, 0.35, y, 9.3, 1.22, C.card);

    // 번호 박스
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.35, y, w: 0.95, h: 1.22,
      fill: { color: st.color },
      line: { color: st.color, width: 0 },
    });
    s.addText(st.n, {
      x: 0.35, y, w: 0.95, h: 1.22,
      fontSize: 22, bold: true, color: C.white,
      align: "center", valign: "middle", fontFace: "Arial",
    });

    // 제목
    s.addText(st.title, {
      x: 1.45, y: y + 0.1, w: 8.0, h: 0.38,
      fontSize: 14, bold: true, color: C.white, fontFace: "Arial",
    });

    // 구분선
    s.addShape(pres.shapes.RECTANGLE, {
      x: 1.45, y: y + 0.5, w: 8.05, h: 0.02,
      fill: { color: C.divider },
      line: { color: C.divider, width: 0 },
    });

    // 세부 내용 (2x2 그리드)
    st.details.forEach((d, j) => {
      const col = j % 2;
      const row = Math.floor(j / 2);
      const dx = 1.45 + col * 3.9;
      const dy = y + 0.57 + row * 0.33;
      s.addShape(pres.shapes.OVAL, {
        x: dx, y: dy + 0.06, w: 0.13, h: 0.13,
        fill: { color: st.color },
        line: { color: st.color, width: 0 },
      });
      s.addText(d, {
        x: dx + 0.2, y: dy, w: 3.6, h: 0.3,
        fontSize: 10.5, color: C.gray, fontFace: "Arial",
      });
    });
  });

  addSlideNum(s, 13, TOTAL);
}

// ═══════════════════════════════════════════════════════
// SLIDE 14 — Supabase 설정 ② (RLS / Google OAuth)
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  addLabel(s, "SUPABASE SETUP  ②  —  보안 & Google OAuth", 0.5, 0.2);
  addAccentBar(s, 0.5, 0.5, 0.65);
  s.addText("RLS 보안정책 & Google OAuth 연동", {
    x: 0.7, y: 0.45, w: 9, h: 0.7,
    fontSize: 30, bold: true, color: C.white, fontFace: "Arial",
  });

  // ── 왼쪽: RLS 보안정책 ──
  addCard(s, 0.35, 1.35, 4.45, 4.1, C.card);
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.35, y: 1.35, w: 4.45, h: 0.08,
    fill: { color: C.purple },
    line: { color: C.purple, width: 0 },
  });
  s.addText("🛡️  RLS 보안정책 (Row Level Security)", {
    x: 0.55, y: 1.5, w: 4.1, h: 0.38,
    fontSize: 13, bold: true, color: C.white, fontFace: "Arial",
  });
  s.addText("SQL Editor → New query → 아래 SQL 실행", {
    x: 0.55, y: 1.92, w: 4.1, h: 0.28,
    fontSize: 10.5, color: C.gray, fontFace: "Arial",
  });

  // 코드 블록
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 2.24, w: 4.25, h: 3.05,
    fill: { color: "090A18" },
    line: { color: C.divider, width: 0.4 },
  });

  const rlsCode = [
    { text: "-- RLS 활성화 (4개 테이블 전체)", color: "5F6A8A" },
    { text: "alter table profiles", color: C.white },
    { text: "  enable row level security;", color: "A855F7" },
    { text: "alter table games", color: C.white },
    { text: "  enable row level security;", color: "A855F7" },
    { text: "", color: C.gray },
    { text: "-- 보안 정책 생성 (본인 데이터만)", color: "5F6A8A" },
    { text: "create policy 'games_select' on games", color: C.white },
    { text: "  for select using", color: C.gray },
    { text: "  (auth.uid() = user_id);", color: "A855F7" },
    { text: "create policy 'games_insert' on games", color: C.white },
    { text: "  for insert with check", color: C.gray },
    { text: "  (auth.uid() = user_id);", color: "A855F7" },
    { text: "-- profiles · comments · ratings 동일", color: "5F6A8A" },
  ];

  rlsCode.forEach((line, i) => {
    s.addText(line.text, {
      x: 0.6, y: 2.34 + i * 0.204, w: 4.0, h: 0.22,
      fontSize: 8.5, color: line.color, fontFace: "Courier New", margin: 0,
    });
  });

  // ── 오른쪽: Google OAuth 연동 ──
  addCard(s, 4.95, 1.35, 4.7, 4.1, C.card);
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.95, y: 1.35, w: 4.7, h: 0.08,
    fill: { color: C.purple2 },
    line: { color: C.purple2, width: 0 },
  });
  s.addText("🔑  Google OAuth 연동", {
    x: 5.15, y: 1.5, w: 4.3, h: 0.38,
    fontSize: 13, bold: true, color: C.white, fontFace: "Arial",
  });

  const oauthSteps = [
    {
      title: "Google Cloud Console 접속",
      sub: "console.cloud.google.com → 프로젝트 선택/생성",
    },
    {
      title: "API 및 서비스 → 사용자 인증 정보",
      sub: "+ 사용자 인증 정보 만들기\n→ OAuth 클라이언트 ID 선택",
    },
    {
      title: "웹 애플리케이션 / 이름: gameStack",
      sub: "승인된 리디렉션 URI 에\nSupabase Callback URL 추가 → 만들기",
    },
    {
      title: "Client ID & Secret → Supabase 등록",
      sub: "Authentication → Sign In/Providers\n→ Google → Enable → 입력 → Save",
    },
  ];

  oauthSteps.forEach((st, i) => {
    const oy = 2.0 + i * 0.88;
    s.addShape(pres.shapes.OVAL, {
      x: 5.15, y: oy + 0.08, w: 0.32, h: 0.32,
      fill: { color: C.purple2 },
      line: { color: C.purple2, width: 0 },
    });
    s.addText(String(i + 1), {
      x: 5.15, y: oy + 0.08, w: 0.32, h: 0.32,
      fontSize: 10, bold: true, color: C.white, align: "center", valign: "middle",
    });
    s.addText(st.title, {
      x: 5.57, y: oy, w: 3.9, h: 0.32,
      fontSize: 11, bold: true, color: C.white, fontFace: "Arial",
    });
    s.addText(st.sub, {
      x: 5.57, y: oy + 0.32, w: 3.9, h: 0.5,
      fontSize: 9.5, color: C.gray, fontFace: "Arial", lineSpacingMultiple: 1.3,
    });
    if (i < oauthSteps.length - 1) {
      s.addShape(pres.shapes.RECTANGLE, {
        x: 5.05, y: oy + 0.84, w: 4.4, h: 0.02,
        fill: { color: C.divider },
        line: { color: C.divider, width: 0 },
      });
    }
  });

  // Callback URL 칩
  s.addShape(pres.shapes.RECTANGLE, {
    x: 4.95, y: 5.09, w: 4.7, h: 0.26,
    fill: { color: "0D0F20" },
    line: { color: C.purple, width: 0.4 },
  });
  s.addText("Callback: https://[ref].supabase.co/auth/v1/callback", {
    x: 4.95, y: 5.09, w: 4.7, h: 0.26,
    fontSize: 8.5, color: C.purple3, fontFace: "Courier New",
    align: "center", valign: "middle",
  });

  addSlideNum(s, 14, TOTAL);
}

// ═══════════════════════════════════════════════════════
// SLIDE 14 — Vercel 배포
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  addLabel(s, "DEPLOYMENT", 0.5, 0.2);
  addAccentBar(s, 0.5, 0.5, 0.65);
  s.addText("Vercel 배포", {
    x: 0.7, y: 0.45, w: 8, h: 0.7,
    fontSize: 36, bold: true, color: C.white, fontFace: "Arial",
  });

  const steps = [
    {
      n: "01",
      title: "Vercel 프로젝트 생성",
      desc: "GitHub 레포 연결 → Import",
    },
    {
      n: "02",
      title: "환경변수 등록",
      desc: "VITE_SUPABASE_URL\nVITE_SUPABASE_ANON_KEY\nVITE_RAWG_KEY",
    },
    {
      n: "03",
      title: "Deploy 클릭",
      desc: "자동 빌드 (vite build)\n1~2분 후 배포 URL 생성",
    },
    {
      n: "04",
      title: "Google OAuth Redirect URI",
      desc: "Vercel 배포 URL을\nGoogle Cloud Console에 추가",
    },
    {
      n: "05",
      title: "최종 확인",
      desc: "배포 URL에서 로그인 · 라이브러리\n· 검색 동작 확인",
    },
  ];

  steps.forEach((st, i) => {
    const x = 0.4 + i * 1.88;
    const cardH = 3.6;
    const cardY = 1.38;

    addCard(s, x, cardY, 1.68, cardH, C.card);

    // 상단 번호
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: cardY, w: 1.68, h: 0.65,
      fill: { color: C.purple },
      line: { color: C.purple, width: 0 },
    });
    s.addText(st.n, {
      x, y: cardY, w: 1.68, h: 0.65,
      fontSize: 22, bold: true, color: C.white,
      align: "center", valign: "middle",
    });

    // 타이틀
    s.addText(st.title, {
      x: x + 0.1, y: cardY + 0.75, w: 1.5, h: 0.72,
      fontSize: 12, bold: true, color: C.white,
      align: "center", lineSpacingMultiple: 1.3,
      fontFace: "Arial",
    });

    // 구분선
    s.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: cardY + 1.55, w: 1.38, h: 0.02,
      fill: { color: C.divider },
      line: { color: C.divider, width: 0 },
    });

    // 설명
    s.addText(st.desc, {
      x: x + 0.08, y: cardY + 1.65, w: 1.55, h: 1.65,
      fontSize: 10, color: C.gray,
      align: "center", lineSpacingMultiple: 1.4,
      fontFace: "Arial",
    });

    // 화살표 (마지막 제외)
    if (i < steps.length - 1) {
      s.addText("→", {
        x: x + 1.68, y: cardY + 1.55, w: 0.2, h: 0.35,
        fontSize: 12, color: C.muted, align: "center",
      });
    }
  });

  // 주의사항 박스
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 5.08, w: 9.2, h: 0.38,
    fill: { color: "1A0D3A" },
    line: { color: C.purple, width: 0.6 },
  });
  s.addText("⚠️  .env 파일은 .gitignore 포함 → GitHub에 없음 → 새 환경에서 반드시 직접 생성 필요", {
    x: 0.4, y: 5.08, w: 9.2, h: 0.38,
    fontSize: 11, color: C.purple3, align: "center", valign: "middle",
  });

  addSlideNum(s, 15, TOTAL);
}

// ═══════════════════════════════════════════════════════
// SLIDE 16 — 시연
// ═══════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  addBg(s);

  // 배경 글로우
  s.addShape(pres.shapes.OVAL, {
    x: 1.5, y: 0.5, w: 7, h: 4.5,
    fill: { color: "3B0D8A", transparency: 88 },
    line: { color: "3B0D8A", width: 0 },
  });

  addLabel(s, "LIVE DEMONSTRATION", 1.0, 1.05);

  s.addText("🎮", {
    x: 0, y: 1.4, w: 10, h: 1.0,
    fontSize: 52, align: "center",
  });

  s.addText("Live Demo", {
    x: 1.0, y: 2.45, w: 8.0, h: 0.9,
    fontSize: 56, bold: true, color: C.white,
    align: "center", charSpacing: -1, fontFace: "Arial",
  });

  s.addText("시연", {
    x: 1.0, y: 3.38, w: 8.0, h: 0.5,
    fontSize: 20, color: C.purple2, align: "center",
    fontFace: "Arial",
  });

  // 구분선
  s.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 4.0, w: 3.0, h: 0.04,
    fill: { color: C.purple },
    line: { color: C.purple, width: 0 },
  });

  // 하단 태그들
  const tags2 = ["Google 로그인", "게임 추가", "라이브러리 관리", "유저 검색"];
  tags2.forEach((tag, i) => {
    const x = 1.1 + i * 2.0;
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: 4.22, w: 1.7, h: 0.32,
      fill: { color: "1E103A" },
      line: { color: C.purple, width: 0.6 },
    });
    s.addText(tag, {
      x, y: 4.22, w: 1.7, h: 0.32,
      fontSize: 10, color: C.purple3, align: "center", valign: "middle",
    });
  });

  addSlideNum(s, 16, TOTAL);
}

// ── 저장 ─────────────────────────────────────────────
pres.writeFile({ fileName: "/Users/kwakjeonghun/Desktop/school/26-1/웹프응용/팀플/gameStack/GameStack_발표.pptx" })
  .then(() => console.log("✅ PPT 생성 완료: GameStack_발표.pptx"))
  .catch(err => console.error("❌ 오류:", err));
