import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styled-components => js파일과 css파일 관리!!!
 const StyledHeadButtoderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: blue;
 `;

 const StyledHeadLink = styled(Link)`
    color: red;
 `;

const Header = () => {
  return (
    <StyledHeadButtoderDiv>
        <ul>
            <li>
              <StyledHeadLink to="/">홈</StyledHeadLink>
            </li>
            <li>
              <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
            </li>
        </ul>
    </StyledHeadButtoderDiv>
  )
}

export default Header;
