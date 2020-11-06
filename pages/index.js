import Head from 'next/head'
import HomeSlidingSection from '../components/HomeSlidingSection.js'
import AboutUsSection from '../components/AboutUsSection.js'
import ServiceSection from '../components/ServiceSection.js'
import IntroVideoSection from '../components/IntroVideoSection.js'
import OurWorksSection from '../components/OurWorksSection.js'
import CommentSection from '../components/CommentSection.js'
import BlogSection from '../components/BlogSection.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Diverse Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSlidingSection />
      <AboutUsSection />
      <ServiceSection />
      <IntroVideoSection />
      <OurWorksSection />
      <CommentSection />
      <BlogSection />
    </>
  )
}
