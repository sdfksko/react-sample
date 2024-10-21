import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const StyledAdminDiv = styled.div`
    #logout-btn {
        position: relative;
        top: 10px;
        cursor: pointer;
    }

    .action-buttons {
        display: flex;
        gap: 10px;
    }

    .table th, .table td {
        vertical-align: middle;
    }

    #parentCategorySelect {
        width: 250px;
    }
`;

function AdminCategory() {

    const navigate = useNavigate();

    const[categories, setCategories] = useState([]);

    function logout() {
        sessionStorage.removeItem("userData");
        navigate("/");
    }

    useEffect(() => {
        axios.get("http://localhost:9000/categoryData")
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            alert('데이터 조회 실패');
        });
    }, []);

    return(
        <StyledAdminDiv>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/admin" className="navbar-brand">Admin Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <p id="logout-btn" className="nav-link" onClick={logout}>로그아웃</p>
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
                                    <a className="nav-link active" href="/admin">대시보드</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/members">회원 관리</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/contents">콘텐츠 관리</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/boards">게시글 관리</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/notices">공지사항 관리</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/categories">카테고리 관리</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <br></br>
                        <h1 className="mb-4">카테고리 관리</h1>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="d-flex align-items-center">
                                <label for="parentCategorySelect" className="form-label me-2">카테고리 관리</label>
                                <select id="parentCategorySelect" className="form-select me-2">
                                    <option value="">전체 카테고리</option>
                                        <option value="id">name</option>
                                </select>
                                <button className="btn btn-secondary">검색</button>
                            </div>
                            <div>
                                <button className="btn btn-primary">카테고리 생성</button>
                            </div>
                        </div>
                        <table className="table table-striped" id="categoryTable">
                            <thead>
                            <tr>
                                <th>No.</th>
                                <th>대분류</th>
                                <th>중분류</th>
                                <th>소분류</th>
                                <th>노출 여부</th>
                                <th>순서</th>
                                <th>액션</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr className="category-row" data-category="top" data-id="id"  data-parent-id="">
                                    <td>id</td>
                                    <td>name</td>
                                    <td></td>
                                    <td></td>
                                    <td><span className="badge bg-danger">No</span><span className="badge bg-success">Yes</span></td>
                                    <td>displayOrder</td>
                                    <td>
                                        <form action="/admin/categories/delete/id" method="POST" className="d-inline">
                                            <button type="submit" className="btn btn-danger btn-sm">삭제</button>
                                        </form>
                                    </td>
                                </tr>
                                    <tr className="category-row" data-category="middle" data-parent-id="parentId" data-id="id">
                                        <td>id</td>
                                        <td></td>
                                        <td>name</td>
                                        <td></td>
                                        <td><span className="badge bg-danger">No</span><span className="badge bg-success">Yes</span></td>
                                        <td>displayOrder</td>
                                        <td>
                                            <a href="/admin/categories/edit/id" className="btn btn-warning btn-sm">수정</a>
                                            <form action="/admin/categories/delete/id" method="POST" className="d-inline">
                                                <button type="submit" className="btn btn-danger btn-sm">삭제</button>
                                            </form>
                                        </td>
                                    </tr>
                                    <tr className="category-row" data-category="low" data-parent-id="parentId">
                                        <td>id</td>
                                        <td></td>
                                        <td></td>
                                        <td>name</td>
                                        <td><span className="badge bg-danger">No</span><span className="badge bg-success">Yes</span></td>
                                        <td>displayOrder</td>
                                        <td>
                                            <a href="/admin/categories/edit/id" className="btn btn-warning btn-sm">수정</a>
                                            <form action="/admin/categories/delete/id" method="POST" className="d-inline">
                                                <button type="submit" className="btn btn-danger btn-sm">삭제</button>
                                            </form>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        </StyledAdminDiv>
    )
}

export default AdminCategory;