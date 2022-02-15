import React from "react";
// assets
import Player from "../Player/Player";
import FavouriteButton from "../Buttons/FavouriteButton";
// music default
import { useMusic } from "../../provider/MusicProvider";

const MusicCard = () => {
    const { defaultMusic, handleIsFavourite } = useMusic();
    // console.log('before toggle', isFavourite);

    const toggleFavourite = (id) => {
        // change favourite state of music at id
        handleIsFavourite(id);
        // console.log('after toggle', isFavourite);
    }

    return (
        <section className="grid place-items-center h-full bg-gray-800 p-5">
            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white md:text-5xl">
                popular releases
            </h3>
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* CARD 1 */}
                {
                    defaultMusic.map((item) =>
                        // return (
                        <div key={item.id} className="bg-gray-900 shadow-lg rounded p-3">
                            <div className="group relative">
                                <img
                                    className="w-full md:w-72 block rounded"
                                    src={item.cover}
                                    alt=""
                                />
                                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                                    <div className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                        {/* <FavouriteButton isFavourite={isFavourite} handleClick={toggleFavourite} /> */}
                                        <FavouriteButton
                                            isFavourite={item.favourite}
                                            handleClick={() => toggleFavourite(item.id)}
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                        <Player
                                            url={item.src}
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-white text-lg">{item.title}</h3>
                                <p className="text-gray-400">{item.artist}</p>
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