import styled from '@emotion/styled'
import LittleCard from './LittleCard.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination} from 'swiper';
SwiperCore.use([Navigation, Autoplay, Pagination]);

function PaboutCommentSection() {

	const commentData = [
		{
			profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			name: 'Alex Regelman',
			text: "Lorem ipsum dolaperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
			info: 'Co-founder, Colabrio'
		},
		{
			profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			name: 'Alex Regelman',
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
			info: 'Co-founder, Colabrio'
		},
		{
			profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			name: 'Alex Regelman',
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
			info: 'Co-founder, Colabrio'
		},
		{
			profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			name: 'Alex Regelman',
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
			info: 'Co-founder, Colabrio'
		}
	]

	const statistics = [
		{
			img: '/bolt.png',
			parag: 'CREATIVE DESIGN'
		},	
		{
			img: '/bolt.png',
			parag: 'PIXEL PERFECT'
		},
		{
			img: '/bolt.png',
			parag: 'HEIGHT PERFORMANCE'
		}
	]

	return(
		<PaboutCommentSectionStyled>
                <img src="http://innovationplans.com/idesign/avo2/avo-dark/img/slid/1.jpg"  alt="bgiamge" className='bg-image'/>
                <div className='comment-left'>
                    <div className='play-button'>
                        <img src="play-btn.png" alt="playbtn"/>
                    </div>
                    <h2>
                        So that's us. There's no other way to put it.
                    </h2>
                    <div className='statistics'>
						{statistics.map(({img, parag}) => 
							<LittleCard img={img} parag={parag} />
						)}
                    </div>
                </div>
            <div className='comment-right'>
                <div className='inner-right'>
                    <p className='card-title'>OUR HAPPY CLIENTS</p>
                    <h3 className='card-header'>What Client's Say?</h3>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={true}
                        pagination={{ clickable: true }}
                    >
                        {commentData.map(slide => 
                            <SwiperSlide className='slide'>                             
                                <p className='text'>{slide.text}</p>
                                <hr/>
                                <div className='swiper-bottom'>
                                    <img src={slide.profileImg} alt={slide.profileImg}/>
                                    <div className='swiper-bottom-right'>
                                        <h3>{slide.name}</h3>
                                        <p className='info'>{slide.info}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    </div>
                </div>
		</PaboutCommentSectionStyled>
	)
}

const PaboutCommentSectionStyled = styled.div`

            height: 90vh;
            display: flex;
            padding: 8vw 0;
            position: relative;
            margin-bottom: 8vw;
            .bg-image {
                left: -10vw;
                top: 0;
                position: absolute;
                height: 70vh;
                width: 100vw;
                object-fit: cover;
                opacity: 0.1;
            }
            .comment-left {
                z-index: 10;
                width: 50%;
                display: flex;
                flex-direction: column;
                h2 {    
                        font-weight: 800;
                        margin-bottom: 15vw; 
                        font-size: 2.5em !important;
                    }
                .play-button {
                    width: 5vw;
                    height: 5vw;
                    border-radius: 50%;       
                    position: relative;
                    z-index: 3;
                    cursor: pointer;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        z-index: 3;
                    }
                    :before {
                        content: '';
                        position: absolute;
                        width: 130%;
                        height: 130%;
                        left: -15%;
                        top: -15%;
                        z-index: -2;
                        border-radius: 50%;
                        background-color:#494b4f;
                        opacity: 0.3;
                    }
                    :after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left:0;
                        z-index: -1;
                        border-radius: 50%;
                        background: #83debc;
                    }
                }
                .statistics {
                    display: flex;
					justify-content: center;
                    .inner-statistics {
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        h3 {
                            margin: 0;
                        }
                    }
                }
            }
            .comment-right {
                z-index: 10;
                    width: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: right;
                    height: 30vw;

                    .inner-right {
                        padding: 4vw 2.5vw;
                        width: 80%;
                        background: #75dab4;
                        color: black;
                        font-family: 'Poppins', sans-serif;
                        .card-title {
                            font-size: 0.75em;
                            letter-spacing: 0.3vw;
                        }
                        .card-header {
                            margin: 0;
                            font-size: 2em;
                        }
                        .swiper-container {
                            width: 100%;
                            height: 22vw;
                            overflow: hidden;
                            position: relative;
                            padding-bottom: 2vw;
                            .swiper-wrapper {
                                width: 100%;
                                height: 100%;
                                display: flex;
                                .swiper-slide {
                                    flex-shrink: 0;
                                    flex-grow: 0;
                                    flex-basis: 100%;
                                    width: 100%;
                                    height: 100%;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                    .text {
                                        font-family: 'Poppins', sans-serif;
                                        font-weight: 300;
                                        opacity: 0.8;
                                    }
                                    hr {
                                        opacity: 0.1;
                                        width: 100%;
                                        height: 0.07vw;
                                        border: none;
                                        background: grey;
                                        margin-bottom: 2vw;
                                    }
                                    .swiper-bottom {
                                        display: flex;
                                        justify-content: left;
                                        align-items: center;
                                        img {
                                            width: 4.5vw;
                                            height: 4.5vw;
                                            border-radius: 50%;
                                            object-fit: cover;
                                        }   
                                        .swiper-bottom-right {
                                            margin-left: 1.5vw; 
                                            * {
                                                margin: 0;
                                            }
                                        }
                                    }
                                }
                            }
                            .swiper-pagination {
                                position: absolute;
                                z-index: 100;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                bottom: 0;
                                right: 0;
                                .swiper-pagination-bullet {
                                    width: 0.5vw;
                                    height: 0.5vw;
                                    border: 0.1vw solid black; 
                                    border-radius: 50%;
                                    margin: 0 0.2vw ; 
                                    opacity: 0.5;
                                    transition: 0.3s;
                                    cursor: pointer;
                                }
                                .swiper-pagination-bullet-active {
                                    transition: 0.3s;
                                    background: black;
                                    opacity: 1 !important;
                                }
                            }

                        }
                    }
                }
`
export default PaboutCommentSection
