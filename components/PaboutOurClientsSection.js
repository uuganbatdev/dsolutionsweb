import styled from '@emotion/styled'
import IconedCard from './IconedCard.js'

function PaboutOurClientsSection() {
	const iconedLists = [
		{
			img: '/apple.png'
		},
		{
			img: '/apple.png'
		},
		{
			img: '/apple.png'
		},
		{
			img: '/apple.png'
		},
		{
			img: '/apple.png'
		},
		{
			img: '/apple.png'
		},
		{
			img: '/apple.png'
		},
		{
			img: '/apple.png'
		}
	]

	return(
		<PaboutOurClientsSectionStyled>
            <div className='our-clients'>
                <div className='our-clients-left'>
                     <p>CLIENTS</p>
                     <h2>OUR CLIENTS.</h2>
                </div>
                <div className='our-clients-right'>
					{iconedLists.map(({img}) => 
						<IconedCard img={img} />
					)}
                </div>
            </div>
		</PaboutOurClientsSectionStyled>
	)
}

const PaboutOurClientsSectionStyled = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 100px 0;
	.our-clients {
		width: 1200px;
		position: relative;
		height: 70%;
		display: flex;
		justify-content: right;
		.our-clients-left {
			width: 35%;
			display: flex;
			flex-direction: column;
			align-items: left;
			justify-content: center;
				font-family: 'Barlow Condensed', sans-serif;
			p {
				color: #75dab4;
				font-weight: 300;
				font-size: 17px;
				text-transform: uppercase;
				letter-spacing: 14px;
			}
			h2 {
				text-shadow: 0 8px rgba(255,255,255,.05);
				margin-top: 0;
				font-size: 5rem;
				font-weight: 700;
				text-transform: uppercase;
				letter-spacing: 4px;
			}
		}
		.our-clients-right {
			width: 65%;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}	
	}
	@media only screen and (orientation:portrait) {
		height: auto;
		.bg {
			width: 110vw;
			height: 100%;
		}	
		h2 {
			margin-bottom: 1vh;
		}
		.our-clients {
			flex-direction: column;

		}
		.our-clients-left,
		.our-clients-right {
			width: 100% !important;

		}
	}
`
export default PaboutOurClientsSection
