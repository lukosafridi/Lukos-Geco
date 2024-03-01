import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';

const Header = () => {
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
        <div className="header">
            <div className='top-bg'>
                <div className='top-header'>
                    <div className='left-bar'>
                        <span>Exclusive Black Friday ! Offer</span>
                    </div>
                    <div className='right-bar'>
                        <div className="socials">
                            <ul>
                                <li>
                                    <img src={instagram} alt="" />
                                </li>
                                <li>
                                    <img src={twitter} alt="" />
                                </li>
                                <li>
                                    <img src={linkedin} alt="" />
                                </li>
                                <li>
                                    <img src={facebook} alt="" />
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


                                    {navItems.map((navitem) => (
                                        // <div key={navitem.name} className='navigation'>
                                        <li>
                                            <NavLink
                                                to={navitem.href}
                                                activeClassName="active"
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
        </div>
    );
};

export default Header;
