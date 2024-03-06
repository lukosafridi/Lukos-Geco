import React from 'react';
import './releasedgames.scss';
import Slider from "react-slick";
import releasedgameimg01 from '../../assets/released_game_img01.jpg';
import releasedgameimg02 from '../../assets/released_game_img02.jpg';
import releasedgameimg03 from '../../assets/released_game_img03.jpg';
import releasedgameimg03 from '../../assets/release_game_nav02.jpg';



const Responsive = () => {

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



  var settings = {
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
      <Slider {...settings}>

        {releasedgames.map((games) => {
          return (
            <>
              <div className='slide-box'>
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
              </div >
            </>
          )
        })}
      </Slider>
    </div >
  );
}

const Responsive2 = () => {

  const releasedgames = [
    {
      img: releasedgameimg01,
    },
    {
      img: releasedgameimg02,
    },
    {
      img: releasedgameimg03,
    },
  ]



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>

        {releasedgames.map((games) => {
          return (
            <>
              <div className='slide-box'>
                 <div className="item-image"> {/*style={{ backgroundImage: `url(${games.img})`}}*/ }
                  <img src={games.img} alt="" />
                </div>
              </div >
            </>
          )
        })}
      </Slider>
    </div >
  );
}




const Releasedgames = () => {
  return (
    <div className='releasedgames-main'>
      <div className="releasedgames-text-container">
        <h2>RELEASED <span>GAMES</span></h2>
        <p>Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p>
      </div>
      <div className="released-games-slider">
        <div className='hori-slider'>
          <Responsive />
        </div>
        <div className="veri-slider">
          <Responsive2 />
        </div>
      </div>
    </div>
  )
}

export default Releasedgames
