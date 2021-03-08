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
  height: 100%S;
  width: 100%;
  position: relative;
  .bg {
    position: absolute;
    width: 100vw;
    left: -10vw;
    height: 100vh;
    background: #0c0f16;
    background-image: linear-gradient(to right, #1a1e25 40%, #0c0f16 40% 100%);
  }
  .our-purpose {
    z-index: 2;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: right;
    .our-purpose-left {
      z-index: 10;
      width: 42%;
      height: 78%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .our-purpose-right {
      z-index: 10;
      width: 54%;
      height: 78%;
      padding: 5vw;
      padding-top: 3vw;
      li {
        &::marker {
          background: red;
        }
      }
      h2 {
        font-family: "Barlow Condensed", sans-serif;
        font-weight: bold;
        font-size: 2.5em !important;
        margin: 0;
      }
      p {
        font-size: 0.85em;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        opacity: 0.7;
      }
    }
  }
  @media only screen and (orientation: portrait) {
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
