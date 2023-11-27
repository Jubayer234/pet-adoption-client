import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import regImg from '../../assets/contactbg1.png'
import background from '../../assets/footer_bg.jpg'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2'
import toast, { Toaster } from 'react-hot-toast'

const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const location = useLocation ();
    const navigate = useNavigate();

    const handleRegister = event => {
        
        event.preventDefault()
        const form = event.target;
        const displayName = form.displayName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
            toast.error("Your password is less then 6 character")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error("Your password should have  at Least one Capital letter")
            return;
        }else if(!/(?=.*[@$!%*?&])/.test(password)){
            toast.error("Password doesn't have a special character")
            return;
        }else{
            createUser(email,password)
            .then(result => {
                Swal.fire('successfully registered!')
                console.log(result.user)
                navigate(location?.state ? location.state : '/' )
                updateUserProfile(displayName,photo)
                .then(() => {
                    console.log("user profile updated");
                })
            })
            .catch(error => {
                console.error(error)
            })
        }
        }

    return (
        <div>
            <Helmet>
                <title>Pet Adoption | Register</title>
            </Helmet>
            <div style={{
                        backgroundImage: `url(${background})`,
                    }} className='pt-40'>
                <h2 className='text-center font-serif font-semibold pb-6 text-4xl text-[#ef6f18]'>Create An Account</h2>
                <div className='flex items-center  pb-10'>
                    <div>
                        <img className='lg:h-[810px] ml-20 hidden lg:block' src={regImg} />
                    </div>
                    <div className='lg:h-[650px] lg:-ml-[42px] mb-12 border-2 rounded-3xl mx-auto shadow-lg'>
                        <form onSubmit={handleRegister} className="card-body lg:w-[450px] mx-auto">
                            <h1 className='text-center text-2xl font-bold border-b border-black pb-4'>
                                Register
                            </h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name='displayName' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Provide password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#ef6f18] text-white font-bold">Register</button>
                            </div>
                            <p className='text-lg mt-5 text-center'>Already have an account? <Link className='text-blue-600 font-serif font-semibold' to="/login" >Login</Link></p>
                        </form>
                    </div>
                </div>
                <div><Toaster></Toaster></div>
            </div>
        </div>
    )
}

export default Register