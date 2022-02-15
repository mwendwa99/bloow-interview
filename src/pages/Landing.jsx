import React from 'react';
// components
import MusicCard from '../components/Sections/Music';
import Header from '../components/Sections/Hero';
import NavBar from '../components/Sections/NavBar';
import UploadButton from '../components/Buttons/UploadButton';
// audio
import defaultSong1 from '../assets/audio/defaultSong1.mp3'


export default function Landing() {

    return (
        <div>
            <NavBar />
            <Header />
            <MusicCard url={defaultSong1} />
            <UploadButton />
        </div>

    );
};