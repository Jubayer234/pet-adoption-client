import React from 'react'

const SectionTitle = ({heading, subHeading}) => {
    return (
      <div className='text-center mt-6'>
          <p className='text-[#ef6f18] text-lg font-bold mb-4'>{subHeading}</p>
          <h3 className='text-2xl md:text-4xl font-medium font-serif border-b border-black md:w-4/12 mx-auto pb-3 mb-6'>{heading}</h3>
      </div>
    )
  }

export default SectionTitle;