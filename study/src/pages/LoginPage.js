import React from 'react'
import Login from '../components/login/Login.js';
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
  console.log("LoginPage", props);
  const navigate = useNavigate();
  
  
  return (
    <div>
      <button onClick={()=> navigate(-1)}>뒤로가기</button>
      <button onClick={()=> navigate("/")}>해당페이지로가기</button>
      <Login />
    </div>
  )
}

export default LoginPage;