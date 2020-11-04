import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
    <>
        <Global styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

            * {
                box-sizing: border-box;
            }
            body {
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
