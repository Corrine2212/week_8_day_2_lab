import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.div`
  background: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  margin-bottom: 30px;

`
const NavLi = styled.div`
  display: flex;
  
`
const Li = styled.li`
  padding: 0px 10px;
`

const NavBar = () => {
  return (
    <Nav>
      <h2><b>Swiftie Merch</b></h2>
      <NavLi>
        <Li>
          <Link to='/'>Home</Link>
        </Li>
        <Li>
          <Link to='/basket'>Basket</Link>
        </Li>
      </NavLi>
    </Nav>
  );
}

export default NavBar;