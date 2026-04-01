/* MyComponent.js */
import React from 'react';
const MyComponent = (props) => {
    // app.js(부모)에서 name을 가져와서 props.name에 들어감.
    return (
    <div> 
        {props.name}로 만드는 테스트 페이지
    </div>
    )
    // app.js에서 받아온 props.name을 MyComponent.js의 return 내에서 변경하게된다면 impure function이다
};
export default MyComponent;