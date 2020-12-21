import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
    <>
        <Global styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;600;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
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
                font-family: 'Barlow Condensed', sans-serif;
                font-size: 1.1vw;
            }
            p{
                font-weight: 200;
            }
            a {
                color: white;
                text-decoration: none;
                display: inline-block;
                font-weight: 200;
            }
            h2 {
                font-size: 5.5vw !important;
                letter-spacing: 0.3vw;
            }
        `}/>
    </>
)

export default GlobalStyles
