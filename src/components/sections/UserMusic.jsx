import React from "react";
import DeleteBtn from "../../assets/svg/DeleteBtn";
// context
import { useMusic } from "../../provider/MusicProvider";
// components
import FavouriteButton from "../Buttons/FavouriteButton";
import Player from "../Player/Player";
// assets
import assets from "../../assets";

export default function UserMusic() {
    const { music, handleIsFavourite, deleteMusic } = useMusic();
    console.log("music", music);

    const toggleFavourite = (id) => {
        // change favourite state of music at id
        handleIsFavourite(id);
        // console.log('after toggle', isFavourite);
    }

    const handleDelete = (id) => {
        console.log("id", id);
        // delete music at id
        deleteMusic(id);
    }


    return (
        <section className="grid place-items-center h-full bg-gray-800 p-5">
            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white md:text-5xl">
                your uploads
            </h3>
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* CARD 1 */}
                {
                    music.map((music) =>
                        // return (
                        <div key={music.id} className="bg-gray-900 shadow-lg rounded p-3">
                            <div className="group relative">
                                <img
                                    className="w-full md:w-72 block rounded"
                                    src={assets.audio}
                                    alt=""
                                />
                                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                                    <div className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                        {/* <FavouriteButton isFavourite={isFavourite} handleClick={toggleFavourite} /> */}
                                        <FavouriteButton
                                            isFavourite={music.favourite}
                                            handleClick={() => toggleFavourite(music.id)}
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                        <Player
                                            url={music.src}
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                        <DeleteBtn
                                            width={24}
                                            height={24}
                                            handleClick={() => handleDelete(music.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-white text-lg">{music.name}</h3>
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