import styled from "@emotion/styled";
import ListedCard from "./ListedCard.js";
function PaboutOurPurposeSection() {
  const listData = [
    {
      heading: "Our Mission",
      parag: "luctus massa ipsum at tempus eleifend congue lectus bibendum",
      position: 1,
    },
    {
      heading: "Our Goals",
      parag: "luctus massa ipsum at tempus eleifend congue lectus bibendum",
      position: 2,
    },
    {
      heading: "Why Us?",
      parag: "luctus massa ipsum at tempus eleifend congue lectus bibendum",
      position: 3,
    },
  ];
  return (
    <PaboutOurPurposeSectionStyled>
      <div className="bg"></div>
      <div className="our-purpose">
        <div className="our-purpose-left">
          <img
            src="https://skepp.com/assets/Uploads/_resampled/ScaleWidthWyIxODAwIl0/IMG-2227.jpg"
            alt="office"
          />
        </div>
        <div className="our-purpose-right">
          <h2>About us.</h2>
          <p>
            Our creative Ad agency is ranked among the finest in the US. We
            cultivate smart ideas for start-ups and seasoned players.{" "}
          </p>
          <ul className="list-container">
            {listData.map(({ heading, parag, position }) => (
              <ListedCard heading={heading} parag={parag} position={position} />
            ))}
          </ul>
        </div>
      </div>
    </PaboutOurPurposeSectionStyled>
  );
}

const PaboutOurPurposeSectionStyled = styled.div`
  height: 100vh;
  margin: auto;
  width: 100%;
  position: relative;
  .bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #11141b;
    background-image: linear-gradient(
      to right,
      #1a1e25 40vw,
      #11141b 40vw 100vw
    );
  }
  .our-purpose {
    position: relative;
    z-index: 1;
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    .our-purpose-left {
      position: absolute;
      right: 53%;
      top: 10%;
      z-index: 10;
      width: 30rem;
      height: 35rem;
      object-fit: contain;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .our-purpose-right {
      z-index: 10;
      width: 30rem;
      height: 78%;
      margin-left: 53%;
      margin-top: 6%;
      li {
        &::marker {
          background: red;
        }
      }
      h2 {
        font-family: "Barlow Condensed", sans-serif;
        font-weight: bold;
        font-size: 40px !important;
        color: #fff;
        margin: 0;
      }
      p {
        font-size: 15px;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        color: #c8c8c8;
      }
    }
  }
  @media screen and (max-width: 1024px) and (min-width: 769px) {
    width: 100vw;
    background: #1a1e25;
    .our-purpose {
      width: 95%;
      margin: auto;
    }
    .our-purpose-left {
      width: 36% !important;
      height: 65% !important;
      object-fit: contain;
      margin-top: 5%;
      img {
        opacity: 1;
      }
    }
    .our-purpose-right {
    }
  }
  @media only screen and (max-width: 768px) {
    .our-purpose-left {
      width: 75% !important;
      position: absolute;
      margin-right: 30vw;
      background: #11141b;
      img {
        opacity: 0.2;
      }
    }
    .our-purpose-right {
      width: 100% !important;
    }
  }
`;
export default PaboutOurPurposeSection;
