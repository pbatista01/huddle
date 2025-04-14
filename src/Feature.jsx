// Feature component to display an image, title, and description in a responsive card layout
function Feature({
    featureImg,           // Image source for the feature
    featureTitle,         // Title of the feature
    featureDescription,   // Description text
    extraOuterClass = "", // Optional additional classes for the outer container
    extraInnerClass = "", // Optional additional classes for the inner text container
    extraMargin = "",     // Optional additional margin class for description
    changeOrderImg = ""   // Optional classes to change image order on larger screens
  }) {
    return(
        // Outer card container
        <div className={`w-[90%] lg:w-[85%] m-auto mt-[42px] lg:h-[440px] lg:mt-[155px] px-7 lg:pl-[80px] lgplus:pl-[120px] pt-14 lg:pt-1 bg-white flex flex-col lg:flex-row justify-center items-center border rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] border-transparent ${extraOuterClass}`}>
            {/* Text content block */}
            <div className={`flex flex-col order-2 text-center lg:text-start lg:basis-128 lg:w-[100%] lgplus:w-[70%] mt-14 pb-8 w-[92%] ${extraInnerClass}`}>
                <h2 className="font-heading text-[20px] lg:text-[28px] text-darkCyan">{featureTitle}</h2>
                <p className={`text-sm lg:text-[18px] lg:leading-[30px] lg:mx-0 leading-[21px] m-auto mt-4 text-grayBlue ${extraMargin}`}>{featureDescription}</p>
            </div>
            {/* Feature image */}
            <img src={featureImg} alt={featureTitle} className={`w-[242px] lg:w-[350px] lgplus:w-[410px] lg:basis-128 lg:order-2 ${changeOrderImg}`}/>
        </div>
    );
}

export default Feature;