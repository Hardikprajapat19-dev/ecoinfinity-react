
import React from 'react';
import InfrastructureImg from "../../assets/Asset-3.jpg";

function Infrastructure() {
    return (
        <div
            className="Infrastructure-section"
            style={{ backgroundImage: `url(${InfrastructureImg})` }}
        >
            <div className="Infrastructure-overlay">
                <div className="Infrastructure-text">
                    <h2 data-animate="fade-up">at India's first & only</h2>
                </div>
            </div>
        </div>
    );  
}

export default Infrastructure;