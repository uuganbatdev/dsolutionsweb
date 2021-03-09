import styled from '@emotion/styled'

function CustomCard({imgSource, text, bgColor, firstHead, secondHead}) {
	return(
		<CustomCardStyled style={{background: bgColor}}>
			<img src={imgSource} alt='bolt' />
			<span>
				{firstHead}
			</span>
			<span>
				{secondHead}
			</span>
			<p>
				{text}
			</p>
		</CustomCardStyled>
	)
}

const CustomCardStyled = styled.div`
	width: 25%;
	padding: 3% 0;
	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	img {
		object-fit: contain;
		height: 15%;
		margin-bottom: 10%;
	}
	span {
		font-weight: 600;
		font-size: 1.2rem;
	}
	p {
		width: 80%;
	}
`
export default CustomCard
