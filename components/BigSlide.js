import styled from '@emotion/styled'
import Image from 'next/image'
import { useEffect } from 'react'

function BigSlide({data}) {

    return (
      <BigSlideStyled>
          <img src={data.src}/>          
          <div className='description' >
            <h2>{data.title}</h2>
            <p>{data.text}</p>        
          </div>       
      </BigSlideStyled>  
    )
} 

const BigSlideStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .description {
        width: 65%;
        padding: 0 10%;
        background: blue;
        z-index: 2; 
        position: absolute;
        color: white;
    }

`
export default BigSlide