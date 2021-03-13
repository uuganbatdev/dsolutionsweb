import styled from "styled-components";
import { useEffect } from "react";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  useEffect(() => {
    let header = document.querySelector(".header");
    window.onscroll = () => {
      if (window.scrollY > window.innerHeight / 10) {
        header.classList.add("fill-header");
      } else header.classList.remove("fill-header");
    };
  });
  return (
    <Nav>
      <div className="header">
        <div className="inner-header">
          <div className="headerLogo">
            <img
              src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-9/104666224_142549167446902_1700319279236480740_o.png?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=w-QLp4spvBcAX-w5wJL&_nc_oc=AQlGZ3b6SnQOO5zSq9l71_BNxwH6cmtWFloi2y8AgmPNC5xBEsLdDdY4xs8s4EJ1DiE&_nc_ht=scontent.fuln2-1.fna&oh=6acac4984cc86b76fa8e5f007af479d5&oe=606BB6E8"
              alt="logo"
            />
          </div>
          <HeaderMobile />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: 0;
  z-index: 100000;
  width: 100%;
  background: #11141b;
  .header {
    width: 80%;
    border-bottom: 0.1vw solid rgba(255, 255, 255, 0.3);
    height: 5.2rem;
    top: 0;
    transition: 0.5s;
  }
  .headerLogo {
    display: block;
    width: 10%;
    img {
      margin: auto 0;
      width: 30%;
      object-fit: contain;
      border-radius: 50%;
    }
  }

  .fill-header {
    background: #11141b;
    transition: 0.5s;
  }
  .inner-header {
    z-index: 100000;
    margin: 0 auto;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .toAbouts {
    padding-left: 1px solid red;
    color: red;
  }
`;
export default Header;
