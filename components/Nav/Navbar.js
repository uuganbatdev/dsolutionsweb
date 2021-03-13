import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img
          src="https://scontent.fuln2-1.fna.fbcdn.net/v/t1.0-9/104666224_142549167446902_1700319279236480740_o.png?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=w-QLp4spvBcAX-w5wJL&_nc_oc=AQlGZ3b6SnQOO5zSq9l71_BNxwH6cmtWFloi2y8AgmPNC5xBEsLdDdY4xs8s4EJ1DiE&_nc_ht=scontent.fuln2-1.fna&oh=6acac4984cc86b76fa8e5f007af479d5&oe=606BB6E8"
          alt="logo"
        />
      </div>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid #b1adad;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    margin: auto 40px;
    img {
      width: 2.5rem;
      border-radius: 50px;
    }
  }
`;

export default Navbar;
