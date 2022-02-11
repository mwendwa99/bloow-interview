import React, { createContext } from 'react';

// create music context
export const MusicContext = createContext(
    {
        music: [],
        currentMusic: null,
        handleCurrentMusic: () => { },
        isPlaying: false,
        handleIsPlaying: () => { },
        isPaused: false,
        handleIsPaused: () => { },
        isStopped: false,
        handleIsStopped: () => { },
    }
);
