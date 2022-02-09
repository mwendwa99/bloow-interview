import React, { useState } from 'react';
// components
import MusicCard from '../components/MusicCard';
import Header from '../components/sections/Hero';
import NavBar from '../components/sections/NavBar';

export default function Landing() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <NavBar />
            <Header />
            <MusicCard />
        </div>

    );
};