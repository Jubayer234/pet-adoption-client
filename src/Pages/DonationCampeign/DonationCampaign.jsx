import React, { useEffect, useState } from 'react'
import Donation from './Donation';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';

const DonationCampaign = () => {
    const [card, setCard] = useState([]);
    
    useEffect(() => {
        fetch('https://pet-adoption-server-flax.vercel.app/pet')
          .then(res => res.json())
          .then(data => setCard(data));
      }, [])
  return (
    <div className='pt-32'>
      <Helmet>
        <title>Pet Adoption | Donation Campaign</title>
      </Helmet>
        <SectionTitle 
        subHeading={'Donation '}
        heading={'Donate To Help Them'}
        ></SectionTitle>
         <div className='grid md:grid-cols-3 gap-10  mb-14'>
                {
                    card?.map(card => <Donation key={card._id}
                        card={card}></Donation>)
                }
            </div>
    </div>
  )
}

export default DonationCampaign