import styled from "@emotion/styled";
import IconedCard from "./IconedCard.js";

function PaboutOurClientsSection() {
  const iconedLists = [
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
    {
      img: "/apple.png",
    },
  ];

  return (
    <PaboutOurClientsSectionStyled>
      <div className="bg"></div>
      <div className="our-clients">
        <div className="our-clients-left">
          <p>CLIENTS</p>
          <h2>OUR CLIENTS.</h2>
        </div>
        <div className="our-clients-right">
          {iconedLists.map(({ img }) => (
            <IconedCard img={img} />
          ))}
        </div>
      </div>
    </PaboutOurClientsSectionStyled>
  );
}

const PaboutOurClientsSectionStyled = styled.div`
  width: 1200px;
  height: 35rem;
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;
  .bg {
    position: absolute;
    width: 100vw;
    top: 0;
    height: 100%;
    left: -10vw;
    background: #0c0f16;
  }
  .our-clients {
    width: 100%;
    position: relative;
    height: 70%;
    display: flex;
    justify-content: right;
    .our-clients-left {
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      p {
        color: #75dab4;
        letter-spacing: 0.8vw;
        font-weight: 400;
      }
      h2 {
        font-family: "Barlow Condensed", sans-serif;
        text-shadow: 0 0.5vw rgba(255, 255, 255, 0.05);
        margin-top: 1vw;
        font-size: 5em !important;
      }
    }
    .our-clients-right {
      width: 64%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-content: center;
      justify-content: center;
    }
  }
  @media only screen and (orientation: portrait) {
    height: auto;
    .bg {
      width: 110vw;
      height: 100%;
    }
    h2 {
      margin-bottom: 1vh;
    }
    .our-clients {
      flex-direction: column;
    }
    .our-clients-left,
    .our-clients-right {
      width: 100% !important;
    }
  }
`;
export default PaboutOurClientsSection;
