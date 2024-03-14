import './productscorner.scss';
import React from 'react';
import Slider from "react-slick";
import sproductimg01 from '../../assets/s_product_img01.jpg';
import sproductimg02 from '../../assets/s_product_img02.jpg';
import sproductimg03 from '../../assets/s_product_img03.jpg';
import sproductimg04 from '../../assets/s_product_img04.jpg';
import { Link } from 'react-router-dom';



const Responsive = () => {




    const releasedgames = [
        {
            img: sproductimg01,
            title: "Women Black T-shirt",
            price: "29.00",
            href: "#"
        },
        {
            img: sproductimg02,
            title: "Gears 5 Xbox Controller",
            price: "29.00",
            href: "#"
        },
        {
            img: sproductimg03,
            title: "GeForce RTX 2070",
            price: "29.00",
            href: "#"
        },
        {
            img: sproductimg04,
            title: "Virtual Reality Smiled",
            price: "29.00",
            href: "#"
        },
    ]



    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                {releasedgames.map((games, index) => (
                    <div className='slide-box' key={index}>
                        <div className="item-image">
                            <Link to="facebook"><img src={games.img} alt="Image Not Available" /></Link>
                        </div>
                        <div className="item-text-container">
                            {/* <h5>Rating :<span>{games.rating}</span></h5> */}
                            <div className="vrbtn">
                                <Link to={games.href}>VR-BOX</Link>

                            </div>
                            <div className="title-container">
                                <Link to="google">{games.title}</Link>
                                <h4 className='price' to="google">${games.price}</h4>
                            </div>
                            {/* <h4>{games.title}<span>{games.span}</span></h4>
                            <ul>
                                <li>Category : <span>{games.category}</span></li>
                                <li>Model : <span>{games.model}</span></li>
                                <li>Controller : <span>{games.Controller}</span></li>
                            </ul>
                            <p>{games.description}</p> */}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}



const Productscorner = () => {
    return (
        <div className='products-corner-main'>
            <div className="main-center">
                <div className="products-top-container">
                    <h2>JUST FEATURED <span>GAMES</span></h2>
                    <p>Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p>
                </div>
                <div className="products-slider">
                    <div className='hori-slider'>
                        <Responsive />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productscorner
