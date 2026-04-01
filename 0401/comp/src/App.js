// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'; // 리액트를 구현할 수 있는 플러그인을 연결
import Header from './funcComp/Header';
import Footer from './funcComp/Footer';
import Main from './funcComp/Main';
// JS파일에 외부 파일을 불러오는 것이기 때문에 "import" 키워드를 사용한다.
// 같은 JS파일은 확장자를 사용하지 않는다.

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
