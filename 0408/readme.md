---

# 실습 내용 : 
## 1. class Component의 counter.js를 제작 후 setState로 화면에 포현이 가능하도록 함
## 2. class Component로 counter.js를 수정하여 +버튼을 카운트 +1 버튼으로 변경되게 수정하고, index.js를 수정하여 출력을 변경함


# Component State

## 1. State

- **State** : 렌더링 결과물에 영향을 주는 정보 (변수)
- 일반 변수(`const`, `let`)와 다르게 **값이 변경되면 컴포넌트가 다시 렌더링된다.**

### 특징

1. 화면(UI)을 변경하는 데이터 변수
2. **컴포넌트 내부에 존재**
3. 값이 변경되면 **컴포넌트가 재렌더링(Re-rendering)** 된다
4. 데이터 흐름과 관계없는 값을 state로 관리하면 불필요한 재렌더링이 발생하여 **성능이 저하될 수 있다**

### React에서의 State 의미

- **컴포넌트의 상태(State)를 의미**
- 쉽게 말해 **컴포넌트가 가지고 있는 데이터**
- React에서는 **명시적으로 state를 선언해야 사용 가능**

---

# 2. setState

- `setState` : **state 값을 변경하는 함수**
- state를 직접 변경하는 것이 아니라 **setState를 통해 변경해야 한다**

### 특징

1. **비동기적으로 작동한다**
2. 여러 state 변경을 **한 번에 모아서 처리한다 (Batching)**

---

## 예시

```jsx
this.setState({ count: 1 });
console.log(this.state.count);
```

위 코드에서 `console.log`는 **0이 출력될 수 있다.**

### 이유
`setState`가 **비동기적으로 동작하기 때문**

---

# 3. 동기 vs 비동기

## 동기 (Synchronous)

- 작업이 **순서대로 실행**
- 이전 작업이 끝나야 다음 작업 실행

예시

> 일을 시켜놓고 결과 보고를 받은 뒤 다음 일을 시킨다.

---

## 비동기 (Asynchronous)

- 작업이 **동시에 진행될 수 있음**
- 결과를 기다리지 않고 다음 작업 실행 가능

예시

> 일을 시켜놓고 나는 다른 일을 한다.

---

# 4. React의 setState 동작 방식

React는 약 **16ms 동안 state 변경을 모아서 한 번에 렌더링**한다.

### 동작 흐름

```
state 변경 요청
↓
16ms 동안 변경 사항 수집
↓
한 번에 렌더링
```

그래서

- `setState` 직후 `console.log` → 이전 값
- 렌더링 이후 → 변경된 값

---

# 5. Class Component에서 State 생성

Class Component에서는 **constructor에서 state를 초기화**해야 한다.

## 예시

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }
}
```

### 설명

- `constructor`에서 **state를 직접 정의해야 한다**
- 이 시점에서 설정한 값이 **state의 기본값(initial state)** 이 된다

---

# 6. 추가 특징

## 비구조 할당 사용 가능

```jsx
const { date } = this.state;
```

---

## state는 직접 수정하면 안된다

### 잘못된 방식

```jsx
this.state.date = new Date();
```

### 올바른 방식

```jsx
this.setState({ date: new Date() });
```

---

# 핵심 정리

| 개념 | 설명 |
|-----|-----|
| State | 컴포넌트의 상태 데이터 |
| 역할 | 화면(UI)에 영향을 주는 데이터 |
| 특징 | 값이 변경되면 컴포넌트 재렌더링 |
| setState | state 값을 변경하는 함수 |
| 동작 | 비동기 처리 + 변경 사항 batching |
| Class Component | constructor에서 state 초기화 |

---