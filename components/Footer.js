import styled from '@emotion/styled'

function Footer() {

      return (

        <FooterStyled>
            <span className='coloredbg'></span>
            <div className='left'>
                <img src="bolt.png" alt=""/>
                <div className='company-location'>
                    <p><span>Email:</span>diverseSolution@diversolutions.com</p>
                    <p><span>Address:</span>BGD, 3khoroo, 71-81</p>
                    <p><span>Phone:</span>+976 95941551</p>
                </div>
                <h3 class='half-styled'>
                    <span></span>
                    FOLLOW US
                </h3>
                <div className='social-accounts'>
                    <a href="#">
                        <img src="facebook-logo.png" alt="facebook"/>
                    </a>
                    <a href="#">
                        <img src="instagram.png" alt="instagram"/>
                    </a>
                    <a href="#">
                        <img src="twitter.png" alt="twitter"/>
                    </a>
                </div>
            </div>
            <div className='right'>
                <h3 class='half-styled'>
                <span></span>
                 NEWS LATTER
                </h3>
                <div className='email-box-container'>
                    <p>Sign up for subscribe out newsletter!</p>
                    <div className='inner-box'>
                        <input type="email" placeholder='Your Email'/>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <h3 class='half-styled'>
                    <span></span>
                    SOCIAL POSTS
                </h3>
            </div>
            <div className='bottom'>
                © 2020 by DIVERSE SOLUTIONS.
            </div>
        </FooterStyled>
    )
}   

const FooterStyled = styled.div`
    width: 65%;
    margin: 0 auto;
    padding-top: 5vw ;
    padding-bottom: 5vw ;
    font-size: 0.9vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    .coloredbg {
        z-index: -1;
        position: absolute;
        background: #151921;
        width: 50vw;
        top: 0;
        right: 50%;
        height: 100%;
    }
    .left {
        
        h3 {
            margin: 2vw 0;
        }
        width: 50%;
        height: 15vw;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        img {
            width: 3vw;
            height: 3vw;
            object-fit: contain;
            margin-bottom: 1vw;
        }
        .company-location {
            span {
                font-weight: bold;
                margin-right: 1vw;
            }
        }
        .social-accounts {
            display: flex;
            justify-content: left;
            img {
                width: 1.2vw;
                height: 1.2vw;
                object-fit: contain;
                margin: 0 1vw;
            }
        }
    }
    .right {
        width: 35%;
        height: 20vw;
        display: flex;
        flex-direction: column;
        h3 {
            margin: 0;
        }
        .email-box-container {
            margin: 1.5vw 0 2vw 0;
            p {
                font-size: 0.8vw;
            }
            .inner-box {
                display: flex;
                * {
                    border: none;
                }
                input {
                    padding: 0.5vw;
                    background: #14171e;
                    color: white;
                    width: 70%;
                    font-size: 1vw;
                }
                button {
                    font-size: 1vw;
                    width: 30%;
                    padding: 0.7vw;
                    background: #16191f;
                    color: #75dab4;
                }
            }
        }

        h3 {
        }
    }
    .half-styled {
        position: relative;
            font-size: 0.9vw;
            span {
                display: inline-block;
                background:#1d2027;
                width: 4vw;
                height: 1.7vw;
                position: absolute;
                z-index: -1;
                top: -0.25vw;
                left: -1vw;
            }
    }
    .bottom {
        position: absolute;
        bottom: 0;
        background: #13161d;
        width: 100%;
        height: 5vw;
        display: grid;
        place-items: center;
        font-size: 0.6vw;
    }
`
export default Footer