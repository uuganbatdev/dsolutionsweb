import styled from '@emotion/styled'

function Blog({dateNum,date,poster,tech,img,title}) {
    return (
        <BlogStyled>
            <img src={img} alt={img}/>
           <div className='inner-blog'>
                 <div className='date'>
                    <p className='datenum'>{dateNum}</p>
                    <p>{date}</p>
                </div>
                <div className='poster'>
                    <h3>By / {poster}</h3>
                    <p>{tech}</p>
                </div>
                <p className='title'>{title}</p>
                <a href="#">
                    READ MORE
                </a>
           </div>
        </BlogStyled>
    )
}

const BlogStyled = styled.div`
    width: 30%;
    height: 20vw;
    position: relative;
    :hover img {
        opacity: 0.3;
        transition: 1s;
    }
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.05;
        transition: 1s;
        z-index: -1;
    }
    .inner-blog {
        width: 100%;
        height: 100%;
        padding: 3vw 2vw;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        z-index: 1;
        .date {
            margin: 0;
            .datenum {
                font-size: 2vw;
                margin: 0;
                line-height: 0;
            }
        }
        .poster {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            p {
                color: #75dab4;
            }
        }
        .title {
            margin: 1vw 0;
        }
        a {
            flex-grow: 0;
            flex-shrink: 0;
            align-self: center;
            padding: 0.5vw;
            background:#0c0f16;
            z-index: 2;
        }
    }
`
export default Blog