---

## Component

1. component
    1. ui를 구성하는 독립적인 코드 블럭
    2. html,css,javascript,상태(state)및 속성(props)을 포함하여 재사용 가능 ui를 만든다
    3. 입력(props)를 받아 출력(element)하는 역할
    4. 리액트는 component 기반의 구조라는 특징을 가지고있다.
    5. 웹페이지를 만드는 퍼즐 조각 ⇒ 실제 사용은 컴포넌트를 만들어서 화면 제작 ⇒ 컴포넌트는 사실 html태그이고, 돔의 각각의 노드들 이다.
    6. 리엑트에서 입력 = props / 출력 = react Element
    7. 일반 함수 = parameter / 출력 = return
    8. parameter = props / ruturn  = react Element
    9. 만드는 방법
        1. class component
            1. class를 사용해서 만들어진 component다
        2. function component
            1. 특징
                1. pure 함수 같은 역할을 해야한다
                2. component = function이라 생각한다
    10. 특징
        1. component이름은 항상 대문자로 시작 (파스칼 표기)
        2. 리액트 태그 이름은 소문자로 시작

## Props

1. Props  = 프로퍼티(속성)
    1. 상위 컴포넌트가 하위 컴포넌트에 값을 전달 할 때 사용한다
    2. 수정할 수 없다 = 읽기 전용
    3. react컴포넌트는 props를 이용해서 서로 통신
    4. 부모컴포넌트가 자식 컴포넌트에게 물려준 데이터를 의미한다.
2. Props 자료형
    1. 자료형을 미리 선언할 수있다.
        
        Main.propTypes = {
        name: PropTypes.string // name의 자료형은 문자열임을 지정해주고있다.
        }
        
    2. 기본값 설정 가능하다
        
        // 프로퍼티 기본값 지정
        Main.defaultProps = {
        name: '디폴트'
        }
        
    3. 필수값을 설정해줘야 된다. → 안하면 오류남
        
        // 프로퍼티 타입 지정 및 필수값 설정
        Main.propTypes = {
        name: PropTypes.string.isRequired,
        }
        
    4. pdf 24,25p해보기
    5.
