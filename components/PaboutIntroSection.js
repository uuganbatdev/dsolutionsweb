import styled from '@emotion/styled'
import Card from './Card.js'

function PaboutIntroSection() {
    let cards = [
        {
            img: '/bolt.png',
            heading : 'Digital Marketing',
            parag: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
        },
        {
            img: '/mobile-phone.png',
            heading : 'Mobile Development',
            parag: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
        },
        {
            img: '/magic-wand.png',
            heading : 'Fast Service',
            parag: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
        }
    ]
    
    return(
        <PaboutIntroSectionStyled>
            <div className='about-cover-container'>
                <h1>About us</h1>
                <img src="http://innovationplans.com/idesign/avo2/avo-dark/img/slid/1.jpg" alt="bg"/>
            </div>
            <div className='intro-container'>
                <h2>
                    Who We Are ?
                </h2>
                <p>
                    We develop creative solutions for small and big brands alike, build authentic product identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eu. Ultrices ut diam morbi risus dui, nec eget at lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sed.
                </p>
            </div>
            <div className='cards-container'>
                {cards.map(({img,heading,parag,colored,position}) => 
                    <Card img={img} heading={heading} parag={parag} colored={colored} position={position}/>
                )}
            </div>
        </PaboutIntroSectionStyled>
    )
}

const PaboutIntroSectionStyled = styled.div`
        .cards-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 8vw;
        }
        .about-cover-container {
            height: 70vh;
            img {
                width: 100vw;
                height: 70vh;
                object-fit: cover;
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0.6;
            }
            h1 {
                position: absolute;
                z-index: 10;
                left:50%;
                top: 25%;
                transform: translate(-50%,-50%);
                font-size: 5em;
				font-weight: 500;
                font-family: 'Poppins', sans-serif;
            }
        }
        .intro-container {
            display: flex;
            height: 23vw;
            align-items: center;
            h2 {
                width: 35%;
            }
            p {
                width:  65%;
                font-family: 'Poppins', sans-serif;
                font-weight: 200;
                opacity: 0.8;
            }
        }
	@media only screen and (orientation:portrait) {
		.intro-container {
			height: auto;
			flex-direction: column;			
			align-items: start;
			h2 {
				width: 100%;
				margin-bottom: 0;
			}
			p {
				width: 100%;
			}
		}
		.cards-container {
			flex-direction: column;
		}
	}
`
export default PaboutIntroSection

