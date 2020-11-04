import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination} from 'swiper';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const homeBigSlides = [
    {
        src: 'https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Lorem, ipsum dolor',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magni error qui commodi nemo voluptates et inventore ipsa voluptate facilis atque tempore, quia accusantium illum explicabo quod perspiciatis suscipit! Voluptates!'
    },
    {
        src: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Lorem, ipsum dolor.',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magni error qui commodi nemo voluptates et inventore ipsa voluptate facilis atque tempore, quia accusantium illum explicabo quod perspiciatis suscipit! Voluptates!'
    },
    {
        src: 'https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Lorem, ipsum dolor.',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At magni error qui commodi nemo voluptates et inventore ipsa voluptate facilis atque tempore, quia accusantium illum explicabo quod perspiciatis suscipit! Voluptates!'
    }
]
function HomeSlidingSection() {

    return (

        <HomeSlidingSectionStyled >
                <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={true}
                navigation
                >
                {homeBigSlides.map(slide => {  
                    return <SwiperSlide className='slide'>                             
                            <img src={slide.src} alt={slide.src}/>
                            <div className='slide-desc'>
                                <h2>
                                    {slide.title}
                                </h2>
                                <p>
                                    {slide.text}
                                </p>
                            </div>
                           </SwiperSlide>
                        })}
                </Swiper>
        </HomeSlidingSectionStyled>
    )
}   

const HomeSlidingSectionStyled = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    .slide {
        width: 100%;
        height: 100%;
        position: relative;
        img {
            left:0;
            top: 0;
            width: 100vw;
            height: 100%;
            object-fit: cover;
        }
        .slide-desc {
            width: 35%;
            position: absolute;
            top: 70%;
            left: 30%;
            background: #11141b;
            transform: translate(-50%,-50%);
            padding: 3vw;
            border-radius: 7vw;
            border-top-right-radius: unset;
        }
        h2 {
                font-size: 4vw;
                letter-spacing: 0.2vw;
                margin: 0;
                color: #75dab4;
        }
        p {
            letter-spacing: 0.05vw;
            line-height: 1.3vw;
        }
    }
    .swiper-wrapper {
        display: flex;
        flex-grow: 0;
        flex-shrink: 0;
        width: 100%;
        height: 100vh;
        padding: 0;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
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
        bottom: 3vw;
        right: 3vw;
    } 
    .swiper-button-prev {
        bottom: 7vw;
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
export default HomeSlidingSection