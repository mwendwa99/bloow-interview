import React from "react";
// assets
import Player from "../Player/Player";
// music default
import { useMusic } from "../../provider/MusicProvider";

const MusicCard = () => {
    let { defaultMusic, isPlaying } = useMusic();


    return (
        <section className="grid place-items-center h-full bg-gray-800 p-5">
            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white md:text-5xl">
                popular releases
            </h3>
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* CARD 1 */}
                {
                    defaultMusic.map((music, index) =>
                        // return (
                        <div key={music.id} className="bg-gray-900 shadow-lg rounded p-3">
                            <div className="group relative">
                                <img
                                    className="w-full md:w-72 block rounded"
                                    src={music.cover}
                                    alt=""
                                />
                                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                                    <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="currentColor"
                                            className="bi bi-heart"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>
                                    </button>
                                    <div className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                        <Player
                                            url={music.src}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="currentColor"
                                            className="bi bi-three-dots"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-white text-lg">{music.title}</h3>
                                <p className="text-gray-400">{music.artist}</p>
                            </div>
                        </div>
                        // )
                    )
                }
            </section>
        </section>
    );
}

export default MusicCard;