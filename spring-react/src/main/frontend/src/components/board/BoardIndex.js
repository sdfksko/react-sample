import axios from 'axios';
import styled from 'styled-components';
import {useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

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

        .page-link {
            margin-right: 10px;
            cursor: pointer;
        }
    `;

function BoardIndex() {

    const navigate = useNavigate();

    const[searchKey, setSearchKey] = useState("");

    const[boards, setBoards] = useState([]);
    const[totalPages, setTotalPages] = useState(0);
    const[firstPage, setFirstPage] = useState(0);
    const[pageNumber, setPageNumber] = useState(0);
    const[currentPageList, setCurrentPageList] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:9000/boardData')
        .then(function (response) {
            console.log(response.data.content);
            console.log(response.data);
            setBoards(response.data.content);
            setTotalPages(response.data.totalPages);
            setPageNumber(response.data.pageable.pageNumber);

            const pages = [];
            for(let i = 1; i <= response.data.totalPages; i++) {
                pages.push(i);
            }
            setCurrentPageList(pages);
        })
        .catch(function (error) {
            alert('데이터 불러오기 실패');
            console.log(error);
        });

    }, []);

    function first() {
        axios.get('http://localhost:9000/boardData?page=' + firstPage)
        .then(function (response) {
            console.log(response.data);
            setBoards(response.data.content);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function lastPage() {
        axios.get('http://localhost:9000/boardData?page=' + (totalPages - 1))
        .then(function (response) {
            console.log(response.data);
            setBoards(response.data.content);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function prev() {
        axios.get('http://localhost:9000/boardData?page=' + (pageNumber - 1))
        .then(function (response) {
            console.log(response.data);
            setBoards(response.data.content);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function next() {
        axios.get('http://localhost:9000/boardData?page=' + (pageNumber + 1))
        .then(function (response) {
            console.log(response.data);
            setBoards(response.data.content);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function page(currentPage) {
        axios.get('http://localhost:9000/boardData?page=' + (currentPage - 1))
        .then(function (response) {
            console.log(response.data);
            setBoards(response.data.content);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function search() {

    }

    function boardAdd() {
        navigate("/board/new");
    }

    return(
        <StyledBoardMain>
            <h1 className="title">자유 게시판</h1>
            <div className="search-bar">
            <input className="search" type="text" placeholder="검색어를 입력해주세요" name="searchKey" onChange={(e) => setSearchKey(e.target.value)} />
            <button className="search-button" onClick={search} type="submit">검색</button>
            <button className="new-board" onClick={boardAdd} >게시글 등록</button>
            </div>
            <div className="board-container">
                <div className="title">
                    <p>순번</p>
                    <p>제목</p>
                    <p>작성자</p>
                    <p>작성일</p>
                    <p>조회수</p>
                </div>
               {boards.map((board) => (
               <div className="content">
                   <p>{board.id}</p>
                   <p><Link to="/loginForm">{board.title}</Link></p>
                   <p>{board.uploader.nickname}</p>
                   <p>{board.createDate}</p>
                   <p>{board.readCount}</p>
               </div>
               ))}
            </div>
            <div className="box">
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item">
                    <p className="page-link" onClick={first}>First</p>
                </li>
                <li className="page-item">
                  <p className="page-link" onClick={prev}>Previous</p>
                </li>
                {currentPageList.map((currentPage) => (
                <li className="page-item">
                  <p className="page-link" onClick={() => page(currentPage)}>{currentPage}</p>
                </li>
                ))}
                <li className="page-item">
                  <p className="page-link" onClick={next}>Next</p>
                </li>
                <li className="page-item">
                  <p className="page-link" onClick={lastPage}>Last</p>
                </li>
              </ul>
            </nav>
            </div>
        </StyledBoardMain>
    )
}

export default BoardIndex;