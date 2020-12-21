import styled from '@emotion/styled'

function ListedCard({heading, parag, position}) {
	return(
			<ListedCardStyled>
				<p className='num'>{position}</p>
				<h3>{heading}</h3>
				<p>{parag}</p>
			</ListedCardStyled>
	)
}

const ListedCardStyled = styled.div`
	padding: 1vw 0;
	padding-left: 2vw;
	height: 100%;
	position: relative;
	&::before {
		content: ''
	}
	border-bottom: 0.1vw solid rgba(255,255,255,0.1);
	.num {
		position: absolute;
		left: -1vw;
		top: 22%;
		width: 2vw;
		height: 2vw;
		border-radius: 50%;
		border: 0.12vw solid #75DAB4;
		font-weight: bold !important;
		color: #75DAB4;
		display: grid;
		place-items: center;
	}
	h3 {
		font-family: 'Poppins', sans-serif ;
		font-weight: 500;
		margin-bottom: 0;
	}
	p {
		font-size: 0.75em !important;
	}
`
export default ListedCard
