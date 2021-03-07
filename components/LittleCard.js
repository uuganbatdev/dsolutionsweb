import styled from '@emotion/styled'

function Littlecard({img, parag}) {
	return(
		<LittlecardStyled>
			<img src={img} alt={img} />
			<p>{parag}</p>
			<span></span>
			<span></span>
			<span></span>
		</LittlecardStyled>
	)
}

const LittlecardStyled = styled.div`
	flex-shrink: 0;
	width: 11rem;
	height: 11rem;
	margin: 0 0.5vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #11141b;
	border-radius: 0.3vw;
	position: relative;
	img {
		width: 30%;
		object-fit: contain;
	}
	p {
		letter-spacing: 0.1rem;
		text-align: center;
		width: 50%;
		font-weight: 300;
	}
	span {
		border-radius: 50%;
		position: absolute;
		width: 5px;
		height: 5px;
		background: #1a1e25;
		right: 0.5rem;
		bottom: 0.5rem;
		&:nth-of-type(2) {
			right: 0.9rem;
		}
		&:nth-of-type(3) {
			bottom: 0.9rem;
		}
	}
	@media only screen and (orientation:portrait) {
		width: 18vh;
		height: 18vh;
		img {
			width: 4vh;
			height: 4vh;
		}
	}
`
export default Littlecard
