import logo from './images/logo.svg';

function Header(){
    return(
        <header className="flex items-center p-4 bg-paleCyan justify-between">
            <img src={logo} alt="logo" className="w-24 fill-black" />
            <button className="bg-white font-heading text-darkCyan w-24 text-[10px] shadow-md h-6 p-1 rounded-full">Try It Free</button>
        </header>
    );
}

export default Header;