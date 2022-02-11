import React, { useState } from 'react';
// components
import MusicCard from '../components/Sections/Music';
import Header from '../components/Sections/Hero';
import NavBar from '../components/Sections/NavBar';
import UploadButton from '../components/Buttons/UploadButton';
// audio
import audiofile from '../components/Audio/ZUU.mp3'


export default function Landing() {

    // add audio to array
    const [audio] = useState(new Audio(audiofile));
    // console.log('audio', audio);

    return (
        <div>
            <NavBar />
            <Header />
            <MusicCard url={audiofile} />
            <UploadButton />
        </div>

    );
};