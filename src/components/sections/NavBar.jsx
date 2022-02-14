import React from 'react';
import { useNavigate } from 'react-router-dom';
// assets
import images from '../../assets';
// context
import { useAuth } from '../../provider/AuthProvider';
import { signOut, getAuth } from 'firebase/auth';
import { app } from '../../firebase-config';
import { toast } from 'react-toastify';

const auth = getAuth(app);

export default function NavBar() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleSignin = () => {
        if (user) {
            signOut(auth)
                .then(() => {
                    toast.info('Signed out successfully');
                });
        } else {
            navigate('/signin');
        }
    };

    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img
                        className="w-10 h-10 cursor-pointer shadow rounded"
                        src={images.logo} alt='logo'
                    />
                    <span className="ml-3 text-xl">Music.io</span>
                </a>
                <nav onClick={() => handleSignin()} className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 cursor-pointer hover:text-white">
                        {
                            user ? 'Sign Out' : 'Sign In'
                        }
                    </a>
                </nav>
                <button onClick={() => navigate('/signup')} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none 
                hover:bg-pink-600 hover:text-white rounded-full text-base mt-4 md:mt-0">
                    Sign up
                </button>
            </div>
        </header >
    )
}