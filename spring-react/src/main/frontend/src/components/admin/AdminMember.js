import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components'
import {useState, useEffect} from 'react';
import axios from 'axios';

const StyledAdminDiv = styled.div`
    #logout-btn {
        position: relative;
        top: 10px;
    }

    .search {
        display: flex;
    }

    .search button {
        margin-left: 10px;
    }

    .sort-btn {
        display: flex;
        margin: 20px 0 20px 0;
    }

    .sort-btn button {
        margin-right: 10px;
    }

    #select {
        display: inline;
        height: 30px;
    }

    .declaration {
        display: flex;
    }
`;

function AdminMember() {

    const navigate = useNavigate();

    const[members, setMembers] = useState([]);
    const[totalPages, setTotalPages] = useState(0);
    const[pageNumber, setPageNumber]= useState(0);
    const[firstPage, setFirstPage] = useState(0);
    const[lastPage, setLastPage] = useState(0);
    const[currentPageList, setCurrentPageList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/memberData')
        .then(function(response) {
            console.log(response.data);
            setMembers(response.data.content);
            setPageNumber(response.data.pageable.pageNumber)
            setLastPage(response.data.totalPages);

            const pages= [];
            for(let i = 1; i <= response.data.totalPages; i++) {
                pages.push(i)
            }
            setCurrentPageList(pages);
        })
        .catch(function(error) {
            alert('데이터 조회 실패');
        });
    }, [])

    function logout() {
        sessionStorage.removeItem("userData");
        navigate("/");
    }

    function first() {
        axios.get("http://localhost:9000/memberData?page=" + firstPage)
        .then(function(response) {

        })
        .catch(function(error) {

        });
    }

    function last() {
        axios.get("http://localhost:9000/memberData?page=" + (totalPages -1))
        .then(function(response) {

        })
        .catch(function(error) {

        });
    }

    function prev() {
        axios.get("http://localhost:9000/memberData?page=" + )
        .then(function(response) {

        })
        .catch(function(error) {

        });
    }

    function next() {
        axios.get("http://localhost:9000/memberData?page=")
        .then(function(response) {

                })
        .catch(function(error) {

        });
    }

    function current() {
        axios.get("http://localhost:9000/memberData?page=")
        .then(function(response) {

        })
        .catch(function(error) {

        });
    }

    return(
        <StyledAdminDiv>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Admin Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <p id="logout-btn" onClick={logout} class="nav-link">로그아웃</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/admin" className="nav-link active">대시보드</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/admin/members" className="nav-link">회원 관리</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/contents" className="nav-link">콘텐츠 관리</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/boards" className="nav-link">게시글 관리</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/notices" className="nav-link">공지사항 관리</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/admin/categories" className="nav-link">카테고리 관리</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <br></br><br></br>
                        <h1>회원 관리</h1>
                        <div className="search">
                            <input type="text" className="form-control" name="searchKey" placeholder="검색어를 입력하세요..." aria-label="검색어 입력" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">검색</button>
                        </div>
                        <div className="sort-btn">
                            <div>
                                <button type="submit" className="btn btn-secondary btn-lg">가입일 최신순</button>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-secondary btn-lg">가입일 순서로 조회</button>
                                <input type="hidden" value="0" name="idx" />
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>회원 ID</th>
                                <th>이름</th>
                                <th>이메일</th>
                                <th>가입일</th>
                                <th>액션</th>
                            </tr>
                            </thead>
                            <tbody>
                                {members.map((member) => (
                                <tr>
                                    <td> {member.userId} </td>
                                    <td> {member.username} </td>
                                    <td> {member.email} </td>
                                    <td> {member.createDate} </td>
                                    <td>
                                        <div className="declaration">
                                            <button id="select" type="submit" className="btn btn-danger btn-sm"> block </button>
                                            <p>신고 수: declaration</p>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        <nav aria-label="...">
                          <ul className="pagination">
                            <li className="page-item">
                                <p className="page-link" onClick={first}>First</p>
                            </li>
                            <li className="page-item">
                              <p className="page-link" onClick={prev}>Prev</p>
                            </li>
                            {currentPageList.map((currentPage) => (
                            <li className={currentPage == (pageNumber + 1) ? "page-item active" : "page-item"}>
                              <p className="page-link" onClick={current}>{currentPage}</p>
                            </li>
                            ))}
                            <li className="page-item">
                              <p className="page-link" onClick={next}>Next</p>
                            </li>
                            <li className="page-item">
                              <p className="page-link" onClick={last}>Last</p>
                            </li>
                          </ul>
                        </nav>
                    </main>
                </div>
            </div>
        </StyledAdminDiv>
    )
}

export default AdminMember;