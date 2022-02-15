import React, { useState, useEffect } from 'react';
// assets
import PlusButton from '../../assets/svg/PlusButton';
// context
import { useMusic } from '../../provider/MusicProvider';

const jsmediatags = window.jsmediatags;

const UploadButton = () => {

    const { uploadMusic, music } = useMusic();

    const handleChange = (e) => {
        const file = e.target.files[0];
        jsmediatags.read(file, {
            onSuccess: function (tag) {
                uploadMusic({
                    // add id based on position in array
                    id: music.length,
                    name: tag.tags.title,
                    artist: tag.tags.artist,
                    album: tag.tags.album,
                    year: tag.tags.year,
                    genre: tag.tags.genre,
                    image: tag.tags.picture,
                    src: URL.createObjectURL(file),
                    favourite: false,
                    audio: new Audio(URL.createObjectURL(file)),
                    file: file
                });
            },
            onError: function (error) {
                console.log(error);
            }
        });
    };

    console.log('music', music);


    return (
        <div className="flex justify-center h-full bg-gray-800 p-5">
            <div className="my-1 w-1/3 flex justify-evenly">
                <label htmlFor="formFileMultiple">
                    <PlusButton className="drop-shadow-lg  hover:cursor-pointer" width={40} height={40} />
                    <input className="hidden" type="file" id="formFileMultiple" multiple
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </label>
            </div>
        </div>
    )
}

export default UploadButton