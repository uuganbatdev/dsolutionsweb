import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import {useEffect, useState, useRef} from 'react';
import SectionHeading from './SectionHeading.js';

SwiperCore.use([Navigation]);

function OurWorkSection() {
    const [decideSlidePV, setdecideSlidePV] = useState(3);

    useEffect(() => {
        if(window.innerHeight > window.innerWidth) {
             setdecideSlidePV(1);
			return;
        }  
    },[])

	let descOpacity = () => {
		let descs = document.querySelectorAll('.description');
		for ( let i = 0; i < descs.length; i++ ) {
			descs[i].style.opacity = 0;
		}

		setTimeout(() => {
			for ( let i = 0; i < descs.length; i++ ) {
				descs[i].style.opacity = 1;
			}
		},[600]);
	}
    return (
        <OurWorskSectionStyled>
			<div className='inner-container'>
				<SectionHeading 
					heading={'our works'}
					headingTop={'portfolio'}
				/>
					<Swiper
						spaceBetween={30}
						slidesPerView={decideSlidePV}
						loop={true}
						speed={1000}
						onSlideChange={descOpacity}
						navigation
					>
					  <span slot="container-start" className='container-start'></span>
					  <span slot="container-end" className='container-end'></span>
						<SwiperSlide className='slide'>                             
							<div className='inner-slide'>
								<img src='http://avo.smartinnovates.com/wp-content/uploads/2020/08/01-1.jpg' />
								<div className='description'>
									<p>art & illustration</p>
									<h3>Inspiring new space</h3>
								</div>
							 </div>
						</SwiperSlide>
						<SwiperSlide className='slide'>                             
							<div className='inner-slide'>
								<img src='http://avo.smartinnovates.com/wp-content/uploads/2020/08/05.jpg' />
								<div className='description'>
									<p>art & illustration</p>
									<h3>Inspiring new space</h3>
								</div>
							 </div>
						</SwiperSlide>
						<SwiperSlide className='slide'>                             
							<div className='inner-slide'>
								<img src='http://avo.smartinnovates.com/wp-content/uploads/2020/08/04.jpg' />
								<div className='description'>
									<p>art & illustration</p>
									<h3>Inspiring new space</h3>
								</div>
							 </div>
						</SwiperSlide>
					</Swiper>
			</div>
        </OurWorskSectionStyled>
    )
}   

const OurWorskSectionStyled = styled.div`
    width: 100%;
	margin-bottom: 100px;
	.inner-container {
		width: 1200px;
		margin: 0 auto;
	}
    h2 {
        margin: 0;
        text-align: center;
        text-shadow: 0 8px rgba(255, 255, 255, 0.05);
        margin-bottom: 5vw;
    }
    .slide {
        display: flex;
        flex-shrink: 0;
        .inner-slide {
            width: 100%;
            margin: 0 auto;
            img {
                width: 100%;
				height: 480px;
                object-fit: cover;
            }
        }
        .description {
			opacity: 1;
			transition: 0.3s;
			text-align: center;
            width: 100%;
			height: 80px;
            margin: 0;
			margin-top: 5%;
			font-family: "Poppins",sans-serif;
            p {
				color: #75DAB4;
				font-size: 12px;
				font-weight: 500;
				text-transform: uppercase;
				letter-spacing: 2px;
				margin-bottom: 10px;
            }
            h3 {
				font-weight: 600;
				font-size: 1.1rem;
                margin: 0;
            }

        }
    }
    .swiper-wrapper {
        width: 100%;
        display: flex;
        padding: 0;
    }
	.container-start {
		position: absolute;
		height: 100px;
		width: 200px;
		background: #0c0f16;
		left: 300px;
		bottom: 0;
		z-index: 9;
	}
	.container-end {
		position: absolute;
		height: 100px;
		width: 200px;
		background: #0c0f16;
		right: 300px;
		bottom: 0;
		z-index: 9;
	}
    .swiper-container {
        width: 1800px;
		overflow: hidden;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
		transform: translateX(-300px);
		&::before {
			content: '';
			position: absolute;
			width: 300px;
			height: 100%;
			background: #0c0f16;
			left: 0;
			top: 0;
			z-index: 2;
		}

		&::after {
			content: '';
			position: absolute;
			width: 300px;
			height: 100%;
			background: #0c0f16;
			right: 0;
			top: 0;
			z-index: 2;
		}
    }
    .swiper-button-prev,
    .swiper-button-next {
        width: 60px;
        height: 40px;
        position: absolute;
		top: 90%;
        z-index: 10;
        cursor: pointer;
        font-size: 1vw;
		color: white;
    } 
    .swiper-button-prev {
        left: 300px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
		z-index: 100;
        &:after {
		color: white;
            content: 'PREV';
			text-transform: uppercase;
			letter-spacing: 4px;
			font-size: 13px;
			font-weight: 300;
            position: absolute;
        }
        &:before {
            content: '';
            position: absolute;
			left: 0;
			height: 100%;
			width: 25px;
			background: #1d2026;
        }
    }
    .swiper-button-next {
        right: 300px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        &:after {
		color: white;
            content: 'NEXT';
			text-transform: uppercase;
			letter-spacing: 4px;
			font-size: 13px;
			font-weight: 300;
            position: absolute;
        }
        &:before {
            content: '';
            position: absolute;
			right: 0;
			height: 100%;
			width: 25px;
			background: #1d2026;
        }
    }

@media only screen and (orientation:portrait) {
    h2 {
        margin: 5vh !important;
    }
	width: 100vw;
	.inner-container {
		width: 100% !important;
	}
	.swiper-container {
		transform: translateX(0);
		width: 100%;
		&: before {
			display: none;
		}
		&: after {
			display: none;
		}
	}
	.swiper-button-prev {
		 left: 0;
	}
	.swiper-button-next {
		 right: 0;
	}
	.container-start, .container-end {
		display: none;
	}
}
`
export default OurWorkSection
