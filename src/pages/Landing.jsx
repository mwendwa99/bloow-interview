import React, { useState, Component } from 'react';
// assets
import images from '../assets';

export default function Landing() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
            <header class="h-24 sm:h-32 flex items-center z-30 w-full">
                <div class="container mx-auto px-6 flex items-center justify-between">
                    <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
                        Music.io
                    </div>
                    <div class="flex items-center">
                        <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                            <a href="#" class="py-2 px-6 flex">
                                Login
                            </a>
                            <a href="#" class="py-2 px-6 flex">
                                Signup
                            </a>
                        </nav>
                        <button class="lg:hidden flex flex-col ml-4">
                            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                        </button>
                    </div>
                </div>
            </header>
            <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div class="container mx-auto px-6 flex relative py-16">
                    <div class="sm:w-2/3 lg:w-3/5 flex flex-col relative z-20">
                        <h1 class="font-avenir inline text-left float-left sentencecase text-6xl sm:text-6xl font-black  flex-col leading-none dark:text-white text-gray-800">
                            Come and dance, rewind your
                            <span class="inline font-caveat italic  dark:text-pink-500">
                                &nbsp;hapiness
                            </span>
                        </h1>
                        <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <p class="text-base text-left sm:text-base text-gray-700 dark:text-white">
                            Music that speaks to the heart in ways words cannot express. There Is No Sore It Will Not Heal, No App It Will Not Subdue.
                        </p>
                        <div class="flex mt-8">
                            <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                Get started
                            </a>
                            <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img src={images.landing} alt='music' class="max-w-xs md:max-w-sm m-auto" />
                    </div>
                </div>
            </div>
        </main>

    );
};