import styled from '@emotion/styled'

function AboutUsSection() {

      return (

        <AboutUsSectionStyled>
            <div className='left'>
                <h2>ABOUT US</h2>
                <h3>Our 20 years working experience make a different business agency services.</h3>
                <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Obcaecati perspiciatis sequi eius dicta molestiae. Animi voluptas
                      distinctio quod veritatis, vero eveniet laudantium consectetur sit expedita 
                      iusto quaerat sapiente, perferendis adipisci.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, velit.
                </p>
                <a href="#">
                    KNOW MORE
                </a>
            </div>
            <div className='right'>
                <div className='image-wrapper'>
                    <img src="https://www.alliedwriters.com/wp-content/uploads/2015/09/article-writing-guide-from-laptop-862x574.jpg" alt="laptop"/>
                </div>
                <div className='long-card'>
                    <div className='long-card-left'>
                        <h3>Lorem</h3>
                        <p>Lorem, ipsum</p>
                    </div>
                    <div className='long-card-right'>
                        <h3>Lorem</h3>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>
            </div>
        </AboutUsSectionStyled>
    )
}   

const AboutUsSectionStyled = styled.div`
@media only screen and (orientation:portrait) {
    flex-direction: column;
    width: 95% !important;
    h2 {
        text-align: center;
    }
    .left,
    .right {
       width: 100% !important;
    }
    .left * {
        width: 100% !important;
    }
    .left {
        p {
            line-height: normal !important;
        }
    }
    .right {
        margin: 5vh 0!important;
        .image-wrapper {
            img {
                border-radius: 2vh !important;
            }
        }
        .long-card {
            flex-direction: column;
            border-radius: 2vh !important;
            left: auto !important;
            width: 90% !important;
            top: 50% !important;
            padding: 3vh  0!important;
            .long-card-left,
            .long-card-right {
                padding: 2vh 0!important;
                width: 100% !important;
            }
            .long-card-right {
                
                border-top: 0.1vh solid #75dab4 !important;
            
            }

        }
    }
}
    width: 80%;
    margin: 6vw auto;
    display:flex;
    .left {
        width: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: 1.5em;
        p {
            width: 95%;
        }
        h2 {
            font-size: 1vw !important;
            font-weight: 200;
        }
        h3 {
            font-size: 1.5em;
            font-weight: 400;
            color: #75dab4;
            width: 90%;
        }
        a {
            letter-spacing: 0.1vw;
            font-size: 0.7em;
            display: inline-block;
            white-space: nowrap;
            width: 3vw;
            flex-grow: 0;
            padding: 0.5vw;
            background:#1f2229;
            z-index: 2;
        }
    }
    .right {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .image-wrapper {
            width: 95%;
            img {
                width:100%;
                height: 100%;
                object-fit: cover;
                border-radius: 1vw;
            }
        }
        .long-card {
            position: absolute;
            top: 70%;
            left: 10%;
            display: flex;
            width: 95%;
            background: #11141b;
            padding: 4vw 1vw;
            border-radius: 1vw;
            box-shadow: 0px 0.6vw 1.2vw -0.3vw rgba(52, 60, 70, 0.1);
            .long-card-left,
            .long-card-right {
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                * {
                    margin: 0;
                }
            }
        }
        
    }
`
export default AboutUsSection
