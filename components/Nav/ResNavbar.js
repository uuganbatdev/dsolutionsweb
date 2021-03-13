import React from "react";
import styled from "styled-components";

const DesktopNavbar = ({ open }) => {
  return (
    <ResponsiveStyle open={open}>
      <div className="desktopHeader">
        <ul>
          <li>
            <a href="#">Home</a>
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
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Our Blogs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li className="toAbout">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
      <div className="mobileHeader">
        <ul>
          <li>
            <a href="#">Home</a>
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
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Our Blogs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li className="toAbout">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </ResponsiveStyle>
  );
};

const ResponsiveStyle = styled.div`
  .desktopHeader {
    display: flex;
    margin: auto;
    ul {
      padding: 10px;
      display: flex;
      margin: auto 10px;
      list-style: none;
      li {
        padding: 15px 18px;
        a {
          font-size: 12px;
          font-family: "Poppins", sans-serif;
          font-weight: 400;
        }
      }
      .toAbout {
        border-left: 1px solid #fff;
      }
    }
  }

  .mobileHeader {
    display: none;
    ul {
      flex-flow: column nowrap;
      background-color: #23282d;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      top: 0;
      right: -23px;
      height: 100vh;
      width: 105vw;
      padding: 5.5rem 1rem;
      padding-right: 0px;
      transition: transform 0.3s ease-in-out;
      z-index: 50;
      li {
        padding: 15px 0px;
        color: #fff;
        border-top: 1px solid #c8c8c8;

        z-index: 100;

        a {
          text-transform: uppercase;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 450;
          opacity: 0.8;
          color: #c8c8c8;
          z-index: 1000;
        }
      }
      .toAbout {
        border-bottom: 1px solid #bfbaba;
        border-left: none;
      }
    }
  }

  @media (max-width: 768px) {
    .desktopHeader {
      display: none;
    }

    .mobileHeader {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default DesktopNavbar;
