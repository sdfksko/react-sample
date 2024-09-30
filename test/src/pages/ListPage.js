import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyleditemBoxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 10px;
    height: 100px;
    margin: 20px;
`;

function ListPage() {
    
    const[num, setNum] = useState(6);

    const[post,setPost] = useState({
        id: num,
        title: "",
        content: "",
    });

    const[posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts([
          { id: 1, title: '제목1', content: '내용1' },
          { id: 2, title: '제목2', content: '내용2' },
          { id: 3, title: '제목3', content: '내용3' },
          { id: 4, title: '제목4', content: '내용4' },
          { id: 5, title: '제목5', content: '내용5' },
        ]);
      }, []);

    const handleWrite = () => {
        setPosts([...posts, post]);
        setNum(num + 1);
    };

    // const handleChangeTitle = (e) => {
    //     console.log(e);
    //     setPost({title: e.target.value});
    // };

    // const handleChangeContent = (e) => {
    //     console.log(e);
    //     setPost({content: e.target.value});
    // };

    const handleForm = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        // computed property names 문법(키값 동적할당)
        setPost({...post, [e.target.name]: e.target.value,});
        
    };

  return (
    <div>
        <h1>리스트 페이지</h1>
        <form>
            <input type="text" placeholder="제목을 입력하세요" value={post.title} onChange={handleForm} name="title"></input>
            <input type="text" placeholder="내용을 입력하세요" value={post.content} onChange={handleForm} name="content"></input>
            <button type="button" onClick={handleWrite}>글쓰기</button>
        </form>
        <hr/>
        {posts.map((post) => (
            <StyleditemBoxDiv>
            <div>
                번호: {post.id} / 제목: {post.title} / 내용: {post.content}
            </div>
            <button>삭제</button>
            </StyleditemBoxDiv>))}
    </div>
  )
}

export default ListPage;