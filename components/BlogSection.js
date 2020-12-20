import styled from '@emotion/styled'
import Blog from './Blog'

function BlogSection() {

    const lastBlogs = [
        {
            date: ['06', 'AUG 2019'],
            poster: 'admin',
            usedTech: 'nextjs',
            bgImg: 'https://miro.medium.com/max/10944/0*noEsnJ8kRsectnQg',
            title: 'The Start-Up Ultimate Guide to Make your WordPress Journal'   
        },
        {
            date: ['06', 'AUG 2019'],
            poster: 'admin',
            usedTech: 'nextjs',
            bgImg: 'https://i.ytimg.com/vi/hJiEoOvvIlk/maxresdefault.jpg',
            title: 'The Start-Up Ultimate -Up Ultimate Guide to Make your WordPress Journ'   
        },
        {
            date: ['06', 'AUG 2019'],
            poster: 'admina',
            usedTech: 'nextjs',
            bgImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNOF-V23beuuSnDYMRN0oIOaQcF8LSaWjimQ&usqp=CAU',
            title: 'The Start-Up Ultimate Guide to Make your WordPress Journal'   
        }
    ]
    return (
        <BlogSectionStyled>
                <div className='head'>
                    <p>LATEST NEWS</p>
                    <h2>OUR BLOGS.</h2>
                </div>
                <div className='blogs-container'>
                    {lastBlogs.map(blog => 
                        <Blog
                            dateNum={blog.date[0]}
                            date={blog.date[1]}
                            poster={blog.poster}
                            tech={blog.usedTech}
                            img={blog.bgImg}
                            title={blog.title} 
                        />
                    )}
                </div>
        </BlogSectionStyled>
    )
}   

const BlogSectionStyled = styled.div`
@media only screen and (orientation:portrait) {
    width: 90% !important;
    .blogs-container {
        flex-direction: column;
    }
    .head {
        margin: 5vh 0 !important;
    }
}
    width: 80%;
    margin: 5vw auto;
    display: flex;
    flex-direction: column;
    .head {
        p {
            color: #75dab4;
            text-align: center;
            letter-spacing: 0.5vw;
        }
        h2 {
            margin: 0;
            font-size: 4vw;
            text-align: center;
            text-shadow: 0 8px rgba(255, 255, 255, 0.05);
            margin-bottom: 5vw;
        }
    }
    .blogs-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

`
export default BlogSection
