import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import { useLoaderData } from 'react-router-dom'
import AboutUs from '../AboutUs/AboutUs'

const Home = () => {
    const cards = useLoaderData();
  return (
    <div>
        <Helmet>
            <title>Pet Adoption | Home</title>
        </Helmet>
        <Banner></Banner>
        <Category cards={cards}></Category>
        <AboutUs></AboutUs>
        
    </div>
  )
}

export default Home