import React from 'react';
import bannerImg from '../../images/banner-0.png';
const HomePageBanner = () => {
    return (
        <div className="my-16" style={{backgroundColor: "#dd2400"}}>
            <div class="container mx-auto">
                <div class="flex">
                    <div class="flex-1">
                        <div>
                            <img src={bannerImg} alt="Banner Title"/>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div>
                            <h2>Best Smart LED TV</h2>
                            <p>Collection 2021</p>
                            <p>Term & Condition May Applied</p>
                        </div>
                    </div>
                    <div class="flex-1">
                    <button class="bg-custom hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageBanner;