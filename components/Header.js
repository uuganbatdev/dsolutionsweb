import styled from '@emotion/styled'

function Header() {

      return (

        <HeaderStyled>
            <div className='inner-header'>
            <img src="bolt.png" alt="logo"/>
            <nav>
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        Showcases
                    </a>
                </li>
                <li>
                    <a href="#">
                        About
                    </a>
                </li>
                <li>
                    <a href="#">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#">
                        Contact
                    </a>
                </li>

            </nav>
            </div>
        </HeaderStyled>
    )
}   

const HeaderStyled = styled.div`
  position: fixed;
  width: 100%;
  background: #11141b;
  z-index: 100;
  border-bottom: 0.2vw solid #181b21;
  .inner-header {
      margin: 0 auto;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;

  }
  img {
      margin: 1.5vw 0;
      height: 3vw;
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
             font-size: 1vw;
             display: inline-flex;
             align-items: center;
             font-weight: 500;
             letter-spacing: 0.1vw;
         } 
      }
  }
  
`
export default Header