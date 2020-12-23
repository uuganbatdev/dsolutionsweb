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
            height: 23vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2.5vw;
            h3 {
				font-family:  'Poppins', sans-serif;
				font-weight: bolder;
                text-align: center;
                margin-top: 2vw;
				margin-bottom: 0.8vw;
            }
            img {
                width: 2.5vw;
            }
            p {
				line-height: 1.8em;
				opacity: 0.7;
				font-weight: 300;
				font-family: 'Poppins', sans-serif;
				margin-top: 0;	
                text-align: center;
            }
            &:nth-of-type(2) {
                background: #76dbb5;
                color: black;
            }
`
export default Card
