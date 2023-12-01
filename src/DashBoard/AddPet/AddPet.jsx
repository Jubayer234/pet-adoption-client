import React from 'react'
import Swal from 'sweetalert2';
import background from '../../assets/footer_bg.jpg'
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../../Components/Hooks/UseAxiosPublic';
import UseAxiosSecure from '../../Components/Hooks/UseAxiosSecure';


const image_hosting = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

const AddPet = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const onSubmit = async (data) => {
      console.log(data)
      const imageFile = { image: data.image[0] }
      const res = await axiosPublic.post(image_hosting_api,imageFile,  {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
    if (res.data.success) {
        const pets = {
            name: data.name,
            category: data.category,
            age: parseFloat(data.age),
            massage: data.massage,
            image: res.data.data.display_url
        }
        // 
        const petRes = await axiosSecure.post('/addedPets', pets);
        console.log(petRes.data)
        if(petRes.data.insertedId){
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log(res.data);
};

  return (
      <div  className='my-20'>
          <h2 className='font-serif text-[#a38585] text-center text-5xl border-b-2 border-black w-3/6 mx-auto pb-5'>Add New Product</h2> 
          <div  style={{ backgroundImage: `url(${background})`, }} className=" rounded-lg w-3/4 p-20 mx-auto"> 
          <div className="">
          <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full my-4">
                      <label className="label">
                          <span className="label-text">Pet Name*</span>
                      </label>
                      <input
                          type="text"
                          placeholder="Name of the pet"
                          {...register('name', { required: true })}
                          required
                          className="input input-bordered w-full" />
                  </div>
                  <div className="flex gap-6">
                      <div className="form-control w-full my-4">
                          <label className="label">
                              <span className="label-text">Category*</span>
                          </label>
                          <select defaultValue="default" {...register('category', { required: true })}
                              className="select select-bordered w-full">
                              <option disabled value="default">Select a category</option>
                              <option value="Dog">Dog</option>
                              <option value="Cat">Cat</option>
                              <option value="Rabbit">Rabbit</option>
                              <option value="Bird">Bird</option>
                          </select>
                      </div>
                      <div className="form-control w-full my-4">
                          <label className="label">
                              <span className="label-text">Age*</span>
                          </label>
                          <input
                              type="number"
                              placeholder="Pets's age"
                              {...register('age', { required: true })}
                              className="input input-bordered w-full" />
                      </div>

                  </div>
                  <div className="flex gap-6">
                  <div className="form-control w-full my-4">
                      <label className="label">
                          <span className="label-text">Short massage*</span>
                      </label>
                      <input
                          type="text"
                          placeholder="Leave a short note"
                          {...register('massage', { required: true })}
                          required
                          className="input input-bordered w-full" />
                  </div>
                  <div>
                  <div className="form-control w-full my-4">
                      <label className="label">
                          <span className="label-text">Location*</span>
                      </label>
                      <input
                          type="text"
                          placeholder="Location"
                          {...register('location', { required: true })}
                          required
                          className="input input-bordered w-full" />
                  </div>
                  </div>
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Description</span>
                      </label>
                      <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Write a long description"></textarea>
                  </div>

                  <div className="form-control w-full my-6">
                      <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                  </div>

                  <button className="btn text-lg flex mx-auto w-full bg-orange-500 text-white">
                      Add Pet
                  </button>
              </form>
          </div>
          </div>
      </div>
      </div>
  );
};

export default AddPet;