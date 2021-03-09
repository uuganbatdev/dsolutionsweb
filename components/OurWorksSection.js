import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import {useEffect, useState} from 'react';
import SectionHeading from './SectionHeading.js';

SwiperCore.use([Navigation]);

function OurWorkSection() {
    const [decideSlidePV, setdecideSlidePV] = useState(1);
    useEffect(() => {
        if(window.innerHeight < window.innerWidth) {
             setdecideSlidePV(4);
			return;
        }  
    })
    const projectsSlides = [
        {
            imgSrc: 'https://today.duke.edu/sites/default/files/styles/story_hero/public/coding_HERO.jpg?itok=F8YWeHdH',
            title: 'ART & ILLUSTRATION',
            text: 'Innovation and Crafts'
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6_GJY-xC-ZZgrJWoMusr377u6i1guW9JwYg&usqp=CAU',
            title: 'ART & ILLUSTRATION',
            text: 'Innovation and Crafts'
        },
        {
            imgSrc: 'https://www.hiretheyouth.org/wp-content/uploads/2020/03/7-Places-to-Learn-to-Code-for-Free.jpg',
            title: 'ART & ILLUSTRATION',
            text: 'Innovation and Crafts'
        },
        {
            imgSrc: 'https://www.perforce.com/sites/default/files/image/2018-12/image-blog-best-practices-code-reviews.jpg',
            title: 'ART & ILLUSTRATION',
            text: 'Innovation and Crafts'
        },
        {
            imgSrc: 'https://miro.medium.com/max/640/1*XthWUtD_NU-VJ7ESA2qX3A.jpeg',
            title: 'ART & ILLUSTRATION',
            text: 'Innovation and Crafts'
        },
        {
            imgSrc: 'https://today.duke.edu/sites/default/files/styles/story_hero/public/coding_HERO.jpg?itok=F8YWeHdH',
            title: 'ART & ILLUSTRATION',
            text: 'Innovation and Crafts'
        }
    ]

    return (
        <OurWorskSectionStyled>
			<div className='inner-container'>
				<SectionHeading 
					heading={'our works'}
					headingTop={'portfolio'}
				/>
					<Swiper
						spaceBetween={0}
						slidesPerView={1}
						loop={true}
						navigation
					>
						<SwiperSlide className='slide'>                             
							<div className='inner-slide'>
								<img src='https://today.duke.edu/sites/default/files/styles/story_hero/public/coding_HERO.jpg?itok=F8YWeHdH' />
								<div className='description'>
									<p>'ART & ILLUSTRATION'</p>
									<h3>'Innovation and Crafts'</h3>
								</div>
							 </div>
						</SwiperSlide>
						<SwiperSlide className='slide'>                             
							<div className='inner-slide'>
								<img src='https://today.duke.edu/sites/default/files/styles/story_hero/public/coding_HERO.jpg?itok=F8YWeHdH' />
								<div className='description'>
									<p>ART & ILLUSTRATION</p>
									<h3>Innovation and Crafts</h3>
								</div>
							 </div>
						</SwiperSlide>
					</Swiper>
			</div>
        </OurWorskSectionStyled>
    )
}   

const OurWorskSectionStyled = styled.div`
@media only screen and (orientation:portrait) {
    h2 {
        margin: 5vh !important;
    }
    .slide {
		height: auto !important;
        flex-basis: 100% !important;
		font-size: 1.2em !important;
        .description {
            padding-bottom: 5vh !important;
        }
    }
}
    width: 100%;
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
        flex-basis: 25%;
        height: 35vw;
        .inner-slide {
            
            width: 90%;
            border-radius: 1vw;
            margin: 0 auto;
            background: #13161d;
            img {
                border: 0.1vw solid #75dab4;
                border-top-left-radius: 1vw;
                border-top-right-radius: 1vw;                
                width: 100%;
                height: 77%;
                object-fit: cover;
            }
        }
        p {
			margin-bottom: 0 !important;
            color: #75dab4;
        }
        .description {
            width: 80%;
            margin: 0 auto 8vw;
            p {

                letter-spacing: 0.1vw;
                font-weight: 700;
            }
            h3 {
                margin: 0;
            }

        }
    }
    .swiper-wrapper {
        width: 100%;
        display: flex;
        padding: 0;
    }
    .swiper-container {
        width: 1200px;
		overflow: hidden;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .swiper-button-prev,
    .swiper-button-next {
        width: 3.5vw;
        height: 3.5vw;
        background: red;
        position: absolute;
        z-index: 10;
        background: white;
        cursor: pointer;
        font-size: 1vw;
    } 
    .swiper-button-prev {
        left: 0.5vw;
        color: black;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        :after {
            content: '⟵';
            position: absolute;

        }
    }
    .swiper-button-next {
        right: 0.5vw;
        color: black;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        :after {
            content: '⟶';
            position: absolute;

        }
    }

`
export default OurWorkSection
