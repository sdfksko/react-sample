import styled from 'styled-components';
import {useState, useEffect} from 'react';
import axios from 'axios';

const StyledDiv = styled.div`

    font-family: 'Noto Sans', sans-serif;

    .main-container {
        margin: 0 auto;
        background-color: #efe7da;
        padding: 20px;
    }

    .filter-container {
        display :flex;
        justify-content: flex-end;
        align-items: center;
        gap: 30px; /* 필터 항목들 사이의 간격 */
        padding: 20px 0;
        margin: 20px 0;
        background-color: #fff;;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    #filter-form {
        max-width:1700px;
        display:flex;
        flex-wrap: wrap;
        padding:0 20px;
        gap:15px;
    }

    .filter-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .filter-group label {
        margin-bottom: 5px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }

    .filter-group select {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 18px;
        background-color: #f9f9f9;
        cursor: pointer;
        transition: border-color 0.3s ease;
    }

    .filter-group select:hover {
        border-color: #795548;
    }

    /* 필터 적용 버튼 */
    button[type="submit"] {
        padding: 10px 20px;
        font-size: 18px;
        background-color: #795548;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .filter-container button:hover {
        background-color: #5d4037;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .item-container {
        max-width: 1900px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        flex-wrap: wrap;
        gap: 3.2rem;
        padding: 20px 0;
    }

    .item-card {
        background-color: white;
        width: 330px;
        height: 500px;
        border: 1px solid #ddd;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
    }

    .item-card:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .item-image-container {
        width: 100%;
        height: 300px; /* 원하는 고정 높이를 지정 */
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .item-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .item-details {
        padding: 15px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .item-details h3 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .item-details p {
        font-size: 18px;
        color: #888;
    }

    .detail-link {
        color: black;
        text-decoration: none;
    }

    .detail-link:hover {
        text-decoration: underline;
    }

    .pagination {
        display: flex;
        justify-content: center;
        padding: 20px 0;
        margin-top: 20px;
    }

    .pagination a {
        margin: 0 10px;
        padding: 10px 15px;
        background-color: #795548;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    .pagination a:hover {
        background-color: #5d4037;
    }

    .pagination a[aria-disabled="true"] {
        background-color: #ddd;
        pointer-events: none;
        cursor: default;
    }
`;


function Main() {

    const userData = JSON.parse(sessionStorage.getItem("userData"))

    const[nestcoItems, setNestcoItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/nestCoData')
        .then(function (response){
            console.log(response.data.content);
            setNestcoItems(response.data.content)
        })
        .catch(function (error) {
            alert('데이터 조회에 실패하였습니다.');
        });
    }, []);

    return(
        <StyledDiv>
            <div className="main-container">
                <div className="filter-container">
                    <form id="filter-form">
                        <div className="filter-group">
                            <label for="sortOrder">정렬 기준</label>
                            <select id="sortOrder" name="sortOrder">
                                <option value="latest" >최신 등록순</option>
                                <option value="oldest" >오래된 순</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label for="status">거래 상태</label>
                            <select id="status" name="status">
                                <option value="all">전체</option>
                                <option value="available" >거래 가능</option>
                                <option value="sold" >거래 완료</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label for="location">지역</label>
                            <select id="location" name="location">
                                <option value="all">전체 지역</option>
                                <option value="서울" >서울</option>
                                <option value="부산" >부산</option>
                                <option value="인천" >인천</option>
                                <option value="대구" >대구</option>
                                <option value="대전" >대전</option>
                                <option value="광주" >광주</option>
                                <option value="울산" >울산</option>
                                <option value="세종" >세종</option>
                                <option value="경기" >경기</option>
                                <option value="강원" >강원</option>
                                <option value="충북" >충북</option>
                                <option value="충남" >충남</option>
                                <option value="전북" >전북</option>
                                <option value="전남" >전남</option>
                                <option value="경북" >경북</option>
                                <option value="경남" >경남</option>
                                <option value="제주" >제주</option>
                            </select>
                        </div>
                        <button type="submit">필터 적용</button>
                    </form>
                </div>
                <div className="item-container">
                    <div className="item-card">
                        <a href="/items/{{id}}" className="detail-link">
                            <div className="item-image-container">
                            <img src="imagePath" alt="상품 이미지" className="item-image" />
                            </div>
                            <div className="item-details">
                                <h3>nestcoItem.titl</h3>
                                <p>nestcoItem.content</p>
                                <p>timeSincePosted</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="pagination">
                    <a href="?page={{previousPage}}&searchQuery={{searchQuery}}&sortOrder={{sortOrder}}&status={{status}}&location={{location}}">이전</a>
                   <a href="?page={{nextPage}}&searchQuery={{searchQuery}}&sortOrder={{sortOrder}}&status={{status}}&location={{location}}">다음</a>
                </div>
            </div>
        </StyledDiv>
    )
}

export default Main;