import React, { useState, useEffect } from 'react';
import defaultSong1 from '../assets/audio/defaultSong1.mp3';
import defaultSong2 from '../assets/audio/defaultSong2.mp3';
import defaultSong3 from '../assets/audio/defaultSong3.mp3';

const MusicContext = React.createContext();

// create music context
export const MusicProvider = ({ children }) => {
    const [defaultMusic, setDefaultMusic] = useState([]);
    const [music, setMusic] = useState([]);
    const [currentMusic, setCurrentMusic] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isStopped, setIsStopped] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        setDefaultMusic([
            {
                id: 1,
                title: 'Guilty Conscience',
                artist: '070 Shake',
                album: 'Modus Vivendi',
                duration: '003:33',
                src: defaultSong1,
                cover: 'https://images.genius.com/3a5cbdd2cade95de8a3af8e29c1d33f9.1000x1000x1.png',
                favourite: isFavourite,
            },
            {
                id: 2,
                title: 'Lucy',
                artist: 'Bensoul',
                album: 'Lucy',
                duration: '03:48',
                src: defaultSong2,
                cover: 'https://images.squarespace-cdn.com/content/v1/5a7a2870f14aa1ea4fb3ade9/1555250171134-VTBB87AYQN4OAN9X7AIN/Lucy-album-cover-4-880x880.jpg?format=750w',
                favourite: isFavourite,
            },
            {
                id: 3,
                title: 'ZUU',
                artist: 'Denzel Curry',
                album: 'ZUU',
                duration: '02:06',
                src: defaultSong3,
                cover: 'https://t2.genius.com/unsafe/597x0/https%3A%2F%2Fimages.genius.com%2F86e21c57ddf05f2cf02a69f8a77255d3.1000x1000x1.png',
                favourite: isFavourite,
            },
        ]);
    }, []);

    useEffect(() => {
        fetch('https://api.myjson.com/bins/1h2q4i')
            .then(res => res.json())
            .then(data => {
                setMusic(data);
                setCurrentMusic(data[0]);
            })
            .catch(err => console.log(err));
    }, []);

    const handleCurrentMusic = (music) => {
        setCurrentMusic(music);
    };

    const handleIsPlaying = (isPlaying) => {
        setIsPlaying(isPlaying);
    };

    const handleIsPaused = (isPaused) => {
        setIsPaused(isPaused);
    };

    const handleIsStopped = (isStopped) => {
        setIsStopped(isStopped);
    };

    const handleIsFavourite = (id) => {
        // change default music at index to false
        const newDefaultMusic = defaultMusic.map((music) => {
            if (music.id === id) {
                return {
                    ...music,
                    favourite: !music.favourite,
                };
            }
            return music;
        }
        );
        setDefaultMusic(newDefaultMusic);

    };

    return (
        <MusicContext.Provider value={{
            defaultMusic,
            music,
            currentMusic,
            handleCurrentMusic,
            isPlaying,
            handleIsPlaying,
            isPaused,
            handleIsPaused,
            isStopped,
            handleIsStopped,
            isFavourite,
            handleIsFavourite,
        }}>
            {children}
        </MusicContext.Provider>
    );
}

export const useMusic = () => {
    const context = React.useContext(MusicContext);
    if (context === undefined) {
        throw new Error('useMusic must be used within a MusicProvider');
    }
    return context;
}