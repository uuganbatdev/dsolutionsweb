import React, { useState } from "react";
import styled from "styled-components";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <Styled>
      <nav>
        <div className="logo">
          <img src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-9/104666224_142549167446902_1700319279236480740_o.png?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=w-QLp4spvBcAX-w5wJL&_nc_oc=AQlGZ3b6SnQOO5zSq9l71_BNxwH6cmtWFloi2y8AgmPNC5xBEsLdDdY4xs8s4EJ1DiE&_nc_ht=scontent.fuln2-1.fna&oh=c6baf9ee485d3e3f2b1f46b05524035c&oe=606FAB68" />{" "}
        </div>
        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li className="homeTo">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Analysis</a>
          </li>
          <li>
            <a href="">Our Works</a>
          </li>
          <li>
            <a href="">Our Blogs</a>
          </li>
          <li>
            <a href="">Footer</a>
          </li>
          <li className="aboutTo">
            <a href="/about">About</a>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger">
          <img src="https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg" />
        </i>
      </nav>
    </Styled>
  );
}

const Styled = styled.div`
  width: 100vw;

  img {
    width: 61px;
  }
  li {
    list-style: none;
    z-index: 1;
  }

  .aboutTo {
    border-left: 1px solid #fff;
    a {
      padding-left: 10px;
    }
    a:hover {
      color: rgb(188, 194, 189);
    }
  }

  a {
    text-decoration: none;
  }

  nav {
    display: flex;
    height: 5rem;
    align-items: center;
    font-family: "Poppins", sans-serif;
    background: #0c0f16;
    border-bottom: 1px solid rgb(102, 112, 130);

    .logo {
      width: 30%;
      display: block;
      text-align: start;
      img {
        width: 2.5rem;
        border-radius: 50px;
        margin-left: 15%;
      }
    }

    .nav-links {
      display: flex;
      justify-content: flex-end;
      width: 60%;

      a {
        padding: 0px 20px;
        font-size: 12px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
      }
    }

    .burger {
      font-size: 25px;
      display: none;
      margin-left: 10rem;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    nav .burger {
      display: block;
      z-index: 100;
      padding-left: 30%;
    }
    li {
      display: none;
    }
    nav .nav-links {
      position: absolute;
      display: block;
      top: -15px;
      left: 0;
      height: 100vh;
      background: rgb(48, 51, 59);
      width: 100%;
      z-index: 100;
      transform: translateX(-1000px);
      transition: 0.5s ease-in-out;
      padding-top: 100px;
    }

    .homeTo {
      display: block;
      margin-right: 15%;
      border-top: 1px solid #ccc;
      text-align: start;
      a {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 451;
        padding: 1rem;
      }
    }
    .aboutTo {
      display: block;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin-right: 15%;
      text-align: start;
      border-left: none;
      a {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 450;
        padding: 1rem;
      }
    }

    nav .nav-links li {
      margin-right: 15%;

      text-align: start;
      border-left: none;
      a {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 450;
        padding: 1rem;
      }
    }
    /* nav .nav-links li:last-of-type {
      border-bottom: 0px solid #ccc;
    }

    nav .nav-links a:hover {
      border-bottom: 0px solid #fff;
    } */
  }
`;

export default NavBar;
