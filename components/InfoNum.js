import styled from '@emotion/styled'

function InfoNum({src, num, text}) {

      return (
        <InfoNumStyled>
           <img src={src} alt={src}/>
           <p className='num'>{num}</p>
           <p>{text}</p>
        </InfoNumStyled>
    )
}   

const InfoNumStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    p {
        font-size: 1vw;
        margin: 0.6vw;
    }
    .num {
        font-size: 2vw;
    }
    img {
        position: absolute;
        opacity: 0.1;
        width: 3vw;
    }
    border-right: 0.1vw solid #76dbb5;
    :nth-child(4n) {
        border-right: none;        
    }
`
export default InfoNum