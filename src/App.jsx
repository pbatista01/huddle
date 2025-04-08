import Header from "./Header.jsx";
import Hero from './Hero.jsx';
import Feature from './Feature.jsx';
import CTA from './CTA.jsx';
import Footer from "./Footer.jsx";


import growImg from './images/illustration-grow-together.svg';
import flowImg from './images/illustration-flowing-conversation.svg';
import usersImg from './images/illustration-your-users.svg';


function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <div className="pt-[14px]">
      <Feature
        featureImg={growImg}
        featureTitle="Grow Together"
        featureDescription="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
      />
      <Feature
        featureImg={flowImg}
        featureTitle="Flowing Conversations"
        featureDescription="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
        extraOuterClass="pt-[66px]"
        extraInnerClass="mt-[68px] pb-[52px]"
        extraMargin="mt-[15px]"
      />
      <Feature
        featureImg={usersImg}
        featureTitle="Your Users"
        featureDescription="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
        extraOuterClass="mt-[39px] pt-[60px]"
        extraInnerClass="mt-[63px]"
        extraMargin="mt-[14px] w-[95%]"
      />
      </div>
      <CTA />
      <Footer />
    </>
  );
}

export default App
