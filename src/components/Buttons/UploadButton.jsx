import React, { useState } from 'react';
// assets
import PlusButton from '../../assets/svg/PlusButton';

const jsmediatags = window.jsmediatags;

const UploadButton = () => {
    const [trackList, setTrackList] = useState([]);
    const [track, setTrack] = useState([{
        name: '',
        artist: '',
        album: '',
        year: '',
        genre: '',
        image: {},
        audio: {},
    }]);

    const handleChange = (e) => {
        const file = e.target.files[0];

        console.log('FAIRO', file);

        jsmediatags.read(file, {
            onSuccess: function (tag) {
                console.log(tag);
                setTrack([...track, {
                    name: tag.tags.title,
                    artist: tag.tags.artist,
                    album: tag.tags.album,
                    year: tag.tags.year,
                    genre: tag.tags.genre,
                    image: tag.tags.picture,
                    audio: file,
                }]);
                setTrackList([...trackList, track]);
            },
            onError: function (error) {
                console.log(error);
            }
        });
    };


    console.log('track', track);
    // console.log('trackList', trackList);


    return (
        <div className="flex justify-center h-full bg-gray-800 p-5">
            <div className="mb-3 w-1/3 flex justify-evenly">
                <label
                    htmlFor="formFileMultiple"
                // className="form-label inline-block mb-2 text-gray-700"
                >
                    <PlusButton className="motion-safe:animate-pulse
                    drop-shadow-lg hover:animate-none hover:cursor-pointer" width={40} height={40} />
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