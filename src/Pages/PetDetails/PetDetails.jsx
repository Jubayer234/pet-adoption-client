import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PetDetails = ({ card }) => {
  const { user } = useContext(AuthContext);
  const { id, image, category, name, age, location, donated, donation } = card || {};

  const handleAddReq = event => {
    event.preventDefault();
    const form = event.target;
    const name = user.displayName;
    const email = user?.email;
    const number = form.number.value;
    const address = form.address.value;
    const request = {
      name,
      email,
      number,
      address,
      pet: id
    }
    console.log(request);
    fetch('http://localhost:5000/petRequest' ,{
      method: 'POST',
      headers: {
          'content-type' : 'application/json'
      },
      body: JSON.stringify(request)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      toast.success('Request Inserted!')

    })

  }

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
              <div className="bg-white p-10 mx-auto md:w-[400px] rounded-lg">
                <div>
                  <form onSubmit={handleAddReq} method="dialog">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">User Name</span>
                      </label>
                      <input type="text" placeholder={user?.displayName} name='name' className="input w-full mb-2 " disabled />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">User Email</span>
                      </label>
                      <input type="email" placeholder={user?.email} name='email' className="input w-full mb-2 " disabled />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input type="number" placeholder="Your phone number" name='number' className="input input-bordered input-warning  w-full mb-2" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input type="text" placeholder="Your address" name='address' className="input input-bordered input-warning  w-full mb-2" />
                    </div>
                    <button className="btn modal-close
                 bg-orange-400 my-2 text-white   w-full">Submit</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <Toaster></Toaster>
      </div>
      </div>
  )
}

export default PetDetails