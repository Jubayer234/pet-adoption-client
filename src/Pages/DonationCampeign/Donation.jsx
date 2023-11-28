import React from 'react'
import { Link } from 'react-router-dom';

const Donation = ({card}) => {
    const { id, image,name,donated,donation } = card || {};
    return (
      <div><div className="card shadow-lg">
      <figure>
        <img src={image} className="h-[350px] w-[250px] rounded-md" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-[#1e4b57]">Name : {name}</h2>
        <p className='font-medium'>Donation : ${donation}</p>
        <p className='font-medium'>Donated Amount : ${donated}</p>
        <div className="card-actions">
        <Link><button className="btn bg-[#ef6f18] rounded-full text-white">View Details</button></Link>
        </div>
      </div>
    </div></div>
    )
  }

export default Donation