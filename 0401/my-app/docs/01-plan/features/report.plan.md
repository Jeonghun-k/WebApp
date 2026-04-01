## Executive Summary

| 항목 | 내용 |
|------|------|
| Feature | 여행지 추천 웹사이트 (report) |
| 날짜 | 2026-04-01 |

### Value Delivered

| 관점 | 내용 |
|------|------|
| Problem | 여행지를 카테고리/대륙별로 찾기 어렵다 |
| Solution | 필터링 가능한 여행지 카드 UI 제공 |
| Function UX Effect | 카테고리·대륙 버튼으로 원하는 여행지 즉시 탐색 |
| Core Value | React 컴포넌트 분리 + props 전달 학습 과제 달성 |

## Context Anchor

| WHY | WHO | RISK | SUCCESS | SCOPE |
|-----|-----|------|---------|-------|
| 웹프 응용 과제 | 학생 | 이미지 로딩 실패 | 5개 이상 컴포넌트, 2개 이상 props | report 폴더, React |

---

## 1. 요구사항

- report 폴더에 React 앱 구성
- 5개 이상의 컴포넌트
- 2개 이상의 props를 전달하는 컴포넌트 1개 이상
- 여행지 카드: 이미지, 여행지명, 설명, 추천 계절
- 카테고리 필터: 문화, 역사, 자연, 휴양, 미식, 도시, 모험
- 대륙 필터: 아시아, 유럽, 오세아니아, 아메리카

## 2. 컴포넌트 구성

| 컴포넌트 | 역할 | props |
|----------|------|-------|
| App | 상태 관리, 필터 로직 | - |
| Header | 사이트 제목/소개 | title, subtitle |
| FilterBar | 필터 버튼 그룹 | filters, selected, onSelect, label |
| TravelCard | 여행지 카드 1개 | name, image, description, season, category, continent |
| TravelList | 카드 목록 렌더링 | destinations |
| Footer | 하단 정보 | - |

총 6개 컴포넌트 (요건 충족)
TravelCard: 6개 props (요건 충족)
FilterBar: 4개 props (요건 충족)
