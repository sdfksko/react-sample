import axios from 'axios';
import styled from 'styled-components';

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


        margin: 30px 0 30px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;


        .search-bar {
            display: flex;
        }

        .search {
            width: 300px;
        }

        .search-button {
            width: 50px;
            margin: 0 10px 0 10px;
            background-color: #333;
            color: white;
        }

        .new-board {
            width: 100px;
            background-color: #333;
            color: white;
        }

        .board-container {
            width: 800px;
            margin-top: 30px;
        }

        .board-container .title {
            width: 800px;
            height: 50px;
            display: flex;
            border: 1px solid black;
            margin-bottom: 15px;
        }

        .board-container .title p:first-child {
            width: 10%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid black;
            font-size: 26px;
            font-weight: 900px;
        }

        .board-container .title p:nth-child(2) {
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid black;
            font-size: 26px;
            font-weight: 900px;
        }

        .board-container .title p:nth-child(3) {
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid black;
            font-size: 26px;
            font-weight: 900px;
        }

        .board-container .title p:nth-child(4) {
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid black;
            font-size: 26px;
            font-weight: 900px;
        }

        .board-container .title p:last-child {
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 26px;
            font-weight: 900px;
        }

        .board-container .content {
            display: flex;
            width: 800px;
            height: 50px;
            border-bottom: 1px solid black;
        }

        .board-container .content p:first-child {
            width: 10%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
        }

        .board-container .content p:nth-child(2) {
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
        }

        .board-container .content p:nth-child(3) {
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
        }

        .board-container .content p:nth-child(4) {
            width: 25%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
        }

        .board-container .content p:last-child {
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
        }

        .box {
            margin-top: 20px;
        }
    `;

function BoardIndex() {



    return(
        <StyledBoardMain>
            <h1 class="title">자유 게시판</h1>
            <div class="search-bar">
            <form action="/nestco/board" method="get">
                <input class="search" type="text" placeholder="검색어를 입력해주세요" name="searchKey">
                <button class="search-button" type="submit">검색</button>
            </form>
                <button class="new-board" onclick="newBoard()">게시글 등록</button>
            </div>
            <div class="board-container">
                <div class="title">
                    <p>순번</p>
                    <p>제목</p>
                    <p>작성자</p>
                    <p>작성일</p>
                    <p>조회수</p>
                </div>
                {{#boardList}}
                <div class="content">
                    <p>{{id}}</p>
                    <p><a href="/nestco/board/{{id}}">{{title}}</a></p>
                    <p>{{uploader.nickname}}</p>
                    <p>{{createDate}}</p>
                    <p>{{readCount}}</p>
                </div>
                {{/boardList}}
            </div>
            <div class="box">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {{#hasPrev}}
                            <li class="page-item">
                                <a class="page-link" href="/nestco/board?page={{firstPage}}{{#searchKey}}&searchKey={{searchKey}}{{/searchKey}}" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                        {{/hasPrev}}
                        {{#hasPrev}}
                            <li class="page-item">
                                <a class="page-link" href="/nestco/board?page={{prev}}{{#searchKey}}&searchKey={{searchKey}}{{/searchKey}}" aria-label="Next">
                                <span aria-hidden="true"><</span>
                                </a>
                            </li>
                        {{/hasPrev}}
                        {{#pageNumbers}}
                            <li class="page-item"><a class="page-link" href="/nestco/board?page={{.}}{{#searchKey}}&searchKey={{searchKey}}{{/searchKey}}">{{.}}</a></li>
                        {{/pageNumbers}}
                        {{#hasNext}}
                            <li class="page-item">
                                <a class="page-link" href="/nestco/board?page={{next}}{{#searchKey}}&searchKey={{searchKey}}{{/searchKey}}" aria-label="Next">
                                <span aria-hidden="true">></span>
                                </a>
                            </li>
                        {{/hasNext}}
                        {{#hasNext}}
                            <li class="page-item">
                                <a class="page-link" href="/nestco/board?page={{lastPage}}{{#searchKey}}&searchKey={{searchKey}}{{/searchKey}}" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        {{/hasNext}}
                    </ul>
                </nav>
            </div>
        </StyledBoardMain>
    )
}

export default BoardIndex;