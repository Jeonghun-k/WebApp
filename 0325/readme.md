# 0325레포트 - 자기 포트폴리오 웹사이트 제작 후 vercel 호스팅

## 사이트 주소 : https://portfolio-web-app-weld-nine.vercel.app/


# Binary_clock
## 사이트 주소 : https://jeonghun-k.github.io/WebApp/0325/public/binary_clock

# React 기본 개념 정리

## 1. 웹페이지 렌더링 기본 과정

웹 브라우저가 화면을 그리는 기본 흐름

```
HTML 문서 요청 → 서버에서 HTML 응답 → 브라우저가 DOM 트리 생성 → 화면 렌더링
```

### 과정 설명

1. 브라우저가 서버에 **HTML 문서 요청**
2. 서버가 **HTML 문서 응답**
3. 브라우저가 HTML을 분석하여 **DOM 트리 생성**
4. DOM 트리를 기반으로 **화면 렌더링**

### DOM 트리

- DOM 트리를 구성하는 노드는 **HTML 태그**

예시

```html
<html>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

DOM 트리 구조

```
html
 └─ body
     └─ h1
```

---

# 2. React 프로젝트 생성

React 프로젝트 생성 명령어

```bash
npm create-react-app my-app
```

프로젝트가 생성되면 기본 구조가 만들어진다.

---

# 3. React 주요 파일 구조

## 1️⃣ index.html

### 역할

- **웹페이지의 최초 진입점**
- React 앱이 렌더링될 **HTML 템플릿**

### 특징

- `index.js`가 실행되어 결과가 이 HTML에 표시됨

예시

```html
<div id="root"></div>
```

---

## 2️⃣ index.js

### 역할

- **React 앱의 시작점**
- `App.js` 컴포넌트를 `root`에 렌더링

구조 예시

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

---

## 3️⃣ App.js

### 역할

- **실제 UI 컴포넌트를 정의하는 파일**
- 여러 컴포넌트를 만들어 화면을 구성

예시

```javascript
function App() {
  return <h1>Hello React</h1>;
}

export default App;
```

---

# 4. React 실행 방식

React 앱은 **Hot Reload 방식**으로 동작한다.

### 특징

- 코드 수정 시
- **브라우저 새로고침 없이**
- **자동으로 화면이 업데이트됨**

---

# 5. Rendering Element

## Element

### 정의

Element는 **React 앱을 구성하는 가장 작은 UI 단위**

### 특징

| 구분 | 설명 |
|-----|-----|
| 역할 | 화면을 구성하는 최소 단위 |
| 형태 | 객체(Object) |
| 위치 | Virtual DOM |
| 실제 DOM | 아님 |

즉

```
React Element → Virtual DOM 구성 요소
HTML Tag → 실제 DOM 구성 요소
```

---

## Virtual DOM

React는 **가상 DOM (Virtual DOM)** 을 사용한다.

### Virtual DOM 특징

- 메모리 상에 존재
- 실제 DOM의 복사 구조
- 변경 사항 비교에 사용

---

# 6. JSX

JSX는 **JavaScript 안에서 HTML처럼 작성하는 문법**

예시

```javascript
const element = <h1>Hello React</h1>;
```

JSX는 실행 시

```
Babel
```

을 통해

```
JavaScript 코드
```

로 변환된다.

---

# 7. Component

## 정의

Component는

> Element를 생성하고 관리하는 **함수 또는 클래스**

즉

```
컴포넌트 = UI를 만드는 코드 단위
```

---

## 특징

- 재사용 가능
- 독립적인 기능 수행
- 여러 Element를 묶은 UI 단위

---

## Component 종류

### 1️⃣ Class Component (과거 방식)

클래스를 사용해서 컴포넌트를 생성

```javascript
class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

현재는 거의 사용하지 않는다.

---

### 2️⃣ Function Component (현재 방식)

함수를 사용해서 컴포넌트를 생성

```javascript
function App() {
  return <h1>Hello</h1>;
}
```

현재 **React에서 표준 방식**

---

# 8. Element 특징

React Element는 **불변(Immutable)** 이다.

즉

```
생성 후
속성 변경 ❌
자식 변경 ❌
```

변경하려면

```
새로운 Element 생성 → 교체
```

---

# 9. React Rendering 과정

## 1️⃣ 초기 렌더링

1. 컴포넌트 실행
2. Virtual DOM 생성
3. Virtual DOM → 실제 DOM 생성
4. 화면 렌더링

---

## 2️⃣ 상태 변화 발생

예

```
state 변경
props 변경
```

그러면

```
컴포넌트 다시 실행
```

---

## 3️⃣ Diffing (비교)

React는

```
이전 Virtual DOM
vs
새로운 Virtual DOM
```

을 비교한다.

이 과정을

```
Diffing
```

이라고 한다.

---

## 4️⃣ 업데이트

변경된 부분만

```
Actual DOM
```

에 반영한다.

---

# 10. React DOM Node

React 앱의 시작점

```html
<div id="root"></div>
```

여기에 React가 UI를 렌더링한다.

---

# 11. React가 빠른 이유

React가 빠른 이유

```
전체 DOM을 다시 그리지 않는다
```

대신

```
Virtual DOM 비교
→ 변경된 부분만 업데이트
```

그래서

```
성능이 매우 빠르다
```

---

# 핵심 정리

| 개념 | 설명 |
|-----|-----|
| DOM | 브라우저가 만든 HTML 구조 |
| Virtual DOM | React가 사용하는 가상 DOM |
| Element | React UI 최소 단위 |
| Component | Element를 만드는 함수 |
| JSX | JS 안에서 HTML처럼 작성하는 문법 |
| Diffing | Virtual DOM 비교 과정 |
| Root | React 앱 시작 지점 |
