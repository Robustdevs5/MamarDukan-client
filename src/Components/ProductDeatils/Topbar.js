import React from 'react';
import SocialMedia from '../Navbar/SocialMedia/SocialMedia';

const Topbar = () => {
    return (
        <div>
            <div className="left">
                <h1 className="text-3xl ">Title</h1>
                <p className="text-sm">Brand:</p>
            </div>
            <div className="right">
                <SocialMedia></SocialMedia>
            </div>
        </div>
    );
};

export default Topbar;