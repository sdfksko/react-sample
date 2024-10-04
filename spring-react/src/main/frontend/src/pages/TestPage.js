import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Session from 'react-session-api';

function TestPage() {

    const navigate = useNavigate();
    const[userData, setUserData] = useState("");
    const[username, setUsername] = useState("");

    useEffect(() => {
        let userData = Session.get("userData");

        if(userData == null) {
            alert('로그인한 사람만이 들어올 수 있는 페이지입니다.');
            navigate('/loginForm');
        } else {
            setUserData(userData);
            console.log(userData);
        }
    });

    function logout() {
        alert('로그아웃 하였습니다.');
        Session.remove("userData");
        navigate('/loginForm');
    }

    return(
        <div>
            <h1>테스트 페이지 입니다...</h1>
            <button id='logoutButton' onClick={logout}>로그아웃</button>
        </div>
    )
}

export default TestPage;