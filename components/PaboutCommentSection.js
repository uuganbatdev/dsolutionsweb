import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
SwiperCore.use([Navigation, Autoplay, Pagination]);

function PaboutCommentSection() {
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

  const statistics = [
    {
      img: "/bolt.png",
      parag: "CREATIVE DESIGN",
    },
    {
      img: "/bolt.png",
      parag: "PIXEL PERFECT",
    },
    {
      img: "/bolt.png",
      parag: "HEIGHT PERFORMANCE",
    },
  ];

  return (
    <PaboutCommentSectionStyled>
      <img
        src="http://innovationplans.com/idesign/avo2/avo-dark/img/slid/1.jpg"
        alt="bgiamge"
        className="bg-image"
      />
      <div className="comments">
        <div className="comment-left">
          <div className="play-button">
            <img src="play-btn.png" alt="playbtn" />
          </div>
          <h2>So that's us. There's no other way to put it.</h2>
        </div>
        <div className="comment-right">
          <div className="inner-right">
            <p className="card-title">OUR HAPPY CLIENTS</p>
            <h3 className="card-header">What Client's Say?</h3>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={true}
              pagination={{ clickable: true }}
            >
              {commentData.map((slide) => (
                <SwiperSlide className="slide">
                  <p className="text">{slide.text}</p>
                  <hr />
                  <div className="swiper-bottom">
                    <img src={slide.profileImg} alt={slide.profileImg} />
                    <div className="swiper-bottom-right">
                      <h3>{slide.name}</h3>
                      <p className="info">{slide.info}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </PaboutCommentSectionStyled>
  );
}

const PaboutCommentSectionStyled = styled.div`
  @media (max-width: 1024px) and (min-width: 769px) {
    .bg-image {
      height: 80vh !important;
      left: -3vw;
    }

    .comment-left {
      z-index: 1;
      background: red;
    }

    .commen-right {
      .inner-right {
        .slide {
        }
      }
    }

    .slide {
    }
  }

  display: relative;
  padding: 2rem 0;
  position: relative;
  width: 100vw;
  height: 55rem;

  .comments {
    display: flex;
    width: 100%;
    padding: 4% 7%;
    text-align: start;
  }

  .bg-image {
    top: 0;
    position: absolute;
    background-repeat: no-repeat;
    width: 100%;
    height: 55%;
    object-fit: cover;
    opacity: 0.3;
  }
  .comment-left {
    display: flex;
    flex-direction: column;
    width: 60vw;
    h2 {
      width: 80%;
      font-weight: 800;
      font-size: 2.5rem !important;
      letter-spacing: 2px;
    }
    .play-button {
      display: block;
      width: 5rem;
      height: 5rem;
      margin-bottom: 50px;
      position: relative;
      z-index: 3;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 3;
      }
      :before {
        content: "";
        position: absolute;
        width: 130%;
        height: 130%;
        left: -15%;
        top: -15%;
        z-index: -2;
        border-radius: 50%;
        background-color: #494b4f;
        opacity: 0.3;
      }
      :after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: -1;
        border-radius: 50%;
        background: #83debc;
      }
    }
  }

  .comment-right {
    position: relative;
    top: -4rem;
    z-index: 10;
    width: 40vw;
    height: 40rem;
    align-items: center;
    justify-content: center;
    .inner-right {
      padding: 2%;
      width: 30rem;
      height: 55vh;
      background: #75dab4;
      color: black;
      margin: auto;
      font-family: "Poppins", sans-serif;
      .card-title {
        font-size: 0.75em;
        letter-spacing: 0.3rem;
      }
      .card-header {
        margin: 0;
        font-size: 2rem;
      }
      .swiper-container {
        width: 100%;
        overflow: hidden;
        position: relative;
        padding-bottom: 2rem;
        .swiper-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          .swiper-slide {
            flex-shrink: 0;
            flex-grow: 0;
            flex-basis: 100%;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .text {
              font-family: "Poppins", sans-serif;
              font-weight: 300;
              opacity: 0.8;
            }
            hr {
              opacity: 0.1;
              width: 100%;
              height: 0.07vw;
              border: none;
              background: grey;
              margin-bottom: 2vw;
            }
            .swiper-bottom {
              display: flex;
              justify-content: left;
              align-items: center;
              img {
                width: 15%;
                object-fit: contain;
                border-radius: 90%;
                object-fit: cover;
              }
              .swiper-bottom-right {
                margin-left: 5%;
                * {
                  margin: 0;
                }
              }
            }
          }
        }
        .swiper-pagination {
          position: absolute;
          z-index: 100;
          display: flex;
          justify-content: center;
          align-items: center;
          bottom: 10px;
          right: 0;
          .swiper-pagination-bullet {
            width: 1rem;
            height: 1rem;
            border: 0.1vw solid black;
            border-radius: 50%;
            margin: 0 2%;
            opacity: 0.5;
            transition: 0.3s;
            cursor: pointer;
          }
          .swiper-pagination-bullet-active {
            transition: 0.3s;
            background: black;
            opacity: 1 !important;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    hr {
      opacity: 0.2 !important;
      height: 0.2vh !important;
    }
    .bg-image {
      left: -3vw;
    }
    .comment-left,
    .comment-right {
      width: 100%;
    }
    .play-button {
      margin-left: 5vw;
      width: 10vh !important;
      height: 10vh !important;
    }
    .comment-left {
      h2 {
        margin-bottom: 1vh;
        font-size: 1.5em !important;
      }
      .statistics {
        margin: 3vh 0;
      }
    }
    .comment-right {
      height: auto;
      width: 500px;
      .inner-right {
        padding: 5vh 4vh;
        width: 100%;
        height: 70vh;
        h3 {
          margin-bottom: 4vh;
        }
        p {
          line-height: 1.7em;
        }
        img {
          width: 10vh !important;
          height: 10vh !important;
        }
        .swiper-pagination-bullet {
          margin: 0 0.5vh !important;
          height: 1vh !important;
          width: 1vh !important;
        }
      }
    }
  }
`;
export default PaboutCommentSection;
