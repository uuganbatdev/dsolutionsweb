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
	width: 32%;
	padding: 30px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #11141b;
	border-radius: 5px;
	position: relative;
	img {
		width: 20%;
		object-fit: contain;
	}
	p {
		letter-spacing: 2px;
		text-align: center;
		align-self: center;
		word-spacing: 100px;
		font-family: 'Barlow Condensed',sans-serif;
		font-weight: 300;
	}
	span {
		border-radius: 50%;
		position: absolute;
		width: 4px;
		height: 4px;
		background: #272930;
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
