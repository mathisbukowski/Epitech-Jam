import React from 'react';
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";

const Documentation = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full py-[5rem] px-4 bg-white">
                <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: 'black', margin: 'auto' }} class = 'text-4xl'>Documentation Page</h1>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
};

export default Documentation;