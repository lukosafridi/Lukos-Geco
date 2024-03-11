import { Link } from 'react-router-dom';
import './featuredgames.scss';
import React from 'react'
import icon1 from '../../assets/featured_game_icon.png';

const Featuredgames = () => {
    return (
        <div className="featured-games-main">
            <div className='featuredgames'>
                <div className="featured-text-container">
                    <h2>JUST FEATURED <span>GAMES</span></h2>
                    <p>Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p>
                </div>
                <div className="boxes-container1">
                    <div className="gamebox-left">
                        <div className="hover-text">
                            <img src={icon1} alt="" />
                            <Link to="#"><h4>JUST FOR <span>GAMERS</span></h4></Link>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                        <div className="feature-game-content">
                            <h4>JUST FOR <span>GAMERS</span></h4>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                    </div>
                    <div className="gamebox-center">
                        <div className="hover-text">
                            <img src={icon1} alt="" />
                            <Link to="#"><h4>JUST FOR <span>GAMERS</span></h4></Link>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                        <div className="feature-game-content">
                            <h4>JUST FOR <span>GAMERS</span></h4>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                    </div>
                    <div className="gamebox-right">
                        <div className="hover-text">
                            <img src={icon1} alt="" />
                            <Link to="#"><h4>JUST FOR <span>GAMERS</span></h4></Link>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                        <div className="feature-game-content">
                            <h4>JUST FOR <span>GAMERS</span></h4>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                    </div>
                </div>
                <div className="boxes-container2">
                <div className="gamebox-left">
                        <div className="hover-text">
                            <img src={icon1} alt="" />
                            <Link to="#"><h4>JUST FOR <span>GAMERS</span></h4></Link>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                        <div className="feature-game-content">
                            <h4>JUST FOR <span>GAMERS</span></h4>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                    </div>
                    <div className="gamebox-center">
                        <div className="hover-text">
                            <img src={icon1} alt="" />
                            <Link to="#"><h4>JUST FOR <span>GAMERS</span></h4></Link>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                        <div className="feature-game-content">
                            <h4>JUST FOR <span>GAMERS</span></h4>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                    </div>
                    <div className="gamebox-right">
                        <div className="hover-text">
                            <img src={icon1} alt="" />
                            <Link to="#"><h4>JUST FOR <span>GAMERS</span></h4></Link>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                        <div className="feature-game-content">
                            <h4>JUST FOR <span>GAMERS</span></h4>
                            <p>PLAYSTATION 5 , XBOX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featuredgames
