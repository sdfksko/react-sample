import styled from 'styled-components'
import axios from 'axios';
import {useState} from 'react';
import Session from 'react-session-api';

const StyledBoardMain = styled.main`
    * {
        margin: 0px;
        padding: 0px;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none
    }
   * {
       margin: 0px;
       padding: 0px;
   }

   ul, ol {
       list-style: none;
   }

   a {
       text-decoration: none
   }

   .container {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       margin-top: 20px;
   }

   .container .form-box {
       margin-top: 20px;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
   }

   .container .title{
       display: flex;
       justify-content: center;
       align-items: center;
       margin-bottom: 15px;
   }

   .container .title h1 {
       font-size: 25px;
   }

   .container .title .first {
       width: 350px;
       height: 40px;
   }

   .container .content{
       display: flex;
       justify-content: center;
       align-items: center;
   }

   .container .content .second{
       width: 350px;
       height: 100px;
   }

   .container .content h1 {
       font-size: 25px;
   }

   .registration-btn {
       width: 90px;
       height: 40px;
       margin: 20px 0 20px 0;
       background-color: #333;
       color: white;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
    }

    .container .form-box {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .container .title{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    }

    .container .title h1 {
        font-size: 25px;
    }

    .container .title .first {
        width: 350px;
        height: 40px;
    }

    .container .content{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container .content .second{
        width: 350px;
        height: 100px;
    }

    .container .content h1 {
        font-size: 25px;
    }

    .registration-btn {
        width: 90px;
        height: 40px;
        margin: 20px 0 20px 0;
        background-color: #333;
        color: white;
    }
`;

function BoardNew() {

    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");

    const userData = Session.get("userData");

    function newBoard() {
        axios.post("/newBoard")
    }


    return(
        <StyledBoardMain>
            <div class="container">
                <h1>게시글 등록하기</h1>
                <div class="form-box">
                    <div class="title">
                        <h1>제목</h1>
                        <input class="first" type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div class="content">
                        <h1>내용</h1>
                        <textarea class="second" name="content" onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <button class="registration-btn" type="submit" onClick={newBoard}>등록하기</button>
                </div>
            </div>
        </StyledBoardMain>
    )
}

export default BoardNew;

