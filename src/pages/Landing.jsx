import React from 'react';
// components
import MusicCard from '../components/Sections/Music';
import Header from '../components/Sections/Hero';
import NavBar from '../components/Sections/NavBar';
import UploadButton from '../components/Buttons/UploadButton';
import UserMusic from '../components/Sections/UserMusic';

export default function Landing() {

    return (
        <div>
            <NavBar />
            <Header />
            <MusicCard />
            <UploadButton />
            <UserMusic />
        </div>

    );
};