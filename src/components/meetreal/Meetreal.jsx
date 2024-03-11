import './meetreal.scss';
import React from 'react';
import ctaimg from '../../assets/cta_img.png';
import ctaicon from '../../assets/cta_icon.png';
import { Link } from 'react-router-dom';

const Meetreal = () => {
    return (
        <div className='meet-real-main'>
            <div className="meet-real-center">
                <div className="img-container">
                    <img src={ctaimg} alt="" />
                </div>
                <div className="text-container">
                    <img src={ctaicon} alt="" />
                    <h2>WORLDS MEET <span>REAL</span></h2>
                    <p className='top-div-p'>Compete with 100 player on a remote island for winner known issue where certain strategic</p>
                    <Link to="#">VIEW SCHEDULE</Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Meetreal
