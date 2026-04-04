# 여행지 추천 앱 (Travel Recommend)

React 기반의 여행지 추천 웹 애플리케이션입니다. 카테고리(테마)와 대륙 필터를 통해 원하는 여행지를 검색할 수 있습니다.

---

## 실행 방법

```bash
npm install   # 최초 1회
npm start     # 개발 서버 실행 → http://localhost:3000
npm run build # 프로덕션 빌드
```

---

## 프로젝트 구조

```
0401-Report/
├── public/
│   └── index.html          # HTML 진입점 (id="root" div 포함)
├── src/
│   ├── index.js            # ReactDOM.createRoot 진입점
│   ├── index.css           # 전역 CSS
│   ├── App.js              # 루트 컴포넌트 (상태 관리 + 데이터)
│   └── components/
│       ├── Header.js       # 상단 타이틀/서브타이틀 헤더
│       ├── FilterBar.js    # 필터 버튼 그룹 (테마/대륙)
│       ├── TravelList.js   # 여행지 카드 그리드 목록
│       ├── TravelCard.js   # 개별 여행지 카드
│       └── Footer.js       # 하단 푸터
└── package.json
```

---

## 컴포넌트 설명

### App.js — 루트 컴포넌트

- 여행지 데이터 배열(`destinations`) 12개를 정의
- `useState`로 `selectedCategory`, `selectedContinent` 상태 관리
- 두 필터를 AND 조건으로 적용해 `filtered` 배열 계산
- Header → FilterBar(테마) → FilterBar(대륙) → TravelList → Footer 순으로 렌더링

```js
const [selectedCategory, setSelectedCategory] = useState('전체');
const [selectedContinent, setSelectedContinent] = useState('전체');

const filtered = destinations.filter((dest) => {
  const categoryMatch = selectedCategory === '전체' || dest.category === selectedCategory;
  const continentMatch = selectedContinent === '전체' || dest.continent === selectedContinent;
  return categoryMatch && continentMatch;
});
```

### Header.js

| Props | 타입 | 설명 |
|-------|------|------|
| title | string | 메인 제목 |
| subtitle | string | 부제목 |

파란색 그라디언트 배경의 상단 헤더. props로 텍스트를 주입받는 단순 표시 컴포넌트.

### FilterBar.js

| Props | 타입 | 설명 |
|-------|------|------|
| label | string | 필터 레이블 (예: "테마", "대륙") |
| filters | string[] | 버튼으로 표시할 옵션 배열 |
| selected | string | 현재 선택된 값 |
| onSelect | function | 선택 시 호출되는 콜백 |

선택된 버튼에 파란색 스타일(`btnActive`)을 스프레드 연산자로 병합하여 활성 상태를 표시.

```js
style={{
  ...styles.btn,
  ...(props.selected === item ? styles.btnActive : {}),
}}
```

### TravelList.js

| Props | 타입 | 설명 |
|-------|------|------|
| destinations | object[] | 필터링된 여행지 배열 |

`destinations`가 빈 배열이면 "해당 조건에 맞는 여행지가 없습니다." 메시지 출력.
CSS Grid(`auto-fill`, `minmax(260px, 1fr)`)로 반응형 카드 레이아웃 구성.

### TravelCard.js

| Props | 타입 | 설명 |
|-------|------|------|
| name | string | 여행지 이름 |
| image | string | 이미지 URL (Unsplash) |
| description | string | 여행지 설명 |
| season | string | 추천 계절 |
| category | string | 테마 카테고리 |
| continent | string | 대륙 |

이미지 로드 실패 시 `onError`로 회색 배경 처리.
대륙 태그(파란색)와 카테고리 태그(회색)를 카드 상단에 표시.

### Footer.js

Props 없음. 고정 문자열을 표시하는 단순 푸터 컴포넌트.

---

## 데이터 구조

`App.js`의 `destinations` 배열에 정적으로 정의되어 있습니다.

```js
{
  id: number,          // 고유 ID
  name: string,        // 여행지명 (예: "파리, 프랑스")
  image: string,       // Unsplash 이미지 URL
  description: string, // 한 줄 설명
  season: string,      // 추천 계절
  category: string,    // 테마 (문화/역사/자연/휴양/미식/도시/모험)
  continent: string,   // 대륙 (아시아/유럽/오세아니아/아메리카)
}
```

현재 12개 여행지 데이터가 포함되어 있습니다.

---

## 필터 옵션

| 구분 | 옵션 |
|------|------|
| 테마(카테고리) | 전체, 문화, 역사, 자연, 휴양, 미식, 도시, 모험 |
| 대륙 | 전체, 아시아, 유럽, 오세아니아, 아메리카 |

---

## 사용 기술

- React 18
- Create React App (react-scripts 5)
- CSS-in-JS (인라인 스타일 객체)
- 외부 라이브러리 없음 (순수 React + 기본 CSS)

---

## 스타일 방식

별도의 CSS 파일이나 CSS 모듈 없이, 각 컴포넌트 파일 하단에 `const styles = { ... }` 객체를 선언하고 `style={styles.xxx}` 형태로 적용합니다.

```js
const styles = {
  card: {
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  // ...
};
```
