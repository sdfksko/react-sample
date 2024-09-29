import React from 'react'

// Function 방식
const Home = (props) => {
  // const boards = props.boards;
  // const id = props.id;
  //구조분할 할당
  const{boards, setBoards, number, setNumber} = props;  

  return (
    <div>
        <h1>홈: {number}</h1>
        <button onClick={()=> setNumber(number + 1)}>번호증가</button>
        <h1>홈페이지입니다.</h1>
        <button onClick={() => setBoards([])}>전체삭제</button>
        {boards.map((board) => (
        <h3>
          제목: {board.title}
          내용: {board.content}
          </h3>
        ))}
    </div>
  )
}

export default Home;