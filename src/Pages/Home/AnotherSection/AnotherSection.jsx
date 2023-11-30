import React from 'react'
import banner from '../../../assets/cute_puppy.jpg'

const AnotherSection = () => {
  return (
    <div className='mt-20' style={{
        backgroundImage: `url(${banner})`,
    }}>
    <div className=' text white p-16 mb-32 text-center'>
            <h3 className='text-4xl text-white font bold font-serif pb-5'>Bistro Boss</h3>
            <p className='font-bold text-white'> people have the opportunity to make a positive impact on the lives of these creatures, offering them a safe haven and the chance to thrive in a nurturing environment. 
            </p>
        </div>
    </div>

  )
}

export default AnotherSection