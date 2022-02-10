import React, { useState, useEffect } from "react";
// assets
import PlayBtn from "../../assets/svg/PlayBtn";
import PauseBtn from "../../assets/svg/PauseBtn";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (

        <div onClick={toggle} className="">
            {
                playing ?
                    <PauseBtn width={40} height={40} />
                    :
                    <PlayBtn width={40} height={40} />
            }
        </div>
    );
};

export default Player;