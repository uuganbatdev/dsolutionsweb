import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
SwiperCore.use([Navigation, Autoplay, Pagination]);

function PaboutOurTeamSection() {
  let [sliderView, setSliderView] = useState(4);
  useEffect(() => {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    if (windowHeight > windowWidth) {
      setSliderView(1);
      return;
    }
  });
  const commentData = [
    {
      profileImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Alex Regelman",
      text:
        "Lorem ipsum dolaperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
      info: "Co-founder, Colabrio",
    },
    {
      profileImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Alex Regelman",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
      info: "Co-founder, Colabrio",
    },
    {
      profileImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Alex Regelman",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
      info: "Co-founder, Colabrio",
    },
    {
      profileImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Alex Regelman",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
      info: "Co-founder, Colabrio",
    },
  ];

  return (
    <PaboutOurTeamSectionStyled>
      <span className="bg"></span>
      <div className="inner-our-team">
        <div className="our-team-left">
          <p>EMPLOYEES</p>
          <h2>OUR TEAM.</h2>
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={sliderView}
          loop={true}
          autoplay={true}
          navigation
        >
          {commentData.map((slide) => (
            <SwiperSlide className="our-team-slide">
              <div className="inner-slide">
                <img src={slide.profileImg} alt={slide.profileImg} />
                <h3>{slide.name}</h3>
                <p className="info">{slide.info}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PaboutOurTeamSectionStyled>
  );
}

const PaboutOurTeamSectionStyled = styled.div`
  width: 1200px;
  margin: auto;
  position: relative;
  display: flex;
  height: 40rem;
  .bg {
    width: 100vw;
    position: absolute;
    height: 100%;
    background-color: #11141b;
    background-image: linear-gradient(to right, #0c0f16 43vw, #1a1e25 43% 100%);
    top: 0;
    z-index: 1;
  }
  .inner-our-team {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 66%;
    left: 0;
    top: 17.5%;
    .our-team-left {
      position: absolute;
      width: 30%;
      height: 50%;
      margin-left: 20px;
      p {
        color: #75dab4;
        font-size: 1.1rem;
        letter-spacing: 1vw;
        font-weight: 300;
      }
      h2 {
        text-align: start;
        text-shadow: 0 0.5vw rgba(255, 255, 255, 0.05);
        margin-top: 1rem;
        letter-spacing: 3px;
        font-size: 5rem;
      }
    }
    .swiper-container {
      margin-left: 30vw;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .swiper-button-prev,
      .swiper-button-next {
        z-index: 5;
        position: absolute;
        bottom: 2.5rem;
        left: 0;
        width: 3.5rem;
        height: 3.5rem;
        color: #75dab4;
        margin-left: 2rem;
        cursor: pointer;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 0.1rem solid #75dab4;
        }
      }
      .swiper-button-prev {
        &::after {
          content: "◀";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .swiper-button-next {
        left: 4.5rem;
        &::after {
          content: "▶";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .swiper-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        .swiper-slide {
          padding: 1.4rem 3rem;
          flex-shrink: 0;
          flex-grow: 0;
          flex-basis: 10%;
          height: 100%;
          .inner-slide {
            width: 15rem;
            height: 23rem;
            background: #11141b;
            text-align: center;
            font-family: "Poppins", sans-serif;
            h3 {
              font-family: "Poppins", sans-serif;
              font-size: 1em;
              margin-bottom: 0;
            }
            p {
              font-size: 0.9rem;
              margin-top: 0.5rem;
              opacity: 0.6;
              font-weight: 400;
            }
          }
          img {
            width: 15rem;
            height: 17rem;
            object-fit: cover;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    .bg {
      left: -30px;
    }
    .our-team-left {
      top: 0px;
      h2 {
        font-size: 40px !important;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      top: 10%;
      left: 50vh !important;
      width: 4rem !important;
      height: 4rem !important;
    }

    .swiper-button-next {
      margin-left: 100px !important;
    }

    .inner-our-team {
      position: static;
      height: auto;
      display: flex;
      flex-direction: column;
      .swiper-container {
        margin-left: 0 !important;
        .swiper-slide {
          margin-top: 200px;
          padding: 0px 20px;
          background: red;
          flex-basis: 100% !important;
          .inner-slide {
            height: 90% !important;
            width: 30% !important;
            background: blue !important;
          }
          img {
            height: 60% !important;
            width: 100% !important;
          }
          h3 {
            font-size: 1rem !important;
          }
          p {
            font-size: 0.7rem !important;
          }
        }
      }
  }
  @media (max-width: 768px) {
    height: auto;
    .bg {
      left: -2.5vw;
    }
    .inner-our-team {
      position: static;
      height: auto;
      display: flex;
      flex-direction: column;
      .swiper-container {
        margin-left: 0 !important;
        .swiper-slide {
          flex-basis: 100% !important;
          .inner-slide {
            height: 90% !important;
          }
          img {
            height: 80% !important;
          }
          h3 {
            font-size: 1.5em !important;
          }
          p {
            font-size: 1.2em !important;
          }
        }
      }
      .swiper-button-prev,
      .swiper-button-next {
        width: 8vh !important;
        height: 8vh !important;
        top: 20vh !important;
        bottom: auto !important;
        left: 0 !important;
      }
      .swiper-button-next {
        left: 10vh !important;
      }
      .our-team-left {
        position: static !important;
        width: 100% !important;
        height: 40vh;
        p {
          letter-spacing: 1vh;
        }
        h2 {
          font-size: 3em !important;
          margin-bottom: 1vh !important;
        }
      }
    }
  }
`;
export default PaboutOurTeamSection;
