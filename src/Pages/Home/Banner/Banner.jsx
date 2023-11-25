import React from 'react'
import bannerImg from '../../../assets/cute-animals.jpg'


const Banner = () => {
  return (
    <div className="hero pt-36">
  <div className="hero-content flex-col lg:flex-row-reverse gap-16">
    <img src={bannerImg} className=" md:w-1/2 rounded-lg shadow-2xl rounded-tr-[100px] rounded-bl-[100px]" />
    <div className='text-center lg:text-start'>
      <h1 className="text-3xl font-bold font-serif">Adopting Means <br /> <span className='text-[#ef6f18]'>YOU SAVE A LIFE!</span></h1>
      <p className="py-6 text-lg font-medium">When you adopt, not only do you save your loving new companion, but you make space for other animals who desperately need it, creating a domino effect of goodness.</p>
      <button className="btn bg-[#ef6f18] text-white rounded-badge">View More</button>
    </div>
  </div>
</div>
  )
}

export default Banner