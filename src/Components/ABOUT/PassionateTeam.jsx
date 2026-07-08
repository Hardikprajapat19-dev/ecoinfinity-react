import React from 'react';
import PassionateTeamImg from "../../assets/265A9521-team-COLOUR-1-1024x630.jpg";

function PassionateTeam() {
    return (
        <>
            <div className='PassionateTeam-section'>
                <div className='PassionateTeam-text'>
                    <h2  data-animate="fade-up">infinitely passionate
                    </h2>
                </div>
                <div className='PassionateTeam-image'>
                    <img src={PassionateTeamImg} alt='PassionateTeamImg'></img>
                </div>
            </div>
        </>
    );
}

export default PassionateTeam;