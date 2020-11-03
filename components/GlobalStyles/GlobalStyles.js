import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
    <>
        <Global styles={css`

            * {
                box-sizing: border-box;
            }
            body {
                overflow-x: hidden;
                margin: 0;
                padding: 0;
                background: #0c0f16;
                color: white;
                font-family: 'Poppins', sans-serif;
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
