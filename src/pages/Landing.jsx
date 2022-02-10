import React, { useState } from 'react';
// components
import MusicCard from '../components/sections/Music';
import Header from '../components/sections/Hero';
import NavBar from '../components/sections/NavBar';
import Player from '../components/audio/Player';
// audio
import audio from '../components/audio/so what.mp3'


export default function Landing() {

    return (
        <div>
            <NavBar />
            <Header />
            <MusicCard url={audio} />
        </div>

    );
};