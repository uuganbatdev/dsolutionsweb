import styled from '@emotion/styled'
import BigSlide from './BigSlide'
import {useState, useEffect} from 'react'

const homeBigSlides = [
    {
        src: 'https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0',
        title: 'sda',
        text: 'sdaa'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2019/08/18/22/57/dog-4415171_960_720.jpg',
        title: 'sda1',
        text: 'sdaa1'
    },
    {
        src: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        title: 'sda2',
        text: 'sdaa2'
    }
]

function HomeSlidingSection() {
    let slideLength = homeBigSlides.length;
    const [counter, setCounter] = useState(0);
    


    if(counter == slideLength) {
        setCounter(0);
    }
    if(counter == -1) {
        setCounter(slideLength - 1);
    }

    useEffect(() => {
        const sliding = setInterval(() => {    
              setCounter(counter + 1);    
            }, 3000);               // clearing interval
        return () => clearInterval(sliding);
      });

      return (

        <HomeSlidingSectionStyled className='homeSlider'>
            <BigSlide data={homeBigSlides[counter]}/>
            <button onClick={() => setCounter(counter + 1)}>a</button>
            <button onClick={() => setCounter(counter - 1)}>b</button>
            <p>{counter + 1}/{slideLength}</p>
        </HomeSlidingSectionStyled>
    )
}   

const HomeSlidingSectionStyled = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    button {
        z-index: 1000;
        width: 100px;
        height: 100px;
        position: absolute;
        &:nth-child(2) {
            margin-left: 200px;
        }
    }
    p {
        z-index: 1000;
        width: 100px;
        height: 100px;
        position: absolute;
        margin-left: 300px;
    }
`
export default HomeSlidingSection