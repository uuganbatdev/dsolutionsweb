import styled from '@emotion/styled'

function IconedCard({img}) {
	return(
		<IconedCardStyled>
			<img src={img} alt={img} />		
		</IconedCardStyled>
	)
}

const IconedCardStyled = styled.div`
	border: 0.1vw solid rgba(255,255,255,0.1);
	padding: 55px;
	border-radius: 10px;
	display: grid;
	place-items: center;
	margin: 15px;
	img {
		height: 45px;
		object-fit: contain;
		filter: invert(99%) sepia(98%) saturate(0%) hue-rotate(297deg) brightness(105%) contrast(100%);
	}
	@media only screen and (orientation:portrait) {
		width: 40vw;
		height: 40vw;
		margin: 1.5vh;
		border-radius: 1vh;
		img {
			width: 10vh;
			height: 10vh;
		}
	}

`
export default IconedCard
