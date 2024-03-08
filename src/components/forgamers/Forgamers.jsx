import './forgamers.scss'
import React from 'react'
import justgamerimg from '../../assets/just_gamers_img.png';
import gamerscircleline from '../../assets/gamers_circle_line.png';
import gamerscircleshape from '../../assets/gamers_circle_shape.png';
import justgamerschart from '../../assets/just_gamers_chart.png';
import gamerlisticon01 from '../../assets/gamer_list_icon01.png';
import gamerlisticon02 from '../../assets/gamer_list_icon02.png';
import gamerlisticon03 from '../../assets/gamer_list_icon03.png';
import gamerlisticonbg from '../../assets/gamer_list_icon_bg.jpg';

const Forgamers = () => {

  const iconbox = [
    {
      icon: gamerlisticon01,
      title: "VR Development",
      description: "See how well critics rating new video game release with 100 players",
    },
    {
      icon: gamerlisticon02,
      title: "Design & Strategy",
      description: "Village and the subline of her own road, the Line Lane. Pityful a rethoric question",
    },
    {
      icon: gamerlisticon03,
      title: "Jungle Pharaoh",
      description: "Village and the subline of her own road, the Line Lane. Pityful a rethoric question",
    },
  ]


  return (
    <div className='just-gamer-bg'>
      <div className="just-gamer-main">
        <div className="just-gamer-left">
          <div className="top-dev">
            <h2>JUST FOR <span>GAMERS</span></h2>
            <p className='top-div-p'>Compete with 100 player on a remote island for winner known issue where certain strategic</p>
            <div className="icon-box-div">
              {iconbox.map((ib, index) => {
                return (
                  <div className="icon-box" key={index}>
                    <div className="icon" >
                      <img src={ib.icon} alt="" />
                    </div>
                    <div className="ib-text-container">
                      <h3>{ib.title}</h3>
                      <p>{ib.description}</p>
                    </div>
                  </div>
                  )
              })}
            </div>
          </div>
        </div>
        <div className="just-gamer-right">
          <img className='justgamerimg' src={justgamerimg} alt="" />
          <img className='gamerscircleline' src={gamerscircleline} alt="" />
          <img className='gamerscircleshape' src={gamerscircleshape} alt="" />
          <img className='justgamerschart' src={justgamerschart} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Forgamers
