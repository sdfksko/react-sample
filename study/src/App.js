// import React, { createRef, useState } from 'react';
// import {useEffect} from 'react';
// import {useMemo} from 'react';
// import {useRef} from 'react';
// import {Title} from './Mycss.js';
// import LoginPage from './pages/LoginPage.js';
// import Header from './components/Header.js';
// import Footer from './components/Footer.js';
// import HomePage from './pages/HomePage.js';
// import LoginPage from './pages/LoginPage.js';
import './App.css';
// import { Route, Routes } from 'react-router-dom';


// useState
// let a = 10;
// const b = 20;

// function App() {
//   let c;
//   console.log(1,c);
//   return (
//     <div>
//       <div>값: {a === 10 ? '10입니다.' : '10이 아닙니다.'}</div>
//       <h1>해딩태그 {b === 20 && '20입니다.'}</h1>
//       <hr />W
//     </div>
//   );
// }

// function App() {
//   // let number = 1;
//   const [number, setNumber] = useState(2); // React안에 hooks 라이브러리 상태값이 됨.

//   const add = () => {
//     setNumber(number + 1); // 리액트한테 number 값 변경할께 라고 요청
//     console.log('add', number);
//   }

//   return (
//     <div>
//       < h1>숫자: {number}</h1>
//       <button onClick={add}>더하기</button>
//     </div>
//   );
// }


// useMemo
// function App() {
//   console.log('App 실행됨');
//   const [users, setUsers] = useState([
//     {id:1, name:"홍길동"},
//     {id:2, name:"임꺽정"},
//     {id:3, name:"장보고"},
//     {id:4, name:"코스"}
//   ]);

//   const download = function() {
//     let sample = [
//       {id:1, name:"홍길동"},
//       {id:2, name:"임꺽정"},
//       {id:3, name:"장보고"},
//       {id:4, name:"코스"}
//     ]

//     setUsers(sample) // 래퍼런스가 변경되야 실행됨
//   }

//   return (
//     <div>
//       <button onClick={download}> 다운로드</button>
//       {users.map(u=><h1>{u.id}, {u.name}</h1>)}
//     </div>
//   );
// }

// function App() {
//   const[list, setList] = useState([1, 2, 3, 4]);
//   const[str, setStr] = usetState("합계:");

//   const getAddResult = () => {
//     let sum = 0;
//     list.forEach((i) => (sum += i));
//     console.log('sum 함수 실행됨: ', sum);
//     return sum;
//   }

//   const addResult = useMemo(() => getAddResult(), [list]);

//   return (
//     <div>
//       <button
//       onClick = {() => {
//         setStr("안녕");
//       }}
//       >
//         문자변경
//       </button>
//       <button
//         onClick = {() => {
//           setList([...list, 10]);
//         }}
//         >
//           리스트값추가
//         </button>
//         <div>
//           {list.map((i) => (
//             <h1>{i}</h1>
//           ))}
//         </div>
//     </div>
//   );
// }


// useRef
// function App() {
//   const myRef = useRef(null);

  
//   const [list, setList] = useState([
//     {id: 1, name: "길동"},
//     {id: 2, name: "꺽정"},
//   ]);

//   const myRefs = Array.from({length: list.length}).map(() => createRef());

//   return (
//     <div>
//       <button
//         onClick={() => {
//           console.log(myRef);
//           // myRef.current.style.backgroundColor = 'red';
//           myRefs[1].current.style.backgroundColor = 'red';
//         }}
//       >
//         색변경
//       </button>
//       <div ref={myRef}>박스</div>
//       {list.map((user, index) => (
//         <h1 ref={myRefs[index]}>{user.name}</h1>
//       ))}
//     </div>
//   );
// }


// components styled
// route
// function App() {
//   return(
//     <div>
//       <Header />
//       <Routes>
//       <Route path="/" exact={true} element={<HomePage />} />
//       <Route path="/login/:id" exact={true} element={<LoginPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

function App() {
  return (
    <div>안녕</div>
  )
}

export default App;
