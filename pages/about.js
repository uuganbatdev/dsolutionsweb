import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination} from 'swiper';

SwiperCore.use([Navigation, Autoplay, Pagination]);

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

function About() {
   
    return (
    <AboutStyled>
        <div className='about-cover-container'>
            <h1>About Us</h1>
            <img src="http://innovationplans.com/idesign/avo2/avo-dark/img/slid/1.jpg" alt="bg"/>
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
                <img src="http://innovationplans.com/idesign/avo2/avo-dark/img/slid/1.jpg"  alt="bgiamge" className='bg-image'/>
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
                         <p className='card-title'>OUR HAPPY CLIENTS</p>
                        <h3 className='card-header'>What Client's Say?</h3>
                        <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={true}
                        pagination={{ clickable: true }}
                        >
                        {commentData.map(slide => {
                            return <SwiperSlide className='slide'>                             
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
                                    })}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='our-team'>
                <span className='left-bg'></span>
                <span className='right-bg'></span>

                <div className='our-team-left'>
                    <p>Employees</p>
                    <h2>OUR TEAM.</h2>
                </div>
                <Swiper
                spaceBetween={0}
                slidesPerView={4}
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
                opacity: 0.5;
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
        margin-bottom: 8vw;
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
        }
        .our-team {
            position: relative;
            .left-bg{
                width: 50vw;
                position: absolute;
                height: 10vw;
                background-color: #11141b;
                left: -10vw;
                top: 0;
            }
            .right-bg{
                width: 50vw;
                right: -10vw;
                position: absolute;
                height: 10vw;
                background-color: #1a1e25;
            }
        }
`
export default About