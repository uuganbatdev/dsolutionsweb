import styled from "@emotion/styled";

function PaboutConnectUsSection() {
  return (
    <PaboutConnectUsSectionStyled>
      <span className="bg">
        <img src="http://avo.smartinnovates.com/demo13/wp-content/uploads/sites/15/2020/10/pattern.png" />
      </span>
      <div className="connect-us">
        <div className="cs-left">
          <p>LET’S TALK</p>
          <h2>
            <span>ABOUT YOUR</span> NEXT PROJECT.
          </h2>
        </div>
        <a href="#">
          <p>GET IN TOUCH</p>
        </a>
      </div>
    </PaboutConnectUsSectionStyled>
  );
}

const PaboutConnectUsSectionStyled = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  padding: 0 100px;
  margin: auto;
  background-color: #11141b;

  .bg {
    width: 100vw;
    height: 100px;
    position: absolute;

    background-repeat: repeat;
    top: 0;
    height: 100%;
    z-index: 1;
  }

  .connect-us {
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 7rem;
    .cs-left {
      width: 75%;
      padding-left: 30px;
      p {
        color: #6ec1e4;
        font-weight: 300;
        letter-spacing: 0.2rem;
        font-size: 12px;
      }
      h2 {
        font-family: "Barlow Condensed", sans-serif;
        font-size: 3.5rem !important;
        letter-spacing: 2px;
        span {
        }
      }
    }
    a {
      position: relative;
      font-family: "Poppins", sans-serif;
      border: 0.15rem solid white;
      padding: 1rem 2rem;
      margin-bottom: 2rem;
      overflow: hidden;
      transition: 0.5s;
      p {
        z-index: 2;
        position: relative;
        font-size: 0.8rem;
        letter-spacing: 0.2rem;
        font-weight: 500;
        margin: 0;
      }
      &::after {
        content: "";
        position: absolute;
        left: -10%;
        top: -160%;
        width: 120%;
        height: 140%;
        background: white;
        transform: rotate(-4deg);
        transition: 0.5s;
      }
      &:hover::after {
        top: -20%;
      }
      &:hover {
        color: #76dab4;
        transition: 0.5s;
      }
    }
  }
  @media screen and (max-width: 1024px) and (min-width: 769px) {
    padding: 0px;
    width: 100vw;
    left: -25px;
    .connect-us {
      position: relative;
      bottom: 0px;
      width: 100vw;
      margin: auto;
    }
    .cs-left {
      p {
        font-size: 16px !important;
      }
      h2 {
        font-size: 50px !important;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    height: auto;
    .connect-us {
      flex-direction: column;
    }
    .cs-left {
      width: 100% !important;
    }
  }
`;
export default PaboutConnectUsSection;
