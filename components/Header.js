import styled from '@emotion/styled'
import Link from 'next/link'
import {useEffect } from 'react' 

function Header() {
    useEffect(() => {
        let header = document.querySelector('.header');
        window.onscroll = () => {
            if( window.scrollY > window.innerHeight / 10 ) {
               header.classList.add('fill-header');
            } else header.classList.remove('fill-header')
        }
    }) 
      return (

        <HeaderStyled>
            <div className='header'>
                <div className='inner-header'>
                <img src="bolt.png" alt="logo"/>
                <nav>
                    <li>
                        <Link href='/'>
                            <a>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a>
                                About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>
                                Contact
                            </a>
                        </Link>
                    </li>
                    
                </nav>
                </div>
            </div>
        </HeaderStyled>

    )
}   

const HeaderStyled = styled.div`
      position: fixed;
      z-index: 100000;
      width: 100%;
  .header {
      width: 100%;
      border-bottom: 0.1vw solid rgba(255,255,255,0.3);
      height: 5.5vw;
      top: 0;
      transition: 0.5s;
  }
  .fill-header {
    background: #11141b;
    transition: 0.5s;
  }
  .inner-header {
      z-index: 100000;
      margin: 0 auto;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    height: 100%;
  }
  img {
      margin: 1.5vw 0;
      height: 60%;
      object-fit: contain;
  }
  nav {
      display: flex;
      list-style: none;
      li {
         a {
             font-family: 'Poppins',sans-serif;
             padding: 1vw 1.4vw;
             display: inline-block;
             height: 100%;
             width: 100%;
             font-size: 0.75em;
             display: inline-flex;
             align-items: center;
             font-weight: 500;
             letter-spacing: 0.1vw;
         } 
      }
  }
  
`
export default Header
