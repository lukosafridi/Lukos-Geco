import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';
import { motion } from 'framer-motion';

const Header = () => {

    const socialvariants = {
        hover: {
            scale: 1.1,
        }
    }




    const navItems = [
        {
            name: 'HOME',
            href: '',
        },
        {
            name: 'PAGES',
            href: '/pages',
        },
        {
            name: 'OVERVIEW',
            href: '/overview',
        },
        {
            name: 'COMMUNITY',
            href: '/community',
        },
        {
            name: 'STORE',
            href: '/store',
        },
        {
            name: 'BLOG',
            href: '/blog',
        },
        {
            name: 'CONTACT',
            href: '/contact',
        },
    ];

    return (
        <motion.div className="header"
            variants={socialvariants}
        >
            <div className='top-bg'>
                <div className='top-header'>
                    <div className='left-bar'>
                        <span>Exclusive Black Friday ! Offer</span>
                    </div>
                    <div className='right-bar'>
                        <div className="socials">
                            <ul>
                                <li>
                                    <motion.img
                                        whileHover={{
                                            scale: 1.2,
                                        }}
                                        src={instagram}
                                        alt="" />
                                </li>
                                <li>
                                    <motion.img
                                        whileHover={{
                                            scale: 1.2,
                                        }}
                                        src={twitter} alt="" />
                                </li>
                                <li>
                                    <motion.img
                                        whileHover={{
                                            scale: 1.2,
                                        }}
                                        src={linkedin} alt="" />
                                </li>
                                <li>
                                    <motion.img
                                        whileHover={{
                                            scale: 1.2,
                                        }}
                                        src={facebook} alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="email">
                            <p>
                                <span>|</span>
                                <a href="#">shahzaibafridi3377@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-header">
                <div className="main-header-top">
                    <div className="main-header-center">
                        <div className="main-header-left">
                            <img src={logo} alt="" />
                        </div>
                        <div className="main-header-right">
                            <div className='navigation'>
                                <ul>


                                    {navItems.map((navitem, index) => (
                                        // <div key={navitem.name} className='navigation'>
                                        <li key={index}>
                                            <NavLink
                                                to={navitem.href}
                                                activeclassname="active"
                                            >
                                                {navitem.name}
                                            </NavLink>
                                        </li>

                                        // </div>
                                    ))}

                                </ul>

                            </div>
                            <div className="cart-search">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;
