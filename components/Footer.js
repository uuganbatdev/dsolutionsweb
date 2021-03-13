import styled from "@emotion/styled";

function Footer() {
  return (
    <FooterStyled>
      <div className="tops">
        <span className="coloredbg"></span>
        <div className="left">
          <img src="bolt.png" alt="logo" />
          <div className="company-location">
            <p>
              <span>Email:</span>diverseSolution@diversolutions.com
            </p>
            <p>
              <span>Address:</span>BGD, 3khoroo, 71-81
            </p>
            <p>
              <span>Phone:</span>+976 95941551
            </p>
          </div>
          <h3 className="half-styled">
            <span>FOLLOW</span> US
          </h3>
          <div className="social-accounts">
            <a href="#">
              <img src="facebook.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="instagram.png" alt="instagram" />
            </a>
            <a href="#">
              <img src="linkedin.png" alt="twitter" />
            </a>
          </div>
        </div>
        <div className="rightBack">
          <div className="right">
            <h3 className="half-styled">
              <span>NEWS</span>
              LETTER
            </h3>
            <div className="email-box-container">
              <p>Sign up for subscribe out newsletter!</p>
              <div className="inner-box">
                <input type="email" placeholder="Your Email address" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
            {/*
				<h3 className='half-styled'>
                    <span></span>
                    SOCIAL POSTS
                </h3>
				*/}
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        © 2021, Avo WordPress Theme. Made with passion by ThemesCamp
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  @media only screen and (orientation: portrait) {
    width: 95% !important;
    flex-direction: column;
    p,
    h3 {
      font-size: 2vh !important;
    }
    .coloredbg,
    .left,
    .right,
    .bottom {
      width: 100% !important;
      height: auto !important;
      justify-content: center !important;
      align-items: center !important;
    }
    .left,
    .right {
      align-items: start !important;
      margin: 3vh 0;
    }
    img {
      width: 6vh !important;
      height: 6vh !important;
    }
    .social-accounts {
      a {
        width: 8vh !important;
        height: 8vh !important ;
        img {
          width: 3vh !important;
          height: 3vh !important;
        }
      }
    }
    .half-styled {
      width: 5vh !important;
    }
    .email-box-container {
      width: 90% !important;
      margin-bottom: 5vh !important;
      input,
      button {
        padding: 2vh !important;
        font-size: 2vh !important;
      }
    }
    .bottom {
      height: 8vh !important;
      width: 100vw !important;
      left: -2.5% !important;
      font-size: 2vh !important;
    }
  }
  width: 100vw;
  height: 37rem;
  margin: 0 auto;
  padding: 7rem 0px 8rem 0px;
  display: block;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;

  .tops {
    display: flex;
    width: 100vw;
  }

  p {
    font-size: 16px;
    font-family: "Barlow Condensed", sans-serif;
    letter-spacing: 1px;
  }

  .coloredbg {
    z-index: 1;
    position: absolute;
    background: #151921;
    width: 50vw;
    top: 0;
    right: 50%;
    height: 100%;
  }
  .left {
    h3 {
      margin: 2vw 0;
      font-size: 13px;
      font-family: "Barlow Condensed", sans-serif;
    }
    padding: 0px 6rem;
    width: 50vw;
    z-index: 3;
    display: flex;
    flex-direction: column;
    margin: auto;
    img {
      width: 3rem;
      height: 3rem;
      object-fit: contain;
      margin-bottom: 1vw;
    }
    .company-location {
      span {
        font-weight: bold;
        margin-right: 1vw;
      }
    }
    .social-accounts {
      display: flex;
      img {
        position: absolute;
        top: -6px;
        left: -5px;
        width: 1rem;
        height: 1rem;
        margin: 1rem;
      }
      a {
        position: relative;
        width: 2.5rem;
        height: 2.5rem;
        border: 1px solid rgba(255, 255, 255, 0.01);
        border-radius: 90%;
        background: rgba(255, 255, 255, 0.01);
        margin: 15px;
      }
      .al {
        width: 3rem;
        height: 3rem;
        position: relative;
        margin: 0 1rem;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: #181c24;
          border-radius: 50%;
        }
      }
      .jimg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        width: 1rem;
        height: 1rem;
        object-fit: contain;
      }
    }
  }

  .rightBack {
    width: 50vw;
    background-image: url('url("http://avo.smartinnovates.com/demo13/wp-content/uploads/sites/15/2020/10/pattern.png")');
  }

  .right {
    width: 34rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    h3 {
      margin: 0;
      font-size: 13px;
      font-family: "Barlow Condensed", sans-serif;
    }
    .email-box-container {
      margin: 1.5rem 0 3rem 0;
      p {
        font-size: 12px;
        font-family: "Poppins", sans-serif;
        opacity: 0.9;
        margin-left: 10px;
      }
      .inner-box {
        display: flex;
        * {
          border: none;
        }
        input {
          padding: 1rem;
          background: #14171e;
          color: white;
          width: 70%;
          font-size: 13px;
          font-family: "Poppins", sans-serif;
        }
        button {
          font-size: 12px;
          font-family: "Poppins", sans-serif;
          width: 8rem;
          padding: 0.7rem;
          background: #16191f;
          color: #75dab4;
        }
      }
    }

    h3 {
    }
  }
  .half-styled {
    position: relative;
    font-size: 0.9em;
    letter-spacing: 3px;
    font-size: 0.7em;
    display: inline-block;
    white-space: nowrap;
    width: 2vw;
    flex-grow: 0;
    padding: 0.5vw;
    background: #1f2229;
    z-index: 2;
    font-weight: 270;
  }
  .bottomFooter {
    position: absolute;
    bottom: 0;
    display: block;
    /* background: #13161d; */
    background: red;
    width: 110vw;
    height: 5rem;
    display: grid;
    place-items: center;
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    z-index: 10;
    letter-spacing: 1px;
  }
`;
export default Footer;
