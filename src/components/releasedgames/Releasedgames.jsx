import React from 'react';
import './releasedgames.scss';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import releasedgameimg01 from '../../assets/released_game_img01.jpg';
import releasedgameimg02 from '../../assets/released_game_img02.jpg';
import releasedgameimg03 from '../../assets/released_game_img03.jpg';
import releasedgamenav01 from '../../assets/release_game_nav01.jpg';
import releasedgamenav02 from '../../assets/release_game_nav02.jpg';
import releasedgamenav03 from '../../assets/release_game_nav03.jpg';



const Responsive = ({ sliderRef }) => {




  const releasedgames = [
    {
      img: releasedgameimg01,
      rating: "5 stars",
      title: "Call ",
      span: "of Duty",
      category: "Virtual Game",
      model: "Compete 100 players",
      Controller: "Playstation 5 , Xbox , PS4",
      description: "Compete with 100 players on a remote thats island for winner takes showdown known issue",
      href: "#"
    },
    {
      img: releasedgameimg02,
      rating: "5 stars",
      title: "Battle ",
      span: "Grounds",
      category: "Virtual Game",
      model: "Compete 100 players",
      Controller: "Playstation 5 , Xbox , PS4",
      description: "Compete with 100 players on a remote thats island for winner takes showdown known issue",
      href: "#"
    },
    {
      img: releasedgameimg03,
      rating: "5 stars",
      title: "Monster ",
      span: "Hunter",
      category: "Virtual Game",
      model: "Compete 100 players",
      Controller: "Playstation 5 , Xbox , PS4",
      description: "Compete with 100 players on a remote thats island for winner takes showdown known issue",
      href: "#"
    },
  ]



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {releasedgames.map((games, index) => (
          <div className='slide-box' key={index}>
            <div className="item-image">
              <img src={games.img} alt="" />
            </div>
            <div className="item-text-container">
              <h5>Rating :<span>{games.rating}</span></h5>
              <h4>{games.title}<span>{games.span}</span></h4>
              <ul>
                <li>Category : <span>{games.category}</span></li>
                <li>Model : <span>{games.model}</span></li>
                <li>Controller : <span>{games.Controller}</span></li>
              </ul>
              <p>{games.description}</p>
              <a href={games.href}>buy now</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}






const Releasedgames = () => {

  const veriimgs = [
    {
      img: releasedgamenav01,
      id: 0
    },
    {
      img: releasedgamenav02,
      id: 1
    },
    {
      img: releasedgamenav03,
      id: 2
    },
  ];


  const sliderRef = React.useRef(null);

  const imgclick = (img) => {
    console.log('Image clicked:', img);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(img.id);
    }
  };
  

  return (
    <div className='releasedgames-main'>
      <div className="releasedgames-text-container">
        <h2>RELEASED <span>GAMES</span></h2>
        <p>Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p>
      </div>
      <div className="released-games-slider">
        <div className='hori-slider'>
          <Responsive sliderRef={sliderRef} />
        </div>
        <div className="veri-slider">
          {veriimgs.map((imgs, index, ) => {
            return (
              <motion.img
                id={imgs.id}
                key={index}
                whileHover={{
                  scale: 1.1, transition: { duration: .1 }
                }}
                whileTap={{
                  scale: .9, transition: { duration: .1 }
                }}
                src={imgs.img} alt="" 
                onClick={() => imgclick(imgs)}
                />
            )
          })}
          {/* <Responsive2 /> */}
        </div>
      </div>
    </div>
  )
}

export default Releasedgames
