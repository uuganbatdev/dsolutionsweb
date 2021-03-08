import styled from "@emotion/styled";
import LittleCard from "./LittleCard.js";

function AboutUsSection() {
  return (
    <AboutUsSectionStyled>
      <div className="left">
        <div className="h2-container">
          <div className="spans">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2>ABOUT US</h2>
        </div>
        <h3>We are more than just a digital agency.</h3>
        <p>
          We are AVO. We create award-winning websites, remarkable brands and
          cutting-edge apps.Nullam imperdiet, sem at fringilla lobortis, sem
          nibh fringilla nibh, id gravida mi purus sit amet erat. Ut dictum nisi
          masvitp. Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
          volutpat velit class aptent taciti sociosqu ad litora.
        </p>
        <a href="#">KNOW MORE</a>
      </div>
      <div className="right">
        <div className="image-wrapper">
          <img
            src="https://www.alliedwriters.com/wp-content/uploads/2015/09/article-writing-guide-from-laptop-862x574.jpg"
            alt="laptop"
          />
        </div>
        <div className="long-card">
          <LittleCard img="bolt.png" parag="DESIGN PIXEL" />
          <LittleCard img="bolt.png" parag="PIXEL DESIGN" />
          <LittleCard img="bolt.png" parag="PIXEL DESIGN" />
        </div>
      </div>
    </AboutUsSectionStyled>
  );
}

const AboutUsSectionStyled = styled.div`
  @media only screen and (orientation: portrait) {
    flex-direction: column;
    width: 95% !important;
    h2 {
      text-align: center;
      font-size: 2em !important;
    }
    .left,
    .right {
      width: 100% !important;
    }
    a {
      padding: 1vh !important;
      width: 8vh !important;
    }
    .left {
      align-items: start !important;
      p {
        width: 100% !important;
        line-height: normal !important;
      }
    }
    .right {
      margin: 5vh 0 0 0 !important;
      .image-wrapper {
        img {
          height: 70% !important;
          border-radius: 2vh !important;
        }
      }
      .long-card {
        border-radius: 2vh !important;
        left: auto !important;
        width: 90% !important;
        top: 50% !important;
        padding: 3vh 0 !important;
        .long-card-left,
        .long-card-right {
          padding: 2vh 0 !important;
          width: 100% !important;
        }
        .long-card-right {
          border-top: 0.1vh solid #75dab4 !important;
        }
      }
    }
  }
  width: 80%;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  .left {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    font-size: 1.9rem;
    p {
      width: 95%;
      line-height: 1.8rem;
      font-size: 1rem;
    }
    .h2-container {
      position: relative;
      display: flex;
      align-items: center;
      h2 {
        font-family: "Barlow Condensed", sans-serif;
        font-size: 1rem;
        margin-bottom: 0;
        font-weight: 300;
        padding-left: 5px;
      }
      .spans {
        position: relative;
        width: 15px;
        height: 100%;
        span {
          position: absolute;
          border-radius: 50%;
          display: inline-block;
          width: 4px;
          height: 4px;
          background: #67c1a1;
          left: 0rem;
          bottom: 2px;
          &:nth-of-type(2) {
            left: 6px;
          }
          &:nth-of-type(3) {
            left: auto;
            right: 5px;
            bottom: 8px;
          }
        }
      }
    }
    h3 {
      margin: 1rem 0 0.5rem 0;
      font-size: 2.3rem;
      font-weight: 600;
      width: 90%;
    }
    a {
      font-family: "Barlow Condensed", sans-serif;
      letter-spacing: 0.2rem;
      font-size: 1rem;
      font-weight: 200;
      padding: 0.5vw;
      z-index: 2;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        background: #181b22;
        width: 50px;
        height: 100%;
        z-index: -1;
      }
    }
  }
  .right {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .image-wrapper {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .long-card {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 100%;
      top: 70%;
    }
  }
`;
export default AboutUsSection;
