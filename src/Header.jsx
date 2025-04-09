import logo from './images/logo.svg';

function Header(){
    return(
        <header className="flex items-center px-4 lg:px-20 lg:py-14 py-6 bg-paleCyan justify-between">
            <img src={logo} alt="logo" className="w-[105px] lg:w-[200px] fill-black " />
            <button className="bg-white font-heading text-darkCyan w-24 lg:w-[200px] text-[10px] lg:text-sm shadow-md h-6 lg:h-12 p-1 rounded-full hover:opacity-50">Try It Free</button>
        </header>
    );
}

export default Header;