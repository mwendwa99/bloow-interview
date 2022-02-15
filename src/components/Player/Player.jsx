import React, { useState, useEffect } from "react";
// assets
import PlayBtn from "../../assets/svg/PlayBtn";
import PauseBtn from "../../assets/svg/PauseBtn";
// context
import { useMusic } from "../../provider/MusicProvider";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const { handleCurrentMusic, handleIsPlaying, handleIsStopped, currentMusic } = useMusic();

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        if (playing) {
            audio.play();
            handleCurrentMusic(url);
            handleIsPlaying(true);
            handleIsStopped(false);
        } else {
            audio.pause();
            handleIsStopped(true);
            handleIsPlaying(false);
        }
    }, [playing]);

    useEffect(() => {
        // if current music is not the same as the one playing, pause the music
        if (currentMusic !== url) {
            audio.pause();
            handleIsStopped(true);
            handleIsPlaying(false);
            setPlaying(false);
        }
    }, [currentMusic]);


    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url, width, height }) => {
    const [playing, toggle] = useAudio(url);

    return (

        <div onClick={toggle} className="">
            {
                playing ?
                    <PauseBtn width={width} height={height} />
                    :
                    <PlayBtn width={width} height={height} />
            }
        </div>
    );
};

export default Player;