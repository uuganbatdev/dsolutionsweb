import styled from '@emotion/styled'

function Card({img, heading, parag}) {
    return(
        <CardStyled style={{}}>
                <img src={img} alt="icon"/>
                <h3>{heading}</h3>
                <p>{parag}</p>
        </CardStyled>
    )
}

const CardStyled = styled.div`
           @media only screen and (orientation:portrait) {
                width: 100% !important;
                height: auto !important;
                padding: 4vh 0 !important;
                margin: 3vh 0!important;
                img {
                    width: 5vh !important;
                    height: 5vh !important;
                }
                p {
                    line-height: normal !important;
                    width: 50% !important;
                }
           } 
            background:#151921;
            width: 31%;
            height: 20vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2vw;
            font-size: 1.2em;
            h3 {
                text-align: center;
                margin: 1vw;
                letter-spacing: 0.1vw;
            }
            img {
                width: 2vw;
            }
            p {
                line-height: 1.5vw;
                text-align: center;
                width: 80%;
            }
            &:nth-of-type(2) {
                background: #76dbb5;
                color: black;
            }
`
export default Card
