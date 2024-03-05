import React from 'react';
import './releasedgames.scss';
import Slider from "react-slick";



const Responsive = () => {
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
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Slider>
      </div>
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

                </div>
            </div>
        </div>
    )
}

export default Releasedgames
