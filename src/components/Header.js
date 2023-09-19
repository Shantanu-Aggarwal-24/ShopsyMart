import React from 'react';
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Nav from './Nav';
import { shopsyLogo } from '../images/index';

const Header = () => {
 const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

    return (
        <MainHeader>
            <NavLink to="/">
                <img className='logo' src={shopsyLogo} alt="My_logo_image" />
            </NavLink>
            <Nav />
        </MainHeader>
    )
}



export default Header;