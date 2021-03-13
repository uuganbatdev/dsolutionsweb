import styled from "@emotion/styled";
import LittleCard from "./LittleCard.js";

function AboutUsSection() {
  return (
    <AboutUsSectionStyled>
      <div className="left">
        <div className="image-wrapper-left">
          <img
            src="http://avo.smartinnovates.com/wp-content/uploads/2020/09/1.jpg"
            alt="laptop"
          />
        </div>
        <div className="image-wrapper-right">
          <img
            src="http://avo.smartinnovates.com/wp-content/uploads/2020/09/3.jpg"
            alt="laptop"
          />
          <img
            src="http://avo.smartinnovates.com/wp-content/uploads/2020/09/2-2.jpg"
            alt="laptop"
          />
        </div>
      </div>
      <div className="right">
        <div className="h2-container">
          <div className="spans">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2>ABOUT US</h2>
        </div>
        <h3>We are more than just a digital agency.</h3>
        <p className="about-text">
          We are AVO. We create award-winning websites, remarkable brands and
          cutting-edge apps.Nullam imperdiet, sem at fringilla lobortis, sem
          nibh fringilla nibh, id gravida mi purus sit amet erat. Ut dictum nisi
          masvitp
        </p>
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
    .right {
        margin: 5vh 0 0 0!important;
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
            padding: 3vh  0!important;
            .long-card-left,
            .long-card-right {
                padding: 2vh 0!important;
                width: 100% !important;
            }
            .long-card-right {
                
                border-top: 0.1vh solid #75dab4 !important;
            
            }

        }
    }
}
	width: 1200px;
    margin: 0 auto;
	padding: 100px 0;
    display:flex;
    .left {
        width: 50%;
        display: flex;
        position: relative;
		img {
			object-fit: cover;
			border-radius: 10px;
		}
		.image-wrapper-left {
			width: 40%;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				height: 45%;
				width: 80%;
			}
		}
		.image-wrapper-right {
			width: 50%;
			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: space-evenly;
			img:nth-of-type(1) {
				height: 50%;
				width: 90%;
			}
			img:nth-of-type(2) {
				height: 40%;
				width: 65%;
				margin-top: 15%;
			}
		}
    }
    .right {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
		.about-text {
            width: 95%;
			color: #c8c8c8;
			font-size: 0.95rem;
			font-weight: 300;
			line-height: 2;
			margin: 30px 0;
        }
        .long-card {
			width: 95%;
            display: flex;
			justify-content: space-between;
        }
		.h2-container {
		position: relative;
		display: flex;
		align-items: center;
			h2 {
				font-family: 'Barlow Condensed', sans-serif;
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
            width: 90%;
			font-weight: 600;
			line-height: 1.5;
        }
      }
    }
@media only screen and (orientation:portrait) {
    flex-direction: column;
    width: 95% !important;
	padding: 50px 0;
    h2 {
        text-align: center;
		font-size: 1rem !important;
    }
	.spans {
		display: none;
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
		flex-direction: column;
		.image-wrapper-left, .image-wrapper-right {
			width: 100% !important;
			justify-content: center;
			align-items: center;
		}
		.image-wrapper-left {
		}
		img {
			width: 90% !important;
			height: 150px !important;
			margin: 10px 0 !important;
		}
	}
	.long-card {
		flex-direction: column;
		margin: 0 auto;
	}
}
`;
export default AboutUsSection;
