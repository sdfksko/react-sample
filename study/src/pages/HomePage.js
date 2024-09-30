import React, { useEffect, useState } from 'react'
import Home from '../components/home/Home.js';

const HomePage = () => {

// http 요청(fetch, axios(다운))
    const[boards,setBoards] = useState([]);
    const[number,setNumber] = useState(0);

    // 빈 배열 한번만 실행
    useEffect(() => {
        // 다운로드 가정
        let data = [
            {id: 1, title: "제목1", content: "내용1"},
            {id: 2, title: "제목2", content: "내용2"},
            {id: 3, title: "제목3", content: "내용3"},
        ];

        // 빈데이터
        setBoards([...data]);
        setNumber(0);
    },[])

  return (
    <div>
        <Home boards={boards} setBoards={setBoards} number={number} setNumber={setNumber}/>
    </div>
  )
}

export default HomePage;