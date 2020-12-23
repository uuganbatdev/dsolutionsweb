import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination} from 'swiper';
SwiperCore.use([Navigation, Autoplay, Pagination]);

function PaboutOurTeamSection() {

	const commentData = [
		{
			profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			name: 'Alex Regelman',
			text: "Lorem ipsum dolaperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
			info: 'Co-founder, Colabrio',
		},
		{
			profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			name: 'Alex Regelman',
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
			info: 'Co-founder, Colabrio',
		},
		{
			profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			name: 'Alex Regelman',
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
			info: 'Co-founder, Colabrio',
		},
		{
			profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			name: 'Alex Regelman',
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
			info: 'Co-founder, Colabrio',
		}
	]

	return(
		<PaboutOurTeamSectionStyled>
                <span className='bg'></span>
				<div className='inner-our-team'>
					<div className='our-team-left'>
						<p>EMPLOYEES</p>
						<h2>OUR TEAM.</h2>
					</div>
					<Swiper
						spaceBetween={0}
						slidesPerView={4}
						loop={true}
						autoplay={true}
						navigation
					>
						{commentData.map(slide => 
							<SwiperSlide className='our-team-slide'>                             
								<div className='inner-slide'>
									<img src={slide.profileImg} alt={slide.profileImg}/>
									<h3>{slide.name}</h3>
									<p className='info'>{slide.info}</p>
								</div>
						   </SwiperSlide>
						)}
					</Swiper>
				</div>
		</PaboutOurTeamSectionStyled>
	)
}

const PaboutOurTeamSectionStyled = styled.div`

            position: relative;
			display: flex;
			height: 45vw;
            .bg {
                width: 100vw;
                position: absolute;
                height: 100%;
				background-color: #11141b;
				background-image: linear-gradient(to right , #11141b 50%, #1a1e25 50% 100%);
                left: -10vw;
                top: 0;
				z-index: 1;
            }
			.inner-our-team {
				position: absolute;
				z-index: 2;
				width: 100%;
				height: 66%;
				left: 0;
				top: 17.5%;
				.our-team-left {
					position: absolute;
					left: 0;
					width: 30%;
					height: 50%;
					p {
						color: #75dab4;
						font-size: 1.2em;
						letter-spacing: 1vw;
						font-weight: 500;
					}
					h2 {
						text-shadow: 0 0.5vw rgba(255, 255, 255, 0.05);
						margin-top: 1vw;
						font-size: 5em !important;
					}
				}
				.swiper-container {
					margin-left: 24vw;
					width: 100%;
					height: 100%;
					overflow: hidden;
					.swiper-button-prev,
					.swiper-button-next {
						z-index: 5;
						position: absolute;
						bottom: 2.5vw;
						left: 0;
						width: 4vw;
						height: 4vw;
						color: #75dab4;
						cursor: pointer;
						&::before {
							content: '';
							position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							height: 100%;
							border-radius: 50%;
							border: 0.1vw solid #75dab4;
						}
					}
					.swiper-button-prev {
						&::after {
							content: "◀";
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%,-50%);
						}	
					}
					.swiper-button-next {
						left: 4.5vw;
						&::after {
							content: "▶";
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%,-50%);
						}	
					}
					.swiper-wrapper {
						width: 100%;
						height: 100%;
						display: flex;
						.swiper-slide {
							padding: 1.2vw;
							flex-shrink: 0;
							flex-grow: 0;
							flex-basis: 25%;
							width: 100%;
							height: 100%;
							.inner-slide {
								width: 100%;
								height: 100%;
								background: #0c0f16;
								text-align: center;
								font-family: 'Poppins', sans-serif;
								h3 {
									font-size: 1em;
									margin-bottom: 0;
								}
								p {
									font-size: 0.9em;
									margin-top: 0.5vw;
									opacity: 0.5;
									font-weight: 400;
								}
							}
							img {
								width: 100%;
								height: 75%;
								object-fit: cover;
							}
						}
					}
					
				}
			}
`
export default PaboutOurTeamSection
