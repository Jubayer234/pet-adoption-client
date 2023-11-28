import React from 'react'
import { Link } from 'react-router-dom';

const Pets = ({data}) => {
    const { id, image, category,name,age,location } = data || {};
  return (
    <div><div className="card shadow-lg">
    <figure>
      <img src={image} className="h-[350px] w-[250px] rounded-md" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title font-bold text-[#1e4b57]">Name : {name}</h2>
      <p className='font-medium'>Category : {category}</p>
      <p className='font-medium'>Age : {age} Moths</p>
      <p className='font-medium'> Location : {location}</p>
      <div className="card-actions">
      <Link to={`/details/${id}`}><button className="btn bg-[#ef6f18] rounded-full text-white">See Details</button></Link>
      </div>
    </div>
  </div></div>
  )
}

export default Pets