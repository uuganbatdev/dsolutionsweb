import styled from '@emotion/styled'
import InfoNum from './InfoNum'

function IntroVideoSection() {

     const infoNumsD = []
      return (

        <IntroVideoSectionStyled>
            <span className='background'></span>
            <div className='infoNumsContainer'>
                <InfoNum src='/smile.png' num='2400' text='Happy clients'/>
                <InfoNum src='/briefcase.png' num='133' text='Complete Projects'/>
                <InfoNum src='/cloud-computing.png' num='254k' text='Files Downloaded'/>
                <InfoNum src='/badge.png' num='46' text='Award Win'/>  
            </div>
            <video  poster="https://today.duke.edu/sites/default/files/styles/story_hero/public/coding_HERO.jpg?itok=F8YWeHdH"
              width='500' height='400' >
                Sorry, your browser doesn't support embedded videos.
            </video>
        </IntroVideoSectionStyled>
    )
}   

const IntroVideoSectionStyled = styled.div`
    width: 65%;
    margin: 8vw auto;
    display: flex;
    flex-direction: column;
    position: relative;
    .background {
        position: absolute;
        left: -35%;
        top: -10%;
        width: 130vw;
        height: 100%;
        z-index: -1;
        background: #11141b;
    }
    .infoNumsContainer {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .infoNumsContainer:last-child{
        border-right: none !important;
    }
    video {
        align-self: center;
        background: #76dbb5;
        position: relative;
        width: 70%;
        height: 30vw;
        margin: 3vw;
        top: 5vw;
        border-radius: 1vw;
        box-shadow: 0px 2vw 2.5vw 3vw rgba(52,60,70,0.1);
        object-fit: cover;
    }
`
export default IntroVideoSection