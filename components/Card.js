import styled from "@emotion/styled";

function Card({ img, heading, parag }) {
  return (
    <CardStyled style={{}}>
      <img src={img} alt="icon" />
      <h3>{heading}</h3>
      <p>{parag}</p>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  @media only screen and (orientation: portrait) {
    width: 100% !important;
    height: auto !important;
    padding: 6vh 0 !important;
    margin: 3vh 0 !important;
    img {
      width: 5vh !important;
      height: 5vh !important;
    }
    p {
      line-height: normal !important;
      width: 80% !important;
    }
  }
  background: #151921;
  width: 31%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4.5rem;
  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: bolder;
    text-align: center;
    margin-top: 9%;
    margin-bottom: 5%;
  }
  img {
    width: 18%;
    object-fit: contain;
  }
  p {
    line-height: 1.8rem;
    opacity: 0.7;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
    margin-top: 0;
    text-align: center;
  }
  &:nth-of-type(2) {
    background: #76dbb5;
    color: black;
  }
`;
export default Card;
