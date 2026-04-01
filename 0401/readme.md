# React 정리 - Component & Props

---

# 1️⃣ Component

## 1. Component 개념
- **Component**는 UI를 구성하는 **독립적인 코드 블록**이다.
- HTML, CSS, JavaScript, **state**, **props** 등을 포함하여 **재사용 가능한 UI**를 만든다.
- **입력(props)을 받아 출력(React Element)을 생성하는 구조**를 가진다.
- React는 **Component 기반 구조(Component-based architecture)** 를 사용한다.

### 핵심 개념
- 웹페이지는 **컴포넌트들을 조합하여 만든다.**
- 컴포넌트는 **퍼즐 조각처럼 UI를 구성하는 단위**이다.
- 실제 DOM에서는 **HTML 태그 → DOM Node**로 연결된다.

```
입력(props) → Component → 출력(React Element)
```

### 일반 함수와 비교

| 구분 | 입력 | 출력 |
|---|---|---|
| 일반 함수 | parameter | return |
| React Component | props | React Element |

---

## 2. Component 만드는 방법

### 1️⃣ Class Component
- **class 문법을 사용하여 만든 컴포넌트**

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

---

### 2️⃣ Function Component
- **함수 형태로 만든 컴포넌트**
- React에서는 **Component = Function** 으로 생각할 수 있다.
- **Pure Function처럼 동작해야 한다.**

```javascript
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

---

## 3. Component 특징

✔ **컴포넌트 이름은 반드시 대문자로 시작 (PascalCase)**  

```
MyComponent
UserProfile
ProductCard
```

✔ **HTML 태그는 소문자로 시작**

```
div
span
button
```

---

# 2️⃣ Props

## 1. Props 개념

- **Props = Property (속성)**
- **상위 컴포넌트가 하위 컴포넌트에 데이터를 전달할 때 사용**
- **읽기 전용(Read-only)** → 직접 수정할 수 없다.
- React 컴포넌트는 **Props를 통해 서로 데이터를 전달하며 통신**한다.
- 즉, **부모 컴포넌트가 자식 컴포넌트에게 전달한 데이터**이다.

---

## 2. Props 사용 예시

```javascript
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

사용

```javascript
<Welcome name="React" />
```

---

## 3. Props 자료형 지정 (PropTypes)

Props의 **자료형을 미리 지정할 수 있다.**

```javascript
Main.propTypes = {
  name: PropTypes.string
}
```

의미

```
name props는 문자열(String)이어야 한다
```

---

## 4. Props 기본값 설정

Props가 전달되지 않았을 때 사용할 **기본값(default)** 설정 가능

```javascript
Main.defaultProps = {
  name: "디폴트"
}
```

---

## 5. Props 필수값 설정

Props가 반드시 전달되어야 할 때 사용

```javascript
Main.propTypes = {
  name: PropTypes.string.isRequired
}
```

의미

```
name props는 반드시 전달되어야 한다.
전달하지 않으면 오류 발생
```

---

# 🔑 핵심 요약

## Component
- UI를 구성하는 **재사용 가능한 코드 블록**
- **props 입력 → React Element 출력**
- **Class Component / Function Component** 방식 존재

## Props
- **부모 → 자식 데이터 전달 방식**
- **읽기 전용**
- **자료형 검사 및 기본값 설정 가능**
