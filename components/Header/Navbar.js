import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo>
        <img
          src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-9/104666224_142549167446902_1700319279236480740_o.png?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=w-QLp4spvBcAX-w5wJL&_nc_oc=AQlGZ3b6SnQOO5zSq9l71_BNxwH6cmtWFloi2y8AgmPNC5xBEsLdDdY4xs8s4EJ1DiE&_nc_ht=scontent.fuln2-1.fna&oh=6acac4984cc86b76fa8e5f007af479d5&oe=606BB6E8"
          alt="logo"
        />
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Home</MenuLink>
        <MenuLink href="">About Us</MenuLink>
        <MenuLink href="">Services</MenuLink>
        <MenuLink href="">Analysis</MenuLink>
        <MenuLink href="">Our works</MenuLink>
        <MenuLink href="">Testimonials</MenuLink>
        <MenuLink href="">Our Blogs</MenuLink>
        <MenuLink href="">Footer</MenuLink>
        <MenuLink href="/about" id="toAbout">
          About
        </MenuLink>
        <MobileStyled>
          <MobileMenuStyled href="">Home</MobileMenuStyled>
          <MobileMenuStyled href="/about">About</MobileMenuStyled>
        </MobileStyled>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  height: 4rem;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #0c0f16;
  border-bottom: 1px solid #ccc;
`;

const MobileStyled = styled.div`
  display: none;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

const MobileMenuStyled = styled.a`
  padding: 1rem;
  color: #fff;
  border-top: 1px solid #fff;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  height: 100%;
  margin: 1.5rem;
  z-index: 10;

  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 1000px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 1000px) {
    background-color: #23282d;
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "600px" : "0")};
    transition: max-height 0.3s ease-in;
    z-index: 10;
  }
`;

const MenuLink = styled.a`
  color: #fff;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  font-size: 12.5px;
  padding: 1rem 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;

  @media (max-width: 1000px) {
    padding: 1rem 0px;
  }

  &:hover {
    color: #ddd;
  }

  #toAbout {
    border-left: 1px solid #fff;
  }
`;

const Logo = styled.div`
  height: 100%;
  margin-left: 1.5rem;
  margin-bottom: 1.3rem;
  img {
    width: 2rem;
    object-fit: contain;
    border-radius: 50px;
  }
`;

export default Navbar;
