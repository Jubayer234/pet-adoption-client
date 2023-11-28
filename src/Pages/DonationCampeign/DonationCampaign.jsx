import React, { useEffect, useState } from 'react'
import Donation from './Donation';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const DonationCampaign = () => {
    const [card, setCard] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/Pet')
          .then(res => res.json())
          .then(data => setCard(data));
      }, [])
  return (
    <div className='pt-32'>
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