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
	width: 11vw;
	height: 11vw;
	margin: 0 0.5vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #11141b;
	border-radius: 0.3vw;
	position: relative;
	img {
		width: 2vw;
		height: 2vw;
		object-fit: contain;
	}
	p {
		letter-spacing: 0.1vw;
		text-align: center;
		margin: 1.5vw auto;
		width: 50%;
		font-weight: 300;
	}
	span {
		border-radius: 50%;
		position: absolute;
		width: 0.3vw;
		height: 0.3vw;
		background: #1a1e25;
		right: 0.5vw;
		bottom: 0.5vw;
		&:nth-of-type(2) {
			right: 0.9vw;
		}
		&:nth-of-type(3) {
			bottom: 0.9vw;
		}
	}
`
export default Littlecard
