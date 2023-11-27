import React from 'react'
import bg from '../../../assets/BG.jpg'

const EmailUs = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat : 'no-repeat',
            backgroundPositionX: 'center',
            backgroundSize: 'cover',
            borderRadius: '15px'
          }} className=' p-20 md:flex items-center justify-around  text-white mb-5 ' >
            <div>
                <h2 className='text-2xl lg:text-4xl font-bold mb-2'>
                    Email Us To Contact
                </h2>
                <p className='font-bold'>
                    Do Not Show Your Email.
                </p>
            </div>
            <div className='md:flex'>
                <input type="email" placeholder="Enter Your Email" className="input input-bordered md:px-10 lg:px-28 py-6 text-black" required />
                <button className='btn bg-white ml-3'> subscribe </button>
            </div>
        </div>
    )
}

export default EmailUs