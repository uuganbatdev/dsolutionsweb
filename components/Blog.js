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
@media only screen and (orientation:portrait) {
    width: 100% !important;
    margin: 5vh 0 !important;
    height: 50vh !important;

    img {
        opacity: 0.1 !important;
    }
    p,a,h3 {
        font-size: 3vh !important;
    }
    .poster {
        justify-content: space-around !important;
    }
}
    &:nth-of-type(1),
    &:nth-of-type(3) {
        background: #13161d;
        img {
            opacity: 0;
        }
    }
    width: 31%;
    position: relative;
    &:hover img {
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
        z-index: 1;
    }
    .inner-blog {
        width: 100%;
        height: 100%;
        padding: 5vw 2vw 3vw;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        z-index: 1;
        .date {
            margin: 0;
            .datenum {
                font-weight: 700;
                font-size: 2vw;
                margin: 0;
                line-height: 0;
            }
        }
        .poster {
            display: flex;
            align-items: center;
            justify-content: left;
            font-weight: 200;
            h3 {
                font-weight: 400;
            }
            p {
                color: #75dab4;
                margin: 0 1vw;
            }
        }
        .title {
            margin: 1vw 0;
            letter-spacing: 0.1vw;
            font-size: 1.2em;
            font-weight: 700;
        }
        a {
            letter-spacing: 0.1vw;
            display: inline-block;
            white-space: nowrap;
            width: 3vw;
            flex-grow: 0;
            padding: 0.5vw;
            background:#1f2229;
            z-index: 2;
        }
    }
`
export default Blog