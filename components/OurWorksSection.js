import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';

SwiperCore.use([Navigation]);

function OurWorkSection() {

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
            <h2>OUR WORKS.</h2>
                <Swiper
                spaceBetween={0}
                slidesPerView={4}
                loop={true}
                navigation
                >
                {projectsSlides.map(slide => {
                    return <SwiperSlide className='slide'>                             
                                <div className='inner-slide'>
                                    <img src={slide.imgSrc} alt={slide.imgSrc}/>
                                    <div className='description'>
                                        <p>{slide.text}</p>
                                        <h3>{slide.title}</h3>
                                    </div>
                                 </div>
                               </SwiperSlide>
                            })}
                </Swiper>
        </OurWorskSectionStyled>
    )
}   

const OurWorskSectionStyled = styled.div`
    width: 100vw;
    margin: 5vw auto;
    display: flex;
    flex-direction: column;
    h2 {
        margin: 0;
        font-size: 4vw;
        text-align: center;
        text-shadow: 0 8px rgba(255, 255, 255, 0.05);
        margin-bottom: 5vw;
    }
    .slide {
        display: flex;
        flex-shrink: 0;
        flex-basis: 25%;
        .inner-slide {
            
            width: 95%;
            border-radius: 1vw;
            margin: 0 auto;
            background: #13161d;
            padding-bottom: 1vw;
            img {
                border: 0.1vw solid #75dab4;
                border-top-left-radius: 1vw;
                border-top-right-radius: 1vw;                
                width: 100%;
                height: 75%;
                object-fit: cover;
            }
        }
        p {
            color: #75dab4;
        }
        .description {
            width: 80%;
            margin: 0 auto;
        }
    }
    .swiper-wrapper {
        width: 100%;
        display: flex;
        padding: 0;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
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