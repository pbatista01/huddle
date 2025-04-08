import heroImg from './images/illustration-mockups.svg';

function Hero(){
    return(
        <section className="px-9 pt-14 pb-[33px] text-center bg-paleCyan bg-cover bg-no-repeat bg-hero-mobile md:bg-hero-desktop" >
            <div className="flex flex-col lg:flex-row">
                <h1 className="font-heading text-darkCyan text-2xl/9 mt-[2px]">Build The Community Your Fans Will Love</h1>
                <p className="text-[16px] mt-[21px] w-full">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <button className="w-[238px] h-10 bg-pink text-white font-heading text-[11.5px] rounded-full m-auto mt-8 font-medium">Get Started For Free</button>
            </div>
            <img src={heroImg} alt="chat images" className="mt-[52px]"/>
        </section>
    );
}

export default Hero;