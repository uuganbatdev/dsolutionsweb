import styled from '@emotion/styled'
import Link from 'next/link'

function Header() {

      return (

        <HeaderStyled>
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
                    <Link href='/'>
                        <a>
                            Showcases
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
                            Portfolio
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
        </HeaderStyled>
    )
}   

const HeaderStyled = styled.div`
  position: fixed;
  width: 100%;
  background: rgba(17,20,27,0.8);
  z-index: 100000;
  border-bottom: 0.2vw solid #181b21;
  height: 6vw;
  top: 0;
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
             font-size: 0.85em;
             display: inline-flex;
             align-items: center;
             font-weight: 500;
             letter-spacing: 0.1vw;
         } 
      }
  }
  
`
export default Header