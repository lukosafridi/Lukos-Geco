import './header.scss'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='top-header'>
                <div className='left-bar'>
                    <span>Exclusive Black Friday ! Offer</span>
                </div>
                <div className='right-bar'>
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
            </div>
            <div className='main-header'>

            </div>
        </div>
    )
}

export default Header
