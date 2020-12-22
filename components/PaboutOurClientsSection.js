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
			<div className='bg'></div>
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
	height: 80vh;
	position: relative;
	top: -1.1vw;
	display: flex;
	align-items: center;
	.bg {
		position: absolute;	
		width: 100vw;
		top: 0;
		height: 80vh;
		left: -10vw;
		background: #11141b;
	}
	.our-clients {
		width: 100%;
		position: relative;
		height: 70%;
		display: flex;
		justify-content: right;
		.our-clients-left {
			width: 30%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: left;
			justify-content: center;
			p {
				color: #75dab4;
				letter-spacing: 0.8vw;
				font-weight: 400;
			}
			h2 {
				text-shadow: 0 0.5vw rgba(255, 255, 255, 0.05);
				margin-top: 1vw;
				font-size: 4em !important;
			}
		}
		.our-clients-right {
			width: 64%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			align-content: center;
			justify-content: center;
		}	
	}
`
export default PaboutOurClientsSection
