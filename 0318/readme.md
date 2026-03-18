# React 학습 노트

> 학습 순서: Do it! → 소플의 리액트 → 2024 파일

---

## 0. 웹 기초 개념

### HTML (Hyper Text Markup Language)

- **웹사이트의 모습을 기술하기 위한 마크업 언어**
- **Hyper Text**: 참조(하이퍼링크)를 통해 독자가 한 문서에서 다른 문서로 즉시 접근할 수 있는 텍스트
- **Markup Language**: 태그 등을 이용하여 문서나 데이터의 구조를 명기하는 언어. 문서가 화면에 표시되는 형식을 나타내거나 데이터의 논리적인 구조를 명시하기 위한 규칙들을 정의한 언어의 일종

### HTML 문서 구조

```html
<!doctype html>
<html>
  <head>
    <!-- 타이틀, 메타태그, 스타일시트 영역 -->
  </head>
  <body>
    <!-- 본문 영역 -->
    <script>
      <!-- 자바스크립트 영역 -->
    </script>
  </body>
</html>
```

- `<head>` = 머리 (타이틀, 메타태그, 스타일시트)
- `<body>` = 몸통 (본문 및 JS)

### CSS (Cascading Style Sheet)

- **Style sheet 언어** — HTML 문서의 요소들에 선택적으로 스타일을 적용
- HTML 문서의 색이나 모양 등 외관을 꾸미는 언어
- CSS로 작성된 코드를 **스타일 시트(style sheet)** 라고 부름
- 버전: CSS1 → CSS2 → **CSS3** → CSS4 (현재 표준화 작업 중)
- **CSS 기능**: 색상/배경, 텍스트, 폰트, 박스 모델(Box Model), 비주얼 포맷 및 효과, 리스트, 테이블, 사용자 인터페이스

**스타일(style)**: 문서를 멋지게 장식하거나 정해진 양식에 맞게 내용을 다듬는 역할

**스타일시트(stylesheet)**: 화면에 출력하기 위한 외형적인 모양과 형식에 관한 스타일 규칙들의 모임. 스타일시트에 의해 웹 문서가 브라우저에 어떻게 보여지는지 결정됨

### ECMAScript / JavaScript

- **JavaScript**: 스크립트 언어, 웹 페이지가 동작하는 것을 담당
- Ecma International의 **프로토타입 기반** 프로그래밍 언어
- ECMAScript(ES6)가 표준 규격, JavaScript는 그 구현체

### Client - Server 구조

| 구분 | 설명 |
|------|------|
| **Client** | 특정 서비스를 이용하는 사용자(고객), 웹 브라우저 |
| **Server** | 특정 서비스를 제공하는 자 |

Client → (Request) → Server → (Response) → Client

### 웹 브라우저 (Browser)

- HTML 문서와 그림, 멀티미디어 파일 등 WWW 기반 인터넷 컨텐츠에 접근하기 위한 응용 프로그램
- 대표적인 HTTP 사용자 에이전트
- **브라우저 점유율 (2024년 2월 기준)**: Chrome 65.32% / Safari 18.31% / Edge 5.06% / Firefox 3.04%

---

## 1. 리액트(React) 란?

- 사용자 인터페이스(UI)를 만들기 위한 **JavaScript 라이브러리**
- 사용자와 웹사이트의 상호작용을 돕는 자바스크립트 기능 모음집
- **2013년 페이스북(Meta)에서 발표한 오픈소스** 자바스크립트 프레임워크
- 가상 DOM(Document Object Model)과 JSX(JavaScript XML) 방식으로 동작
- **SPA(Single Page Application)** 개발에 주로 사용
- 선언적이고 효율적이며 유연한 JavaScript 라이브러리
- **"컴포넌트"** 라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성

### React 컴포넌트 구조

```
리액트 컴포넌트
├── 데이터
├── 생명주기
├── 이벤트
└── JSX
          ↓
    리액트 DOM → render()
```

### 주요 프레임워크 / 라이브러리 비교

| 이름 | 종류 |
|------|------|
| Angular.js | 프레임워크 |
| **React.js** | **라이브러리** |
| Vue.js | 프레임워크 |

> **프레임워크 vs 라이브러리**: 프레임워크는 전체 구조를 제공하고, 라이브러리는 필요한 기능만 가져다 사용

---

## 2. 리액트 장점

1. **빠른 업데이트와 렌더링 속도** → Virtual DOM 활용
2. **컴포넌트 기반 구조** → 유지보수 용이, 재사용성 높음
3. **Meta(구 Facebook)의 지원** → 안정적인 생태계
4. **모바일 앱 개발 가능** → React Native로 앱 개발
5. 완성도 높은 개발 워크플로우
6. 뛰어난 유연성과 호환성
7. Virtual DOM으로 강화된 고성능
8. Flux / Redux 상태 관리
9. 다양한 툴 제공 및 거대한 커뮤니티
10. JSX 구문으로 HTML 확장
11. React Hook 지원

## 3. 리액트 단점

1. **방대한 학습량**
2. **버전업** — 빠른 업데이트로 인한 변경 사항 대응 필요
3. **높은 상태(State) 관리 복잡도**
   - `state` = 리액트 컴포넌트의 상태
   - DOM에서 바뀐 부분 = state가 바뀐 컴포넌트를 의미

---

## 4. 핵심 개념

### DOM (Document Object Model)

- 웹페이지를 정의하는 하나의 객체
- 페이지의 태그들을 **트리(Tree) 형태**로 구성한 것
- 각 태그마다 **노드(Node / 엘리먼트)** 를 만들어 제어 → DOM 객체라고도 부름
- JS를 통해 DOM을 수정 가능
- HTML 태그의 **포함 관계에 따라** DOM 객체의 트리 생성 (부모-자식 관계)

**DOM 객체의 구성 요소:**
- 프로퍼티(property)
- 메소드(method): `click()`, `focus()`, `setAttribute()` 등
- 컬렉션(collection): 자식 DOM 객체 목록
- 이벤트 리스너(event listener): `onclick`, `onkeydown`, `onload` 등
- CSS3 스타일

**DOM 목적:**
- HTML 태그가 출력된 모양이나 콘텐츠를 제어
- DOM 객체를 통해 각 태그의 CSS3 스타일 시트 접근 및 변경
- HTML 태그에 의해 출력된 텍스트나 이미지 변경

> **BOM (Browser Object Model)**: window 객체 아래에 navigator, history, location, screen 등이 존재. DOM은 BOM 안에 포함됨.

### Virtual DOM

- Real DOM에 변경이 있을 경우 렌더트리를 재생성하고 레이아웃/페인팅 과정이 반복 → 브라우저 연산 과부하 → **비효율적**
- 이 문제를 해결하기 위해 등장한 개념이 **Virtual DOM(가상돔)**
- 동작 방식 (Diffing 알고리즘):
  1. 변경 전 Virtual DOM(Old Node)과 변경 후 Virtual DOM(New Node)을 **비교(Diffing)**
  2. **달라진 부분만** 실제 DOM에 업데이트
  3. 기존 방식은 하나가 수정되면 전체가 다시 렌더링됨
- Virtual DOM은 보통 **`h`** 함수로 표현

### 렌더링 (Rendering)

화면에 무언가가 그려지는 것. 브라우저의 실시간 렌더링 과정 (CRP):

```
HTML 파싱 → DOM 트리 생성
CSS 파싱  → CSSOM 트리 생성
DOM + CSSOM → 렌더링 트리 (Render Tree)
렌더링 트리 → 각 노드의 크기/위치 계산 (Layout)
→ 개별 노드를 화면에 그림 (Paint)
```

> ⚠️ **CRP(Critical Rendering Path) 그림 중요** (ch01 p12)
> `HTML → DOM` + `CSS → CSSOM` + `JS` → Render Tree → Layout → Paint

### 브라우저 로딩 과정 (상세)

1. **파싱**: 브라우저가 HTML을 파싱 → DOM tree / CSSOM tree 생성
2. **스타일**: DOM Tree + CSSOM Tree → 스타일 매칭 → **Render Tree** 구성 (렌더링에 필요한 노드만 포함)
3. **레이아웃**: 기기의 뷰포트 내에서 노드의 정확한 위치와 크기 계산
4. **페인트**: 렌더링 트리의 각 노드를 화면의 **실제 픽셀로 변환**
5. **합성(Compositing)**: 페이지에서 페인트된 부분을 합쳐 화면에 표시. `transform`, `opacity`, `will-change` 등 사용 시 합성 과정을 거침

```
JavaScript → Style → Layout → Paint → Composite
```

---

## 5. JSX

- **JavaScript 확장 문법** (XML + HTML)
- XML/HTML 코드를 JavaScript로 변환하는 역할

### 장점

- 코드가 간결해짐
- 가독성 향상
- **Injection Attack 방어**

### 사용법

```jsx
// 중간에 JS 코드를 사용하려면 중괄호 {}로 감싸기
const name = "React";
const element = <h1>Hello, {name}!</h1>;

// 함수 호출도 가능
const element2 = <p>{myFunction()}</p>;
```

---

## 6. CSS 관련 개념

### Sass

- **CSS 확장 언어 (전처리기, Preprocessor)**
- CSS에 없는 기능 제공: 변수, 중첩, 재사용 등
- 정식 명칭: *Syntactically Awesome Style Sheets*

### SCSS

- Sass의 **문법(Syntax) 중 하나**
- CSS와 거의 동일한 문법 구조를 사용
- 정식 명칭: *Sassy CSS*

---

## 7. SPA vs MPA

| 구분 | 설명 | 렌더링 방식 |
|------|------|------|
| **SPA** (Single Page Application) | 한 개의 페이지에 여러 자료를 동적으로 출력 | CSR (Client Side Rendering) |
| **MPA** (Multi Page Application) | 여러 개의 페이지를 가지고 출력 | SSR (Server Side Rendering) |

### SPA 특징

- 모든 정적 리소스를 **최초 한번에 다운로드**, 이후 필요한 데이터만 받아 갱신
- 서버로부터 완전한 새로운 페이지를 불러오지 않고 현재 페이지를 **동적으로 다시 작성**

**SPA 장점:**
- 전체 페이지 업데이트 없이 빠르고 '깜빡' 거림이 없음
- 반응형 디자인, 즉각적인 반응
- 정적 리소스를 최초 한 번만 요청, 캐시로 저장
- 오프라인에서도 작동 가능
- FE와 BE가 확실히 구분됨
- 컴포넌트 별 개발에 용이, 재사용 가능

**SPA 단점:**
- **초기 페이지 로딩시간이 길다** (Webpack의 code splitting으로 해결 가능)
- JS를 읽지 못하는 검색엔진 → **SEO 취약** (SSR, Next.js로 해결 가능)
- CSR 방식에서는 쿠키에 세션 저장 → **보안 취약**
- XSS(교차 사이트 스크립팅) 공격 위험

### MPA 특징

- 새로운 페이지 요청 시마다 서버에서 렌더링된 정적 리소스(HTML, CSS, JS)를 다운로드
- 페이지 이동 또는 새로고침 시 **전체 페이지를 다시 렌더링**

**MPA 장점:**
- 완성된 형태의 HTML을 서버로부터 받기 때문에 **첫 로딩이 매우 짧음**
- 여러 HTML 파일이 존재 → 검색 엔진 크롤링에 유리 → **SEO에 적합**
- 오랜 역사로 다양한 자료, 프레임워크 존재

**MPA 단점:**
- 페이지 이동 시 '깜빡'임 (UX 저하)
- 불필요한 템플릿 중복 로딩
- 프론트/백 구분이 불명확 → 서버/클라이언트 언어 모두 필요
- 페이지가 많아 보안 유지 및 유지보수가 어려움

---

## 8. 서버 사이드 기술 스택

| 기술 | 웹 서버 | 비고 |
|------|---------|------|
| ASP | IIS | Windows 10/11 기본 포함. 경로: `C:\Inetpub\wwwroot\` |
| JSP | Tomcat | Eclipse에서 Tomcat 연동 (Apache Tomcat v9.0) |
| PHP | Apache | Laragon, MAMP, XAMPP 등으로 사용 |

**IIS 설정:** `시작 → "windows 기능 켜고 끄기" → 인터넷 정보 서비스 → World Wide Web 서비스`

**JSP 테스트 코드 예시:**
```jsp
<%@ page language="java" contentType="text/html; charset=EUC-KR" %>
<% out.println("Hello JSP"); %>
```

**PHP 테스트 코드 예시:**
```php
<?php echo "Hello PHP" ?>
```

---

## 9. 웹팩 (Webpack)

- JavaScript로 만든 프로그램을 **배포하기 좋은 형태로 묶는(번들링)** 도구
- 사이트를 배포(퍼블리싱)할 때 반드시 필요
- `.js`, `.css`, `.png` 등 각각의 파일들을 모두 **모듈**로 보고, 배포용으로 하나의 파일로 통합

**모듈**: 프로그래밍 관점에서, 특정 기능을 갖는 작은 코드 단위

**번들링**: 모듈들을 배포용으로 하나의 파일로 통합시켜주는 작업

> **퍼블리싱 관련 용어**: release / deploy / distribute

---

## 9-1. Babel

JavaScript에 컴파일러가 필요한 이유: 모든 브라우저가 최신 문법/기술(ES6)을 지원하지 않기 때문에 구 기능(ES5)으로 변환하는 작업이 필요

**Babel이 하는 일:**
- **Transform syntax (구문 변환)**: 최신 JS 문법을 오래된 브라우저가 이해할 수 있도록 변환 (트랜스파일링)
- **babel-polyfill**: 오래된 브라우저에 지원하지 않는 메서드/속성/API를 추가해 줌. 바벨은 컴파일 때, 폴리필은 **런타임**에 실행됨
- **JSX and React**: 바벨은 JSX 문법을 변환

---

## 10. React 프로젝트 파일 구조

### React 시작하기

```bash
npx create-react-app my-app
cd my-app
npm start          # 개발 모드
npm run build      # 프로덕션 모드 (빌드)
```

| 모드 | 명령어 | 설명 |
|------|--------|------|
| 개발 모드 | `npm start` | 프로젝트 개발 시 적용 |
| 프로덕션 모드 | `npm run build` | 개발 완료 후 실제 서비스 배포 시 적용 |

### 최상위 폴더 구조

```
my-app/
├── node_modules/       ← 라이브러리 설치 폴더 (git에 올리지 않음)
├── public/             ← 정적 파일 (컴파일 불필요)
├── src/                ← 소스 파일 (JS로 컴파일됨)
├── .gitignore          ← git 제외 파일 목록
├── package.json        ← 프로젝트 정보 + 라이브러리 목록
├── package-lock.json
└── README.md           ← 프로젝트 설명
```

**package.json**: 프로젝트 이름, 버전, 라이브러리 목록 포함. node_modules 대신 이 파일을 git에 올림 → 클론 시 `npm install`로 복원

### 핵심 파일 3가지 (⭐ 관계도 중요)

```
App.js (Component)
    ↓ Imported into
index.js
    ↓ Renders to
index.html
    ↓ Displays in
브라우저
```

| 파일 | 위치 | 역할 |
|------|------|------|
| `index.html` | `public/` | HTML 템플릿 파일. 직접 표시되지 않고 `index.js`에 의해 렌더링됨. `root` div 포함. (이름 변경 시 오류 발생) |
| `index.js` | `src/` | 메인 프로그램(진입점). HTML 템플릿과 컴포넌트를 조합하여 실제 렌더링 수행. `root`에 App.js를 렌더링 |
| `App.js` | `src/` | 컴포넌트를 정의하는 파일. 실제 화면에 표시되는 내용이 여기서 정의됨 |

### src 내부 폴더 구조

```
src/
├── assets/       ← 이미지, 폰트 파일
├── components/   ← 재사용 가능한 컴포넌트
├── config/       ← config 파일들
├── constants/    ← 공통 상수 정의 파일
├── hooks/        ← 커스텀 훅 (= hoc)
├── pages/        ← 라우팅에 사용할 페이지 컴포넌트
├── services/     ← api 관련 로직 모듈 (= api)
├── styles/       ← css 파일들
├── utils/        ← 공통 유틸 파일 (정규표현식, 공통함수 등)
└── contexts/     ← contextAPI 관련 파일 (redux 사용 시 store 폴더)
```

### JS `<script>` 위치

- `<script>` 태그는 `<body>` 맨 마지막에 위치
- 이유: DOM 추가/수정/변경 작업을 한꺼번에 처리하기 위해 마지막에 배치 권장

---

## 11. 개발 환경 설정

### 필요 도구

| 프로그램 | 용도 | 운영체제 | 비고 |
|----------|------|----------|------|
| Node.js | 웹 서버 개발 플랫폼 | 윈도우/macOS | **필수** (14.0.0 이상, npm 5.6 이상) |
| VSCode | 소스 코드 편집기 | 윈도우/macOS | **권장** |
| scoop | 윈도우용 설치 프로그램 | 윈도우 | 권장 |
| Homebrew | macOS용 설치 프로그램 | macOS | 권장 |
| Chrome | 웹 브라우저 | 윈도우/macOS | 권장 |

### 패키지 매니저

| 이름 | 설명 |
|------|------|
| **npm** (Node Package Manager) | Node.js 모듈 관리 및 배포 패키지 관리자 |
| **npx** (Node Package Execute) | npm을 더 편하게 사용, 패키지를 쉽게 실행 |
| **nvm** (Node Version Manager) | Node.js 버전을 여러 개 관리할 때 편리 |
| **Yarn** | Facebook이 2016년 개발한 JS 런타임 환경용 패키지 시스템 |

**윈도우 패키지 매니저:**
- **Chocolatey (Choco)**: 윈도우 커맨드 라인 패키지 매니저
- **Scoop**: 윈도우용 CLI installer
- **Winget**: Windows 10/11 애플리케이션 관리 도구
- **WingetUI**: winget + chocolatey + scoop를 GUI로 한번에 사용

### VS Code 권장 확장 프로그램

- ES7+ React/Redux/React-Native snippets
- Import Cost
- GitLens - Git supercharged
- React Native Tools
- Stylelint / npm IntelliSense
- JavaScript Debugger (Nightly)
- Reactjs code snippets / VSCode React Refactor
- Babel JavaScript
- **Prettier - Code formatter**
- Headwind / PostCSS Language Support

---

## 12. TypeScript / TSX

- **TSX** = TypeScript + JSX
- JSX에 **타입(Type) 기능**이 추가된 것

---

## 13. Publishing (배포)

```bash
# 1. package.json에 homepage 추가
"homepage": ".",

# 2. 빌드
npm run build

# 3. serve 설치 (최초 1회)
npm install -g serve

# 4. 로컬에서 빌드 결과 실행
serve -s build
```

- `serve -s build`: serve라는 웹서버를 생성해서 `build` 폴더를 document root로 실행

**용어 정리:**
- **Release**: 같은 제품을 새롭게 만드는 것 (예: 새로운 버전 배포, 새로운 IP 부여)
- **Deploy**: 프로그램 등을 서버에 설치하여 서비스를 제공하는 것
- **Distribute**: 제품을 사용자들이 사용할 수 있도록 서비스를 제공하는 것

---

## 14. 다음 주 과제

### Report
- GitHub 디렉토리에 build 파일을 호스팅(정적 사이트 배포)

### 발표 주제: Git & Source Tree

아래 명령어 및 개념 설명 준비:

```
commit (소스)
commit (소스 변경)
branch
merge
commit
commit
GitHub에서 협업하는 방법
VS Code & GitHub 연동
```

### 실습
1. 빌드 파일 생성 (`npm run build`)
2. 빌드 파일을 GitHub에 업로드
3. GitHub Pages로 디렉토리 호스팅
