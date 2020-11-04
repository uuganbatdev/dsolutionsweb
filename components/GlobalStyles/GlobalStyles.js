import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
    <>
        <Global styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');
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
                font-family: 'Open Sans Condensed', sans-serif;
                font-size: 1.1vw;
                letter-spacing: 0.05vw;
            }
            a {
                color: white;
                text-decoration: none;
                display: inline-block;
            }
        `}/>
    </>
)

export default GlobalStyles
