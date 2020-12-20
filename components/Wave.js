import styled from '@emotion/styled'

function Wave() {
    
    return(
        <WaveStyled>
            <iframe src="wave.html" ></iframe>
        </WaveStyled>
    )
}


const WaveStyled = styled.div`
    height: 100vw;
    width: 100vw;
    iframe {
        border: none;
        width: 100vw;
        height: 100vh;
        position: absolute;
    }
`

export default Wave
