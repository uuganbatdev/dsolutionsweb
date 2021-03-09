import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
    <>
        <Global styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');
            @media only screen and (orientation:portrait) {
                body {
                    font-size: 2vh !important;
                    line-height: normal !important;
                    h2 {
                        font-size: 5vh !important;
                    }
                    .slide-desc {
                        width: 60% !important;
                    }
                    .swiper-button-prev,
                    .swiper-button-next {
                        width: 7vh !important;
                        height: 7vh !important;
                        font-size: 2vh !important;
                    }
                }
            }
            * {
                box-sizing: border-box;
            }
            html,body {
                overflow-x: hidden;
                margin: 0;
                padding: 0;
                background: #0c0f16;
                color: white;
                font-family: 'Poppins', sans-serif;
            }
			p {
				font-weight: 200;
			}
            a {
                color: white;
                text-decoration: none;
                display: inline-block;
                font-weight: 200;
            }
			.home-heading-top {
				color: #75dab4;
				text-align: center;
				letter-spacing: 14px;
				font-weight: 300;
				font-family: 'Barlow Condensed', sans-serif;
				text-transform: uppercase;
			}
			.home-heading-two {
				margin: 0;
				margin-top: 3%;
				text-transform: uppercase;
				font-size: 5rem;
				text-align: center;
				text-shadow:0 8px rgba(255, 255, 255, 0.05);
				font-weight: 700;
				font-family: 'Barlow Condensed', sans-serif;
			}
			.bg-heading-stroke {
				display: block;
				-webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
				color: transparent;
				font-size: 10rem;
				font-weight: 700;
				width: 100%;
				top: -35px;
				position: absolute;
				text-align:center;
				opacity: 0.3;
				letter-spacing: 3px;
				font-family: 'Barlow Condensed', sans-serif;
			}
			.home-anchor {
				font-family: 'Barlow Condensed', sans-serif;
				letter-spacing: 0.2rem;
				font-size: 0.9rem;
				font-weight: 100;
				padding: 0.7rem 0.5rem;
				z-index: 2;
				position: relative;
				&::before {
					content: '';
					position: absolute;
					left: 0;
					top: 0;
					background:#181b22;
					width: 50px;
					height: 100%;
					z-index: -1;
				}
			}
            h2 {
                font-size: 5.5rem;
                letter-spacing: 0.3vw;
            }
        `}/>
    </>
)

export default GlobalStyles
