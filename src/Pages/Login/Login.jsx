import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import background from '../../assets/footer_bg.jpg'
import mew from '../../assets/pngwing 3.png'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2'
import UseAxiosPublic from '../../Components/Hooks/UseAxiosPublic'
const Login = () => {
    const {signIn}= useContext(AuthContext);
    const {logIn} = useContext(AuthContext);
    const axiosPublic = UseAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn =() => {
        signIn()
        .then(result => {
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                    Swal.fire('successfully registered!')
                navigate(location?.state ? location.state : '/' )
            })
        })
    }

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire("logged in");
            navigate(location?.state ? location.state : '/' )
        } )
    }


    return (
        <div style={{
            backgroundImage: `url(${background})`,
        }} className='pt-40'>
            <Helmet>
                <title>Pet Adoption | Login</title>
            </Helmet>
            <h2 className='text-center font-serif font-bold pb-4 mb-4 text-4xl text-[#ef6f18] border-b border-black md:w-96 mx-auto'>Please Login</h2>
            <div className=' mx-auto grid justify-center pb-28 px-5'>

                <div>
                    <img className='w-[450px] mr-6' src={mew} />
                </div>
                <div>
                    <div className="lg:w-[450px] lg:h-[472px] mx-auto border-2 rounded-3xl shadow-lg ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn font-bold text-white bg-[#b08cf4]">Login</button>
                            </div>
                            <button onClick={handleGoogleSignIn} className='btn bg-[#fc77ae] text-white'>sign In with google</button>
                            <p className='text-lg mt-5 text-center '>Don't have an account? <Link className='text-blue-600 font-serif font-semibold' to="/register" >Register</Link></p>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login