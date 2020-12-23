import styled from '@emotion/styled'

function PaboutConnectUsSection() {
	return(
		<PaboutConnectUsSectionStyled>
            <div className='connect-us'>
                <div className='cs-left'>
                    <p>LET’S TALK</p>
                    <h2>ABOUT YOUR NEXT PROJECT.</h2>
                </div>
                <a href="#">
					<p>
						GET IN TOUCH
					</p>
				</a>

            </div>
		</PaboutConnectUsSectionStyled>
	)
}

const PaboutConnectUsSectionStyled = styled.div`
	width: 100%;
	height: 45vh;
	.connect-us {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: left;
		align-items: center;
		.cs-left{
			width: 75%;
			p {
				color: #6EC1E4;
				font-weight: 400;
				letter-spacing: 0.2vw;
				font-size: 0.8em;
			}
			h2 {
				font-family: 'Barlow Condensed', sans-serif;
				margin-top: 2vw;
				font-size: 3.8em !important;
			}
		}
		a {
			position: relative;
			font-family: 'Poppins', sans-serif;
			border: 0.15vw solid white;
			padding: 1vw 2vw;
			margin-bottom: 2vw;
			overflow: hidden;
			transition: .5s;
			p {
				z-index: 2;
				position: relative;
				font-size: 0.8em;
				letter-spacing: 0.2vw;
				font-weight: 500;
				margin: 0;
			}
			&::after {
				content: '';
				position: absolute;
				left: -10%;
				top: -160%;
				width: 120%;
				height: 140%;
				background: white;
				transform: rotate(-4deg);
				transition: .5s;
			}
			&:hover::after {
				top: -20%;
			} 
			&:hover {
				color: #76DAB4;
				transition: .5s;
			}
		}
	}
`
export default PaboutConnectUsSection
