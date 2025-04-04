import logo from './images/logo.svg';
import iconLocation from './images/icon-location.svg';
import iconPhone from './images/icon-phone.svg';
import iconEmail from './images/icon-email.svg';

function Footer(){
    return(
        <footer>
            <div>
                <img src={logo} atl="logo" />
                <div>
                    <img src={iconLocation} alt="icon location" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div>
                    <img src={iconPhone} alt="icon phone number" />
                    <p>+1-543-123-4567</p>
                </div>
                <div>
                    <img src={iconEmail} alt="icon email" />
                    <p>example@huddle.com</p>
                </div>
            </div>
            <div>
                <ul>
                    <li><a>About Us</a></li>
                    <li><a>What We Do</a></li>
                    <li><a>FAQ</a></li>
                </ul>
                <ul>
                    <li><a>Career</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;