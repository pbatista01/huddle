import heroImg from './images/illustration-mockups.svg';

function Hero(){
    return(
        <section className="px-10 py-20 text-center bg-paleCyan bg-cover bg-hero-mobile md:bg-hero-desktop" >
            <div className="flex flex-col lg:flex-row">
                <h1 className="font-heading text-darkCyan font-">Build The Community Your Fans Will Love</h1>
                <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <button>Get Started For Free</button>
            </div>
            <img src={heroImg} alt="chat images"/>
        </section>
    );
}

export default Hero;