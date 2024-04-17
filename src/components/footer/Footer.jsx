import React from 'react';
import './footer.scss';
import envelope from '../../assets/envelope.png';
import logo from '../../assets/logo.png';
import envelopeopen from '../../assets/envelope_open.png';
import headphone from '../../assets/headphone.png';
import location from '../../assets/location.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import card_img from '../../assets/card_img.png';
import { Link } from 'react-router-dom';


const Footer = () => {

    const productslink = [
        {
            title: "Graphics (26)",
            send: "#"
        },
        {
            title: "Backgrounds (11)",
            send: "#"
        },
        {
            title: "Fonts (9)",
            send: "#"
        },
        {
            title: "Music (3)",
            send: "#"
        },
        {
            title: "Photography (3)",
            send: "#"
        },
    ]


    const needhelp = [
        {
            title: "Terms & Conditions",
            send: "#"
        },
        {
            title: "Privacy Policy",
            send: "#"
        },
        {
            title: "Refund Policy",
            send: "#"
        },
        {
            title: "Affiliate",
            send: "#"
        },
        {
            title: "FAQUse Cases",
            send: "#"
        },
    ]

    const social = [
        {
            icon: twitter,
            send: "#"
        },
        {
            icon: instagram,
            send: "#"
        },
        {
            icon: facebook,
            send: "#"
        },
        {
            icon: linkedin,
            send: "#"
        },
    ]



    return (
        <div className='main-div-footer'>
            <div className="footer-top">
                <div className="news-letter">
                    <h2>Our <span>Newsletter</span></h2>
                </div>
                <div className="news-letter-form">
                    <form action="/action_page.php">
                        <label htmlFor="email"><img src={envelope} alt="" /></label>
                        <input type="email" id="nl-email" name='email' placeholder="Email"></input>
                        <input className='nl-button' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <div className="main-footer">
                <div className="f-col1">
                    <img src={logo} alt="" />
                    <p className='desc'>Gemas marketplace the relase etras<br /> thats sheets continig passag.</p>
                    <p><span><img src={location} alt="" /></span>Address : <Link to="https://maps.app.goo.gl/RrP3U3xLmJ7bcsuNA">A/56 P.E.C.H.S Allah Wali Colony bloack 6</Link></p>
                    <p><span><img src={headphone} alt="" /></span>Phone : <Link to="tel:3480276224">+92 348 0276224</Link></p>
                    <p><span><img src={envelopeopen} alt="" /></span>Email : <Link to="mailto:Shahzaibafridi3377@gmail.com">Shahzaibafridi3377@gmail.com</Link></p>
                </div>
                <div className="f-col2">
                    <h5>Products</h5>
                    <span></span>
                    {productslink.map((item, index) => (
                        <Link key={index} to={item.send}>{item.title}</Link>
                    ))}
                </div>
                <div className="f-col3">
                    <h5>Need Help?</h5>
                    <span></span>
                    {needhelp.map((item, index) => (
                        <Link key={index} to={item.send}>{item.title}</Link>
                    ))}
                </div>
                <div className="f-col4">
                    <h5>Products</h5>
                    <span></span>
                    <ul className='socials'>
                        {social.map((item, index) => (
                            <li key={index}>
                                <Link to={item.send}><img src={item.icon} alt="" /></Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='bootom-center'>
                    <div className='copyright'>
                        <p>Copyright © 2024 <Link to="#">Geco</Link> All Rights Reserved.</p>
                    </div>
                    <div className='payment-partners'>
                        <img src={card_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
