import React from 'react'
import aboutbanner from "../../assets/Asset-2.jpeg";

function AboutBanner() {
    return (
        <>
            <div className='About-section'>
                <div className='About-section-image'>
                    <img src={aboutbanner} alt='aboutbanner'></img>
                </div>
            </div>
        </>
    );
}

export default AboutBanner;