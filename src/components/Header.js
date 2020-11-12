import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";

const Header = () => (
  <Nav>
    <NavLink to='/'>
      eXplorer
    </NavLink>
    <Bars />
    <NavMenu>
      {menuData.map((item, i) => (
        <NavLink to={`${item.link}`} key={i}>{item.title}</NavLink>
      ))}
    </NavMenu>
    <NavButton>
      <Button primary="true" round="true" to='/trips'>Flight</Button>
    </NavButton>
  </Nav>
)



export default Header;

const Nav = styled.nav`
  background: transparent;
  color: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px)/2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
   display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%); 
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`