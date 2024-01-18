import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signUp(email, password);
            navigate('/'); // back to home
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {/* Background Image */}
            <>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/578ab5c8-1af7-4e63-bec2-709385d7b34c/TH-th-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt="/"
                    className='hidden md:block w-full h-full object-cover absolute'
                />
                {/* OVERLAY */}
                <span className='fixed top-0 left-0 w-full h-screen bg-black/60'>
                </span>
            </>

            <main
                className='flex justify-center'
            >
                <div className='text-white absolute z-50 max-w-[600px] h-[600px] top-[15%]'>
                    <div className='w-[400px] h-full bg-black/70 px-10 py-16'>

                        <h1 className='font-bold text-3xl mb-2'>
                            Sign Up
                        </h1>

                        {/* SUBMIT FORM */}
                        <form
                            onSubmit={handleSubmit}
                            className='flex flex-col'
                        >
                            <input
                                onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email or phone number' className='p-3 my-2 bg-gray-700 rounded outline-none' />
                            <input
                                onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='p-3 my-2 bg-gray-700 rounded outline-none' />

                            <button className='bg-red-600 py-3 my-6 rounded-sm'>
                                Sign Up
                            </button>

                            <article
                                className='flex items-center justify-between text-gray-600 text-sm'
                            >
                                <div className='flex gap-1'>
                                    <input type="checkbox" />
                                    <p>Remember me</p>
                                </div>
                                
                                <p>Need help?</p>
                            </article>

                            <article
                                className='flex text-gray-600 gap-1 my-6'
                            >
                                Already subscribed to Netflix?
                                <Link
                                    to='/login'
                                    className='text-white'>
                                    Sign In.
                                </Link>
                            </article>

                        </form>
                    </div>
                </div>

            </main>

        </div>
    )
}

export default SignUp

//* for SignUp
// 1. import UserAuth
// get user email & password with useState('');
// 2. Create function to submit