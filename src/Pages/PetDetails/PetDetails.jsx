import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PetDetails = ({ card }) => {
  const { id, image, category, name, age, location, donated, donation } = card || {};
  return (
    <div>
      <div className="card w-96 mx-auto item shadow-lg">
        <figure>
          <img src={image} className="h-[350px] w-[250px] rounded-md" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-[#1e4b57]">Name : {name}</h2>
          <p className='font-medium'>Category : {category}</p>
          <p className='font-medium'>Age : {age} Months</p>
          <p className='font-medium'>Donation : ${donation}</p>
          <p className='font-medium'>Donated Amount : ${donated}</p>
          <p className='font-medium'> Location : {location}</p>
          <div className="card-actions">
            <button className="btn bg-[#ef6f18] rounded-full text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Adopt Me</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <div className="modal-action">
                  <form method="dialog">
                  <input type="text" placeholder="UserName" className="input w-full mb-2 max-w-xs" disabled />
                  <input type="text" placeholder="User Email" className="input w-full max-w-xs" disabled />
                  <input type="number" placeholder="Your Phone Number" className="input mt-2 input-bordered input-warning w-full max-w-xs" />
                  <input type="text" placeholder="Write Ur Address" className="input mt-2 input-bordered input-warning w-full max-w-xs" />
                  <button className="btn bg-orange-400 my-2 text-white  w-full max-w-xs">Submit</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div></div>
  )
}

export default PetDetails