import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styled-components => js파일과 css파일 관리!!!
 const StyledHeaButtoderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: blue;
 `;

const Header = () => {
  return (
    <StyledHeaButtoderDiv>
        <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/login/10">로그인</Link>
            </li>
        </ul>
    </StyledHeaButtoderDiv>
  )
}

export default Header;
