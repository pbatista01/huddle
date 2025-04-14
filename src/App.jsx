// Importing individual components that make up the page
import Header from "./Header.jsx";
import Hero from './Hero.jsx';
import Feature from './Feature.jsx';
import CTA from './CTA.jsx';
import Footer from "./Footer.jsx";

// Importing images used in the Feature sections
import growImg from './images/illustration-grow-together.svg';
import flowImg from './images/illustration-flowing-conversation.svg';
import usersImg from './images/illustration-your-users.svg';

// Main App component
function App() {
  return (
    <>
      {/* Top navigation bar */}  
      <Header />

      {/* Hero section at the top of the landing page */}
      <Hero />

      {/* First Feature section */}
      <Feature
        featureImg={growImg}
        featureTitle="Grow Together"
        featureDescription="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
        extraMargin="lgplus:w-[75%]" // Custom width on large-plus screens
      />

       {/* Second Feature section */}
      <Feature
        featureImg={flowImg}
        featureTitle="Flowing Conversations"
        featureDescription="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
        extraOuterClass="pt-[66px] lg:mt-[40px]" // Padding top and top margin on large screens
        extraInnerClass="mt-[68px] pb-[52px] lgplus:ml-[169px] lg:order-3 lg:ml-[40px]" // Margin, padding bottom, order & left margin adjustments
        extraMargin="mt-[15px] lgplus:w-[100%]"  // Adjust spacing and width for larger screens
        changeOrderImg="lg:order-1 lgplus:order-1" // Change image order on large screens
      />

       {/* Third Feature section */}
      <Feature
        featureImg={usersImg}
        featureTitle="Your Users"
        featureDescription="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
        extraOuterClass="mt-[39px] pt-[60px] lg:mt-[40px]" // Spacing adjustments for top margin and padding
        extraInnerClass="mt-[63px]" // Additional top margin
        extraMargin="mt-[14px] w-[95%] lgplus:w-[73%] "  // Responsive width and margin spacing
      />

      {/* Call to Action section */}
      <CTA />

      {/* Page footer */}
      <Footer />
    </>
  );
}

export default App
