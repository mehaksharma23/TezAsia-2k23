import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
    <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-gray-800 sm:px-8 px-4 py-4">
            <Link to="/">
                {/* <img src={logo} alt="logo" className="w-28 object-contain" /> */}
                <span className='text-white text-3xl'>nftGEN</span>
            </Link>

            <Link to="/generate-nft" className="font-inter font-medium bg-[#000000] text-white px-4 py-2 rounded-md">Create</Link>
        </header>
        <main className="bg-gradient-to-br from-gray-900 to-gray-800 h-screen w-full">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/generate-nft" element={<CreatePost />} />
                </Routes>
        </main>
    </BrowserRouter>
);

export default App;
