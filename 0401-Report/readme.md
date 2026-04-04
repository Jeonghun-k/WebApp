# BMI 계산기 (BMI Calculator)

**배포 주소**: 

키와 몸무게를 입력하면 BMI(체질량지수)를 즉시 계산하고, 건강 상태를 시각적으로 보여주는 React 웹 애플리케이션입니다.

---

## 실행 방법

```bash
npm install   # 최초 1회
npm start     # 개발 서버 실행 → http://localhost:3000
npm run build # 프로덕션 빌드 (Vercel 배포용)
```

---

## 프로젝트 구조

```
0401-Report1/
├── public/
│   └── index.html              # HTML 진입점
├── src/
│   ├── index.js                # ReactDOM.createRoot 진입점
│   ├── index.css               # 전역 CSS (reset, body 배경)
│   ├── App.js                  # 루트 컴포넌트 (상태 관리 + 계산 로직)
│   └── components/
│       ├── Header.js           # 상단 타이틀 헤더
│       ├── UnitToggle.js       # 단위 전환 버튼 (kg/cm ↔ lb/ft)
│       ├── InputForm.js        # 키/몸무게 입력 폼 + 계산 버튼
│       ├── ResultCard.js       # BMI 수치 + 분류 뱃지 표시
│       ├── BmiGauge.js         # BMI 위치 게이지 바 시각화
│       ├── IdealWeight.js      # 현재 키 기준 정상 체중 범위 표시
│       ├── History.js          # 최근 5개 계산 기록 (localStorage)
│       └── Footer.js           # 하단 푸터
├── .gitignore
└── package.json
```

---

## 기능 설명

### 1. BMI 계산 (App.js)
키와 몸무게를 입력받아 단위에 맞는 공식으로 BMI를 계산합니다. 소수점 첫째 자리까지 표시합니다.

### 2. 단위 전환 (UnitToggle.js)
`kg/cm` 와 `lb/ft` 두 가지 단위를 토글 버튼으로 전환합니다. 단위를 변경하면 입력값과 결과가 초기화됩니다.

### 3. 입력 폼 (InputForm.js)
키와 몸무게를 입력하는 숫자 입력 필드 2개입니다. 두 값이 모두 입력되어야 계산 버튼이 활성화됩니다.

### 4. 결과 카드 (ResultCard.js)
계산된 BMI 수치를 크게 표시하고, 분류에 따라 색상이 다른 뱃지를 보여줍니다.

### 5. 게이지 바 (BmiGauge.js)
BMI 10~40 범위를 그라디언트 바로 표시하고, 현재 BMI 위치에 마커(▼)를 표시합니다. 계산 전에는 나타나지 않습니다.

### 6. 정상 체중 범위 (IdealWeight.js)
현재 입력된 키를 기반으로 정상 BMI(18.5~24.9)에 해당하는 체중 범위를 계산해 표시합니다. 키를 입력하면 바로 나타납니다.

### 7. 계산 히스토리 (History.js)
계산할 때마다 날짜, BMI, 분류, 키/몸무게를 localStorage에 저장하고 최근 5개까지 목록으로 표시합니다. 전체 삭제 버튼으로 기록을 지울 수 있습니다.

---

## 컴포넌트 Props 정리

| 컴포넌트 | Props | 타입 | 설명 |
|----------|-------|------|------|
| UnitToggle | unit | string | 현재 단위 ('metric' \| 'imperial') |
| | onToggle | function | 단위 변경 콜백 |
| InputForm | unit | string | 현재 단위 |
| | height | string | 키 입력값 |
| | weight | string | 몸무게 입력값 |
| | onHeightChange | function | 키 변경 콜백 |
| | onWeightChange | function | 몸무게 변경 콜백 |
| | onCalculate | function | 계산 버튼 클릭 콜백 |
| ResultCard | bmi | number\|null | BMI 수치 |
| | category | object\|null | { label, color } |
| BmiGauge | bmi | number\|null | BMI 수치 |
| IdealWeight | height | string | 키 입력값 |
| | unit | string | 현재 단위 |
| History | history | array | 히스토리 배열 |
| | onClear | function | 전체 삭제 콜백 |

---

## 상태 흐름

```
UnitToggle  →  App  (unit 변경, height/weight/bmi 초기화)
InputForm   →  App  (height, weight 변경)
InputForm   →  App  (calculateBmi 호출)
App         →  ResultCard   (bmi, category 전달)
App         →  BmiGauge     (bmi 전달)
App         →  IdealWeight  (height, unit 전달)
App         →  History      (history, onClear 전달)
```

---

## BMI 계산 공식 및 근거

### 미터법 (kg/cm)

```
BMI = 몸무게(kg) / 키(m)²
```

예: 키 170cm, 몸무게 65kg → BMI = 65 / (1.70)² = **22.5**

코드 적용 (`App.js:47-48`):
```js
const hm = h / 100;        // cm → m 변환
result = w / (hm * hm);
```

### 영미법 (lb/ft)

```
BMI = 703 × 몸무게(lb) / 키(inch)²
```

계수 703은 파운드/피트 단위를 kg/m² 단위로 변환하기 위한 상수입니다.

코드 적용 (`App.js:50-51`):
```js
const hInch = h * 12;      // ft → inch 변환
result = (703 * w) / (hInch * hInch);
```

**출처**: National Institutes of Health (NIH), U.S. Department of Health & Human Services  
https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm

---

## BMI 분류 기준 및 근거

### 적용 기준 — WHO (세계보건기구) 국제 표준

| BMI 범위 | 분류 | 표시 색상 |
|----------|------|----------|
| 18.5 미만 | 저체중 (Underweight) | 파랑 `#3498db` |
| 18.5 ~ 24.9 | 정상 (Normal) | 초록 `#2ecc71` |
| 25.0 ~ 29.9 | 과체중 (Overweight) | 주황 `#e67e22` |
| 30.0 이상 | 비만 (Obese) | 빨강 `#e74c3c` |

**출처**: World Health Organization (WHO), "BMI Classification"  
https://www.who.int/health-topics/obesity

### 참고 — 아시아/한국 기준 (대한비만학회)

한국을 포함한 아시아인은 같은 BMI에서 서양인보다 체지방률이 높아 별도 기준을 사용합니다.

| BMI 범위 | 한국 기준 분류 |
|----------|--------------|
| 18.5 미만 | 저체중 |
| 18.5 ~ 22.9 | 정상 |
| 23.0 ~ 24.9 | 비만 전단계 |
| 25.0 이상 | 비만 |

**출처**: 대한비만학회, 비만 진료지침 2022  
https://www.kosso.or.kr

> 본 프로젝트는 국제 표준인 WHO 기준을 사용합니다.

---

## 정상 체중 범위 계산 근거

정상 BMI 구간(18.5 ~ 24.9)을 역산하여 현재 키 기준 체중 범위를 계산합니다.

```
최소 체중 = 18.5 × 키(m)²
최대 체중 = 24.9 × 키(m)²
```

코드 적용 (`IdealWeight.js:13-14`):
```js
minWeight = (18.5 * hm * hm).toFixed(1);
maxWeight = (24.9 * hm * hm).toFixed(1);
```

---

## 게이지 바 범위 설정 근거

게이지 바는 BMI **10 ~ 40** 범위를 표시합니다.

- 하한 10: 임상적으로 생존 가능한 최저 BMI 수준
- 상한 40: 고도 비만(Morbid Obesity) 기준선
- 이 범위 밖의 값은 0% 또는 100%로 클리핑 처리

```js
const MIN = 10;
const MAX = 40;
const percent = Math.min(100, Math.max(0, ((props.bmi - MIN) / (MAX - MIN)) * 100));
```

---

## 히스토리 저장 방식

- 저장소: 브라우저 `localStorage` (서버 통신 없음)
- 키: `'bmi-history'`
- 최대 저장 개수: **5개** (초과 시 가장 오래된 항목 자동 삭제)
- 저장 데이터: BMI 수치, 분류, 단위, 키, 몸무게, 날짜

---

## 사용 기술

| 항목 | 내용 |
|------|------|
| 프레임워크 | React 18 |
| 빌드 도구 | Create React App (react-scripts 5) |
| 스타일 | CSS-in-JS (인라인 스타일 객체) |
| 데이터 저장 | localStorage (외부 API 없음) |
| 배포 | Vercel |

---
