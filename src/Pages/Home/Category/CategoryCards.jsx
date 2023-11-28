import React from 'react'
import { Link } from 'react-router-dom';

const CategoryCards = ({card}) => {
    const { id, image, title,description } = card || {};
  return (
    <div>
      <div className="card shadow-lg">
  <figure>
    <img src={image} className="h-[350px] w-[500px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-[#1e4b57]">{title}</h2>
    <p className='font-medium'>{description}</p>
    <div className="card-actions">
    <Link to={`/petListing`}><button className="btn bg-[#ef6f18] rounded-full text-white">See More</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default CategoryCards