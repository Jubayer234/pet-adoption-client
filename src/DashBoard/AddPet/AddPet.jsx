import React from 'react'
import Swal from 'sweetalert2';
import background from '../../assets/footer_bg.jpg'
import Select from 'react-dropdown-select';

const AddPet = () => {

  const options = [
    { 
      value: 1,
      label: "Dog"
    },
    {
      value:  2,
      label: "Cat"
    },
    {
      value:  3,
      label: "Rabbit"
    },
    {
      value:  4,
      label: "Birds"
    }
    
  ];

const handleAddProducts = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value; 
    const brand = form.brand.value;  
    const category = form.category.value; 
    const age = form.age.value; 
    const image = form.image.value; 
    const location = form.location.value; 
    const description = form.description.value; 

    const newProduct = {name,brand,category,age,image,location,description}
    console.log(newProduct);

    // send data
    fetch('http://localhost:5000/pet',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire('Product has been added')
      }
    })


}

  return (
    <div  className=' p-4 '>
        <h2 className='font-serif text-[#a38585] text-center text-5xl border-b w-3/5 mx-auto pb-5'>Add New Product</h2>
        <div className="hero-content rounded-lg flex-col mb-20 container lg:w-3/6 mx-auto">
        <div className="text-center space-y-4">
        </div>
        <div style={{
            backgroundImage: `url(${background})`,
        }} 
         className="card flex-shrink-0 w-full">
          <form onSubmit={handleAddProducts} className="card-body grid grid-cols-1 md:grid-cols-2">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Pet Name</span>
              </label>
              <input type="text" placeholder="Name of the pet" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input type="text" name='brand' placeholder="Brand name" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Pet Category</span>
              </label>
              <Select className="input input-bordered" options={options} />

            </div>
            
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input type="text" name='age' placeholder="Pet age" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pet Image</span>
              </label>
              <input type="text" name='image' placeholder="Image" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input type="text" name='location' placeholder="The location" className="input input-bordered" required />
            </div>
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea placeholder="Write short description" name="description" className="input input-bordered w-full min-h-16" required />
              <label className="label">
                <span className="label-text">Long Description</span>
              </label>
              <textarea className="textarea textarea-bordered" placeholder="Leave a Long Message/description"></textarea>
            </div>
            <div className="form-control mt-6 col-span-full">
              <button className="btn bg-orange-500 text-white text-lg" type='submit' >Add Pet</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPet;