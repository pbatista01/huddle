import heroImg from './images/illustration-mockups.svg';

function Hero(){
    return(
        <section className="px-9 pt-14 lg:px-16 lgplus:px-20 pb-[33px] lg:pb-[65px] text-center lg:text-start bg-paleCyan bg-cover bg-no-repeat bg-hero-mobile md:bg-hero-desktop flex flex-col lg:flex-row lg:gap-4" >
            <div className="flex flex-col lg:basis-128">
                <h1 className="font-heading text-darkCyan text-2xl/9 mt-[2px] lg:w-[100%] lgplus:w-[90%] lg:text-[35px] lgplus:text-[40px] lgplus:mt-[45px] lg:leading-[60px]">Build The Community Your Fans Will Love</h1>
                <p className="text-[16px] lg:w-[92%] lg:text-[18px] tracking-normal mt-[21px] lgplus:mt-[30px] w-full">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <button className="w-[238px] lg:w-[280px] h-10 lg:h-14 bg-pink text-white font-heading text-[11.5px] lg:text-[15px] rounded-full m-auto lg:mx-1 mt-8 font-medium hover:opacity-50">Get Started For Free</button>
            </div>
            <img src={heroImg} alt="chat images" className="mt-[52px] lg:basis-128 lg:w-[450px] lg:h-[330px] lgplus:w-[700px] lgplus:h-[500px] lg:mt-[-50px] lgplus:w-[698px]"/>
        </section>
    );
}

export default Hero;