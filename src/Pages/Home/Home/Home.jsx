import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import { useLoaderData } from 'react-router-dom'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer'
import CallToAction from '../CallToAction/CallToAction'
import EmailUs from '../EmailUs/EmailUs'
import AnotherSection from '../AnotherSection/AnotherSection'

const Home = () => {
    const cards = useLoaderData();
  return (
    <div>
        <Helmet>
            <title>Pet Adoption | Home</title>
        </Helmet>
        <Banner></Banner>
        <Category cards={cards}></Category>
        <CallToAction></CallToAction>
        <AnotherSection></AnotherSection>
        <AboutUs></AboutUs>
        <EmailUs></EmailUs>
        <Footer></Footer>
        
    </div>
  )
}

export default Home