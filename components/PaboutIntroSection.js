import styled from "@emotion/styled";
import Card from "./Card.js";

function PaboutIntroSection() {
  let cards = [
    {
      img: "/bolt.png",
      heading: "Digital Marketing",
      parag: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
    },
    {
      img: "/mobile-phone.png",
      heading: "Mobile Development",
      parag: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
    },
    {
      img: "/magic-wand.png",
      heading: "Fast Service",
      parag: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
    },
  ];

  return (
    <PaboutIntroSectionStyled className="AboutSection1">
      <div className="about-cover-container">
        <h1>About us</h1>
        <img
          src="http://innovationplans.com/idesign/avo2/avo-dark/img/slid/1.jpg"
          alt="bg"
        />
      </div>
      <div className="intro-container">
        <h2>Who We Are ?</h2>
        <p>
          We develop creative solutions for small and big brands alike, build
          authentic product identities and much more.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit sit non facilisis vitae eu. Ultrices ut
          diam morbi risus dui, nec eget at lorem in id tristique in elementum
          leo nisi eleifend placerat magna lacus elementum ornare vehicula odio
          posuere quisque ultrices tempus cras id blandit maecenas in ornare
          quis dolor tempus risus vitae feugiat fames aliquet sed.
        </p>
      </div>
      <div className="cards-container">
        {cards.map(({ img, heading, parag, colored, position }) => (
          <Card
            img={img}
            heading={heading}
            parag={parag}
            colored={colored}
            position={position}
          />
        ))}
      </div>
    </PaboutIntroSectionStyled>
  );
}

const PaboutIntroSectionStyled = styled.div`
  @media (max-width: 1024px) and (min-width: 769px) {
    position: relative;
    left: -2.5%;
    .intro-container {
      display: flex;
      width: 75%;
      h2 {
        height: 250px !important;
        font-size: 30px !important;
      }
      p {
        height: 300px;
        width: 60%;
        font-size: 16px;
        line-height: 2 !important;
      }
    }
    .about-cover-container {
      h1 {
        width: 80%;
        left: 10px;
        font-size: 70px !important;
      }
      img {
        width: 100vw;
        height: 75vh;
        object-fit: cover;
        position: absolute;
        opacity: 0.6;
        position: absolute;
        left: 0px;
      }
    }

    .cards-container {
      justify-content: flex-start !important;
      width: 90%;
    }
  }

  width: 1200px;
  margin: 0 auto;
  .cards-container {
    height: 50%;
    width: 100%;
    display: flex;
    margin-bottom: 8rem;
    justify-content: space-between;
  }
  .about-cover-container {
    height: 75vh;
    img {
      width: 100vw;
      height: 75vh;
      /* object-fit: cover;
      position: absolute; */
      opacity: 0.6;
      position: absolute;
      left: 0px;
      /* background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover; */
    }
    h1 {
      position: absolute;
      z-index: 10;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
      font-size: 5em;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
    }
  }
  .intro-container {
    height: 50%;
    margin: 5rem 1rem;
    display: flex;
    align-items: center;
    h2 {
      margin-top: 0px;
      width: 35%;
      height: 120px;
      font-family: "Poppins" sans-serif;
      font-size: 30px;
    }
    p {
      width: 90%;
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      font-weight: 300;
      text-align: justify;
      opacity: 0.8;
      line-height: 1.9rem;
    }
  }
  @media (max-width: 768px) {
    width: 100vw;

    h1 {
      font-size: 70px !important;
    }

    .intro-container {
      display: block;
      height: auto;
      flex-direction: column;
      align-items: start;
      width: 100%;
      h2 {
        width: 100%;
        margin-bottom: 0;
      }
      p {
        width: 90%;
      }
    }
    .cards-container {
      flex-direction: column;
      width: 93%;
    }
  }
`;
export default PaboutIntroSection;
