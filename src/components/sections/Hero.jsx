import React from 'react';
// rrdv6
import { useNavigate } from 'react-router-dom';
// assets
import assets from '../../assets';

export default function Header() {
    const navigate = useNavigate();

    return (
        <section className="text-gray-400 h-full bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl md:text-6xl mb-4 font-medium text-white">
                        Come and dance,
                        <br className="hidden lg:inline-block" />
                        rewind your
                        <span className="font-caveat italic  dark:text-pink-500">
                            &nbsp;happiness
                        </span>
                    </h1>
                    <p className="mb-8 sm:text-sm md:text-2xl leading-relaxed">
                        Music that speaks to the heart in ways words cannot express.
                        There Is No Sore It Will Not Heal, No App It Will Not Subdue.
                    </p>
                    <div className="flex justify-center">
                        <button onClick={() => navigate('/signup')} className="inline-flex text-white rounded-full bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 text-lg">
                            Get Started
                        </button>
                        <button
                            // onclick scroll down
                            onClick={
                                // window scroll
                                () => window.scrollBy({ top: window.innerHeight - 20, left: 0, behavior: 'smooth' })
                            }

                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-lg">
                            Explore
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={assets.landing}
                    />
                </div>
            </div>
        </section>
    )
}