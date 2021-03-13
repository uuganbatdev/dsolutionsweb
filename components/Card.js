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
  @media (max-width: 768px) {
    width: 95% !important;
    height: 360px !important;
    padding: 2.5rem 0 !important;
    margin: 2.5rem 1rem;
    img {
      width: 5rem;
      height: 5rem;
    }
    h3 {
      font-size: 30px;
    }
    p {
      line-height: normal !important;
      width: 80% !important;
      font-size: 24px;
    }
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 30vw;
    margin-left: 2.5vw;

    img {
      width: 3rem !important;
    }

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 18px;
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
