import logo from './images/logo.svg';

function Header(){
    return(
        <header>
            <img src={logo} alt="logo" />
            <button>Try it free</button>
        </header>
    );
}

export default Header;