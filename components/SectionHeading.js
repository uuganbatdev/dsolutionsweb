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
`
export default SectionHeading
