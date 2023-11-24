import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const cards = useLoaderData();
  return (
    <div>
        <Helmet>
            <title>Pet Adoption | Home</title>
        </Helmet>
        <Banner></Banner>
        <Category cards={cards}></Category>
        
    </div>
  )
}

export default Home