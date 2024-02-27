import './header.scss'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='header'>
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
            <div className='main-header'>
                <div className="main-header-top">
                    <div className="main-header-center">
                        <div className="main-header-left">
                            <img src={logo} alt="" />
                        </div>
                        <div className="main-header-right">
                            <ul>
                                <li>
                                    <a href="http://localhost:5173/">HOME</a>
                                </li>
                                <li>
                                    <a href="#">PAGES</a>
                                </li>
                                <li>
                                    <a href="#">OVERVIEW</a>
                                </li>
                                <li>
                                    <a href="#">COMMUNITY</a>
                                </li>
                                <li>
                                    <a href="#">BLOGS</a>
                                </li>
                                <li>
                                    <a href="#">CONTACT</a>
                                </li>   
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
