import React from 'react'
import Img from '../../../assets/feed pets in ukraine v3.webp'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import bgImg from '../../../assets/cute-animals.jpg'

const AboutUs = () => {
  return (
    <div style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }} className=' text-white mb-16 mt-10'>
      <div className='pt-10 bg-gray-400  bg-opacity-40'>
        <SectionTitle
          subHeading={"---About Us---"}
          heading={"Our Mission"}
        ></SectionTitle>
      </div>
      <div className='md:flex justify-center items-center bg-gray-400 bg-opacity-50 gap-16 pb-20 pt-10 px-8 lg:px-28'>
        <div>
          <img className='w-[1000px]' src={Img} alt="" />
        </div>
        <div className='space-y-4 text-center md:text-start mt-8 md:mt-0'>
          <h1 className="text-3xl font-bold font-serif">We Fight The Big Fights <br /> <span className='text-black'>To End Suffering For All Animals.</span></h1>
          <p>
            <span className='text-black font-bold'>WE WORK TO : </span>
            End the cruelest practices toward all animals.
            Care for animals in crisis.
            Build a stronger animal protection movement.
            Our rescue and direct care work responds to today’s cruelties; our education, legislative and policy work prevents tomorrow’s.

          </p>
          <p>
          <span className='text-black font-bold'>WE HAVE : </span>
            The world’s greatest roster of experts in animal welfare.
            Rescuers and caregivers with years of experience.
            State directors working on animal issues around the country and passionate advocates pushing for policy change.
            Several affiliated animal sanctuaries providing direct care and medical help for animals in need.
            A global affiliate, Humane Society International, which advances the welfare of animals in more than 50 countries.
          </p>
          <button className='btn btn-outline border-0 border-b-4 border-white text-white mt-4'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs