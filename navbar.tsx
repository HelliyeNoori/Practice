
import styled from 'styled-components';
import React from "react";
import { FaUser, FaCog, FaBell } from 'react-icons/fa'; // iconhaye karbar. nasb kardam

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>
        <LogoImage src="/frame.png" alt="Logo" />  {/*ax az pooshe image kharej kardam hal shod*/}{/*ax az fihma hereftam too pishe public gozashtam*/} 
        <LogoText>        
        توبیتکس
        </LogoText>
      </Logo>
      <NavLinks>
        <NavLink>بازار توبیتکس</NavLink>
        <NavLink>راهنمای استفاده</NavLink>
        <NavLink>بلاگ</NavLink>
        <NavLink>درباره ما</NavLink>
        <NavLink>تماس با ما</NavLink>
        <NavLink>دستیار هوشمند</NavLink>
      </NavLinks>
      <UserIcons>
        <FaBell size={20} />
        <FaCog size={20} />
        <FaUser size={20} />
      </UserIcons>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  width: 100%;
  height: 95px;
  background: #101828;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  direction: rtl;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 32px;
  height: 37px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-size: 24px;
  font-family: 'Peyda', sans-serif;
  color: #ffffff;
  padding-right: 10px;
  gap: 20px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px;
  width: hug (545px);
  height: hug (20px);
  margin-left: 674.06px;
  margin-top: 10px;
  align-items: center;
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #1f6feb;
  }

  &:hover::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #1f6feb;
  }
`;

const UserIcons = styled.div`
  display: flex;
  gap: 24px;
  color: white;
  margin-left: 51px;

`;
