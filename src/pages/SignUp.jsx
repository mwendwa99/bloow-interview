import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// assets
import assets from '../assets';

export const SignUp = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const { email, password } = values;

    const handleChange = name => e => {
        setValues({
            ...values,
            [name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values });
        console.log(values);
        // navigate('/signin');
    };


    return (
        <div className="h-screen">
            {/* component */}
            {/* This is an example component */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
            />
            <div className="text-gray-400 h-screen w-full bg-gray-900 body-font flex">
                <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
                    <div onClick={() => navigate('/')} className="flex items-center hover:motion-safe:animate-pulse hover:cursor-pointer h-64 w-64">
                        <img src={assets.login} alt="login" />
                    </div>
                    <h1 className="font-bold my-5 text-2xl text-white"> Sign up</h1>
                    <form onSubmit={handleSubmit} className="mt-2 flex flex-col lg:w-1/2 w-8/12">
                        <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded-full mb-6 pr-10">
                            <div className="flex -mr-px justify-center w-15 p-4">
                                <span className="flex items-center leading-normal bg-white px-3 border-0 rounded text-2xl text-gray-600">
                                    <i className="fas fa-user-circle" />
                                </span>
                            </div>
                            <input
                                type="text"
                                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                                placeholder="Email"
                                value={email}
                                onChange={handleChange('email')}
                                autoComplete="email"
                            />
                        </div>
                        <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded-full mb-6 pr-10">
                            <div className="flex -mr-px justify-center w-15 p-4">
                                <span className="flex items-center leading-normal bg-white px-3 border-0 rounded text-2xl text-gray-600">
                                    <i className="fas fa-lock" />
                                </span>
                            </div>
                            <input
                                type="password"
                                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange('password')}
                                autoComplete="password"
                            />
                        </div>
                        <a
                            onClick={() => navigate('/signin')}
                            className="hover:cursor-pointer text-base text-pink-400 text-right font-roboto leading-normal hover:text-pink-600 mb-6"
                        >
                            Already have an Account?
                        </a>
                        <button type="submit"
                            className="bg-pink-500 hover:bg-pink-600 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded-full leading-tight text-xl md:text-base font-sans mt-4 mb-20"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}  // end of component
