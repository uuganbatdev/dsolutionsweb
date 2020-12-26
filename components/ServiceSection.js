import styled from '@emotion/styled'
import Card from './Card.js'


function ServiceSection() {
        let cards = [
            {
                img: '/bolt.png',
                heading : 'Digital Marketing',
                parag: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
            },
            {
                img: '/mobile-phone.png',
                heading : 'Mobile Development',
                parag: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
            },
            {
                img: '/magic-wand.png',
                heading : 'Fast Service',
                parag: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
            }
        ]
      return (
        <ServiceSectionStyled>
            <h2>SERVICES.</h2>
            <div className='cards-container'>
                {cards.map(({img,heading,parag,colored,position}) => 
                    <Card 
                        img={img}
                        heading={heading}
                        parag={parag}/>
                    )}
            </div>
            <a href="#">
                DISCOVER MORE
            </a>

        </ServiceSectionStyled>
    )
}   

const ServiceSectionStyled = styled.div`
    @media only screen and (orientation:portrait) {
	margin-top: 0 !important;
        width: 95% !important;
        padding: 0!important;
        .cards-container {
           flex-direction: column;
           width: 100% !important;  
        }
        h2 {

            margin: 5vh auto!important;
        }
        a {
			padding: 1vw !important;
            width: 8vh !important;
        }
    }

    width: 80%;
    margin: 10vw auto;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    h2 {
        margin: 0;
        font-size: 4vw;
        text-align: right;
		text-shadow:0 0.6vw rgba(255,255,255,0.05);
    }
    a {
        word-spacing: 0.3vw;
        display: inline-block;
        white-space: nowrap;
            width: 3vw;
            flex-grow: 0;
            padding: 0.5vw;
            background:#1f2229;
            z-index: 2;
            letter-spacing: 0.1vw;
            font-weight: 400;
    }
    .cards-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
		margin: 4vw 0;
        & > div:nth-of-type(2) {
            margin-top: 4vw;
        }
        & > div:nth-of-type(3) {
            margin-top: 8vw;
        }
    }

`
export default ServiceSection
