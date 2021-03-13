import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";

const App = () => {
  let nav = useRef(null);
  console.log(nav);

  const [navbar, setNavbar] = useState(false);

  function changeBackground() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  React.useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <HeaderStyled>
      <div className={navbar ? "active" : "desktop-header"}>
        <div className="inner-desktop-header">
          <div className="logo">
            <img src="/bolt.png" />
          </div>

          <ul className="nav-bar">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Analysis</a>
            </li>
            <li>
              <a href="#">Our Works</a>
            </li>
            <li>
              <a href="#">Our Blogs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={navbar ? "activeMobile" : "mobile-header"}>
        <div className="inner-mobile-header">
          <img className="logo" src="/bolt.png" />
          <img
            className="hamburger"
            onClick={() => (nav.current.style.transform = "translateX(0)")}
            src="https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg"
          />
        </div>
        <nav ref={nav}>
          <img
            className="close"
            onClick={() => (nav.current.style.transform = "translateX(100%)")}
            src="https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg"
          />
          <a href="/">home</a>
          <a href="/about">about</a>
        </nav>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  z-index: 10000;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  .desktop-header {
    position: sticky;
    top: 0;
    height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid grey;
    justify-content: center;
    background: transparent;
  }
  .active {
    transition: 0.5s ease-out;
    background: #0c0f16;
    height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid grey;
    justify-content: center;
  }
  .inner-desktop-header {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
  .logo {
    width: 10rem;
    margin: auto 0px;
    text-align: start;
    img {
      cursor: pointer;
      width: 2.5rem;
      object-fit: contain;
    }
  }
  .hamburger,
  .close {
    cursor: pointer;
    width: 50px;
    object-fit: contain;
  }

  .close {
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .nav-bar {
    display: flex;
    list-style: none;
    li {
      margin: 0 0 0 40px;
      a {
        font-family: "Poppins", sans-serif;
        font-size: 13px;
        font-weight: 400;
        opacity: 0.9;
      }
      :nth-child(8) {
        border-left: 1px solid grey;
        a {
          padding-left: 30px;
        }
        a:hover {
          color: grey;
        }
      }
    }
  }
  .mobile-header {
    display: none;
    justify-content: center;
    border-bottom: 1px solid grey;
    align-items: center;
    height: 70px;
  }
  .activeMobile {
    display: none;
    background: #0c0f16;
    transition: 0.5s ease-out;
    height: 5rem;
    border-bottom: 1px solid grey;
    justify-content: center;
  }

  .inner-mobile-header {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  nav {
    display: flex;
    flex-direction: column;
    z-index: 100;
    position: absolute;
    background: #000;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    padding: 20vh 0 0 20px;
    transform: translateX(100%);
    transition: 0.5s ease-out;

    a {
      padding: 1rem 0;
      border-top: 1px solid grey;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 451;
      opacity: 0.7;
    }
  }
  @media (max-width: 1025px) and (min-width: 769px) {
    .inner-desktop-header {
      width: 100%;
    }
    .logo {
      width: 20%;
      margin-left: 5%;
    }
    .nav-bar {
      width: 100%;
      justify-content: space-around;
      li {
        margin: 0;
        :nth-child(8) {
          border-left: none;
          a {
            padding: 10px 25px;
            border-left: 1px solid #fff;
          }
          a:hover {
            color: grey;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .active {
      display: none;
    }
    .desktop-header {
      display: none;
    }
    .mobile-header {
      display: flex;
    }

    .activeMobile {
      display: flex;
    }

    .logo {
      width: 3rem;
    }
  }
`;

export default App;
