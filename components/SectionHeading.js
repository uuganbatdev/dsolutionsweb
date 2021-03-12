import styled from '@emotion/styled'

function SectionHeading({ heading, headingTop }) {
	return(
		<SectionHeadingStyled>
			<p className='home-heading-top'>{headingTop}</p>
			<span className='bg-heading-stroke'>{heading}</span>
			<h2 className='home-heading-two'>{heading}</h2>
		</SectionHeadingStyled>
	)
}

const SectionHeadingStyled = styled.div`
		width: 100%;
		position: relative;
		margin: 100px 0;
		.home-heading-top {
			color: #75dab4;
			text-align: center;
			letter-spacing: 14px;
			font-weight: 300;
			font-family: 'Barlow Condensed', sans-serif;
			text-transform: uppercase;
		}
		.home-heading-two {
			margin: 0;
			margin-top: 3%;
			text-transform: uppercase;
			font-size: 5rem;
			text-align: center;
			text-shadow:0 8px rgba(255, 255, 255, 0.05);
			font-weight: 700;
			font-family: 'Barlow Condensed', sans-serif;
		}
		.bg-heading-stroke {
			display: block;
			-webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
			color: transparent;
			font-size: 10rem;
			font-weight: 700;
			width: 100%;
			top: -35px;
			position: absolute;
			text-align:center;
			opacity: 0.3;
			letter-spacing: 3px;
			font-family: 'Barlow Condensed', sans-serif;
		}

@media only screen and (orientation:portrait) {
	width: 100vw;
	.bg-heading-stroke {
		font-size: 6rem !important;
	}

}
`
export default SectionHeading
