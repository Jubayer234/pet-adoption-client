import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../Banner/Banner'

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Pet Adoption | Home</title>
        </Helmet>
        <Banner></Banner>
        
    </div>
  )
}

export default Home