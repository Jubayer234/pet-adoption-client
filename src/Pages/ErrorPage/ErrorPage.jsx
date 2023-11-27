import React from 'react'
import error from '../../assets/Gambar.svg'

const ErrorPage = () => {
  return (
    <div className=''>
        <img className='mx-auto w-full' src={error} alt="" />
        <h1 className='text-center text-5xl mt-10 font-bold font-serif text-red-600'>Are You Lost?</h1>
    </div>
  )
}

export default ErrorPage