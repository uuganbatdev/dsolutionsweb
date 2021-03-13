import styled from "@emotion/styled";

function IconedCard({ img }) {
  return (
    <IconedCardStyled>
      <img src={img} alt={img} />
    </IconedCardStyled>
  );
}

const IconedCardStyled = styled.div`
  border: 0.1vw solid rgba(255, 255, 255, 0.1);
  padding: 55px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  margin: 15px;
  img {
    height: 45px;
    object-fit: contain;
    filter: brightness(205%);
  }
  @media only screen and (orientation: portrait) {
    width: 90%;
    height: 40vw;
    margin: 1.5vh;
    border-radius: 1vh;
    padding: 0;
    img {
      width: 10vh;
    }
  }
`;
export default IconedCard;
