import styled from '@emotion/styled'

function ServiceSection() {

      return (

        <ServiceSectionStyled>
            <h2>Services.</h2>
            <div className='cards-container'>
                <div className='card'>
                    <img src="/bolt.png" alt="bolt"/>
                    <h3>Digital Marketing</h3>
                    <p>Tempore corrupti ore corrupti tempor temporibus fuga earum asperiores fugit laudantium.</p>
                </div>
                <div className='card colored'>
                    <img src="/mobile-phone.png" alt="bolt"/>
                    <h3>Web & App Development</h3>
                    <p>Tempore corrupti  ore corrupti tempor temporibus fuga earum asperiores fugit laudantium.</p>
                </div>
                <div className='card'>
                    <img src="/magic-wand.png" alt="bolt"/>
                    <h3>Web & App Development</h3>
                    <p>Tempore corrupti tore corrupti temporemporibus fuga earum asperiores fugit laudantium.</p>
                </div>
            </div>
            <a href="#">
                DISCOVER MORE
            </a>

        </ServiceSectionStyled>
    )
}   

const ServiceSectionStyled = styled.div`
    @media only screen and (orientation:portrait) {
        width: 95% !important;
        padding: 5vh 0!important;
        .cards-container {
           flex-direction: column;
           width: 100% !important;  
        }
        h2 {

            margin: 5vh auto!important;
        }
        .card {
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
            &:nth-of-type(2),
            &:nth-of-type(3) {
                margin-top: 0 !important;
            }
        }
        a {
            margin-top: 2vh !important;
            width: 15vh !important;
            height: 6vh !important;
        }
    }

    width: 65%;
    margin: 10vw auto;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    h2 {
        margin: 0;
        font-size: 4vw;
        text-align: right;
        text-shadow: 0 8px rgba(255, 255, 255, 0.05);
    }
    a {
        background: #181b22;
        width: 9vw;
        height: 3vw;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    .cards-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .card {
            background:#151921;
            width: 31%;
            height: 16vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2vw;
            h3 {
                text-align: center;
                margin: 1vw;
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
                margin-top: 4vw;
                background: #76dbb5;
                color: black;
            }
            &:nth-of-type(3) {
                margin-top: 8vw;
            }
        }
    }

`
export default ServiceSection