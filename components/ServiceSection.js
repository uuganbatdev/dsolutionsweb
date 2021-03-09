import styled from '@emotion/styled'
import CustomCard from './CustomCard.js'
import SectionHeading from './SectionHeading.js'


function ServiceSection() {

      return (
        <ServiceSectionStyled>
			<div className='inner-container'>
				<SectionHeading
					heading={'services'}
					headingTop={'best features'}
				/>
				<div className='cards-container'>
					<div className='imaged-card'>
						<div className='inner-imaged-card'>
							<span>Best Of</span>
							<span>Our Features</span>
						</div>
					</div>
					<CustomCard
						imgSource={'/bolt.png'}
						firstHead={'Graphic'}
						secondHead={'Clean Design'}
						text={'Tempore corrupti temporibus fuga earum asperiores fugit.'}
						bgColor={'#181b21'}
					/>
					<CustomCard
						imgSource={'/bolt.png'}
						firstHead={'Web &'}
						secondHead={'Mobile Design'}
						text={'Tempore corrupti temporibus fuga earum asperiores fugit.'}
						bgColor={'#1a1e25'}
					/>
					<CustomCard
						imgSource={'/bolt.png'}
						firstHead={'Social'}
						secondHead={'Media Marketing'}
						text={'Tempore corrupti temporibus fuga earum asperiores fugit.'}
						bgColor={'#20242c'}
					/>
				</div>
			</div>
        </ServiceSectionStyled>
    )
}   

const ServiceSectionStyled = styled.div`
    @media only screen and (orientation:portrait) {
	margin-top: 0 !important;
        width: 95% !important;
        padding: 0!important;
        .cards-container {
           flex-direction: column;
           width: 100% !important;  
        }
        h2 {

            margin: 5vh auto!important;
        }
        a {
			padding: 1vw !important;
            width: 8vh !important;
        }
    }
    width: 100%;
    overflow-x: hidden;
	.inner-container {
		width: 1200px;
		margin: 0 auto;
	}
    .cards-container {
        width: 100%;
        display: flex;
		margin: 6% 0;
    }
	.imaged-card {
		width: 25%;
		position: relative;
		background-image: url("http://avo.smartinnovates.com/wp-content/uploads/2020/09/1-2.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		.inner-imaged-card {
			width: 100%;
			height: 100%;
			padding: 30% 10%;
			background: rgba(12, 15, 22, 0.8);
			span {
				display: block;
				font-family: 'Barlow Condensed',sans-serif;
				font-weight: 500;
				line-height: 1.5;
				font-size: 2rem;
			}
		}
	}

`
export default ServiceSection
