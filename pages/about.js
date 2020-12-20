import styled from '@emotion/styled'
import PaboutIntroSection from '../components/PaboutIntroSection.js'
import PaboutCommentSection from '../components/PaboutCommentSection.js'
import PaboutOurTeamSection from '../components/PaboutOurTeamSection.js'
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
        <PaboutIntroSection />
		<PaboutCommentSection />
		<PaboutOurTeamSection />
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
`
export default About
