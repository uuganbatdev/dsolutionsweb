import React, { useState } from "react";
import styled from "styled-components";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <div className="DesktopNavbar">
        <div className="logo">
          <img
            src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-9/104666224_142549167446902_1700319279236480740_o.png?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=w-QLp4spvBcAX-w5wJL&_nc_oc=AQlGZ3b6SnQOO5zSq9l71_BNxwH6cmtWFloi2y8AgmPNC5xBEsLdDdY4xs8s4EJ1DiE&_nc_ht=scontent.fuln2-1.fna&oh=6acac4984cc86b76fa8e5f007af479d5&oe=606BB6E8"
            alt="logo"
          />
        </div>
        <div className="DesktopItems">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Analysis</a>
          <a href="">Our Works</a>
          <a href="">Testimonials</a>
          <a href="">Our Blogs</a>
          <a href="">Footer</a>
          <a href="/about" className="toAbout">
            About
          </a>
        </div>
      </div>
      <div className="MobileNavbar" isOpen={isOpen}>
        <a href="">Home</a>
        <a href="/about">About</a>
      </div>
      <div className="Hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  font-family: "Poppins", sans-serif;
  color: #fff;

  .DesktopNavbar {
    display: block;
    width: 100vw;
    height: 5rem;
    background: red;

    .logo {
      img {
        width: 2rem;
        object-fit: contain;
      }
    }

    .DesktopItems {
      height: 100%;
      display: flex;
      margin: auto 10px;
    }

    @media (max-width: 1000px) {
      display: none;
    }
  }

  .MobileNavbar {
    display: none;
    flex-direction: column;
    background: blue;
    max-height: ${({ isOpen }) => (isOpen ? "600px" : "0")};
    a {
      color: black;
    }
    @media (max-width: 1000px) {
      display: flex;
      background-color: #fff;
      overflow: hidden;
      width: 100%;
      max-height: ${({ isOpen }) => (isOpen ? "600px" : "0")};
      transition: max-height 0.3s ease-in;
      z-index: 10;
    }
  }

  .Hamburger {
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
  }
`;

export default Sidebar;
