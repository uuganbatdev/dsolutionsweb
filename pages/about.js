import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination} from 'swiper';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const commentData = [
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
    },
    {
        profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Alex Regelman',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aperiam inventore, accusamus harum dolore labore asperiores, quisquam autem deserunt accusantium praesentium laboriosam rem. Asperiores natus non quia suscipit accusantium!",
        info: 'Co-founder, Colabrio'
    }
]

function About() {
   
    return (
    <AboutStyled>
        <div className='about-cover-container'>
            <h1>About Us</h1>
            <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="bg"/>
        </div>
        <div className='intro-container'>
            <h2>
                Who We Are ?
            </h2>
            <p>
                We develop creative solutions for small and big brands alike, build authentic product identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eu. Ultrices ut diam morbi risus dui, nec eget at lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sed.
            </p>
        </div>
            <div className='cards-container'>
                <div className='card'>
                    <img src="/bolt.png" alt="bolt"/>
                    <h3>Digital Marketing</h3>
                    <p>Tempore corrupti ore corrupti tempor temporibus fuga earum asperiores fugit laudantium.</p>
                </div>
                <div className='card colored'>
                    <img src="/mobile-phone.png" alt="bolt"/>
                    <h3>Web & App Development</h3>
                    <p>Tempore corrupti  ore corrupti tempor temporibus fuga earum asperiores fugit laudantium.</p>
                </div>
                <div className='card'>
                    <img src="/magic-wand.png" alt="bolt"/>
                    <h3>Web & App Development</h3>
                    <p>Tempore corrupti tore corrupti temporemporibus fuga earum asperiores fugit laudantium.</p>
                </div>
            </div>
            <div className='comments-container'>
                <div className='comment-left'>
                    <div className='play-button'>
                        <img src="play-btn.png" alt="playbtn"/>
                    </div>
                    <h2>
                        So that's us. There's no other way to put it.
                    </h2>
                    <div className='statistics'>
                        <div className='inner-statistics'>
                            <p>Project</p>
                            <h3>Consulting</h3>
                        </div>
                        <div className='inner-statistics'>
                            <p>App</p>
                            <h3>Development</h3>
                        </div>
                    </div>
                </div>
                <div className='comment-right'>
                    <div className='inner-right'>
                         <p>OUR HAPPY CLIENTS</p>
                        <h3>What Client's Say?</h3>
                        <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={true}
                        pagination={{ clickable: true }}
                        navigation
                        >
                        {commentData.map(slide => {
                            return <SwiperSlide className='slide'>                             
                                        <p className='text'>{slide.text}</p>
                                        <img src={slide.profileImg} alt={slide.profileImg}/>
                                        <h3>{slide.name}</h3>
                                        <p className='info'>{slide.info}</p>
                                    </SwiperSlide>
                                    })}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='our-team'>
                <div className='our-team-left'>
                    <p>Employees</p>
                    <h2>OUR TEAM.</h2>
                </div>
                <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={true}
                navigation
                >
                {commentData.map(slide => {
                    return <SwiperSlide className='our-team-slide'>                             
                                <img src={slide.profileImg} alt={slide.profileImg}/>
                                <h3>{slide.name}</h3>
                                <p className='info'>{slide.info}</p>
                               </SwiperSlide>
                            })}
                </Swiper>
            </div>
            <div className='our-purpose'>
                <div className='our-purpose-left'>
                    <img src="https://skepp.com/assets/Uploads/_resampled/ScaleWidthWyIxODAwIl0/IMG-2227.jpg" alt="office"/>
                </div>
                <div className='our-purpose-right'>
                    <h2>
                        About us.
                    </h2>
                    <p>Our creative Ad agency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players. </p>
                    <div className='our-purposes'>
                        <h3>Our Mission</h3>
                        <p>luctus massa ipsum at tempus eleifend congue lectus bibendum</p>
                    </div>
                    <div className='our-purposes'>
                        <h3>Our Goals</h3>
                        <p>luctus massa ipsum at tempus eleifend congue lectus bibendum</p>
                    </div>
                    <div className='our-purposes'>
                        <h3>Why Us?</h3>
                        <p>luctus massa ipsum at tempus eleifend congue lectus bibendum</p>
                    </div>
                </div>
            </div>
            <div className='our-clients'>
                <div className='our-clients-left'>
                     <p>CLIENTS</p>
                     <h2>OUR CLIENTS.</h2>
                </div>
                <div className='our-clients-right'>
                    <div className='client'>
                            <img src="apple.png" alt="CLOGO"/>
                    </div>
                    <div className='client'>
                            <img src="apple.png" alt="CLOGO"/>
                    </div>
                    <div className='client'>
                            <img src="apple.png" alt="CLOGO"/>
                    </div>
                    <div className='client'>
                            <img src="apple.png" alt="CLOGO"/>
                    </div>
                    <div className='client'>
                            <img src="apple.png" alt="CLOGO"/>
                    </div>
                    <div className='client'>
                            <img src="apple.png" alt="CLOGO"/>
                    </div>
                    <div className='client'>
                            <img src="apple.png" alt="CLOGO"/>
                    </div>
                    <div className='client'>
                            <img src="apple.png" alt="CLOGO"/>
                    </div>
                </div>
            </div>
            <div className='connet-us'>
                <div className='cs-left'>
                    <p>Let’s Talk</p>
                    <h2>ABOUT YOUR NEXT PROJECT.</h2>
                </div>
                <a href="#">
                    Get InTouch
                </a>
            </div>
    </AboutStyled>
    )
}

const AboutStyled = styled.div`
        width: 80%;
        margin: 0 auto;
        h2 {
                font-family: 'Poppins', sans-serif;
                letter-spacing: normal;
                font-size: 2em !important;
            }
        .about-cover-container {
            height: 80vh;
            img {
                width: 100vw;
                height: 80vh;
                object-fit: cover;
                position: absolute;
                top: 0;
                left: 0;
            }
            h1 {
                position: absolute;
                z-index: 10;
                left:50%;
                top: 25%;
                transform: translate(-50%,-50%);
                font-size: 5.5em;
                font-family: 'Poppins', sans-serif;
            }
        }
        .intro-container {
            display: flex;
            height: 23vw;
            align-items: center;
            h2 {
                width: 35%;
            }
            p {
                width:  65%;
                font-family: 'Poppins', sans-serif;
                font-weight: 200;
                opacity: 0.8;
            }
        }
        .cards-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .card {
            background:#151921;
            width: 31%;
            height: 20vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2vw;
            font-size: 1.2em;
            h3 {
                text-align: center;
                margin: 1vw;
                letter-spacing: 0.1vw;
            }
            img {
                width: 2vw;
            }
            p {
                line-height: 1.5vw;
                text-align: center;
                width: 80%;
            }
            &:nth-of-type(2) {
                background: #76dbb5;
                color: black;
            }
        }
        }
        .comments-container {
            height: 90vh;
            display: flex;
            padding: 10vw 0;
            .comment-left {
                width: 50%;
                display: flex;
                flex-direction: column;
                h2 {
                        width: 70% !important;
                        margin-bottom: 20vw; 
                    }
                .play-button {
                    width: 5vw;
                    height: 5vw;       
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }
                .statistics {
                    display: flex;
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
                    width: 50%;
                    display: flex;
                    padding: 1vw 1vw 2vw;
                    align-items: center;
                    justify-content: center;
                    height: 20vw;
                    .inner-right {
                        width: 80%;
                        background: #75dab4;
                    }
                }
        }
`
export default About