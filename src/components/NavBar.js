import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.div`
  background: lightgray;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`

const NavBar = () => {
  return (
    <Nav>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/basket'>Basket</Link>
      </li>
    </Nav>
  );
}

export default NavBar;