function Feature({featureImg, featureTitle, featureDescription, extraOuterClass="", extraInnerClass="", extraMargin=""}){
    return(
        <div className={`w-[90%] m-auto mt-[42px] px-7 pt-14 bg-white flex flex-col justify-center items-center border rounded-xl shadow-lg border-transparent ${extraOuterClass}`}>
            <div className={`flex flex-col order-2 text-center mt-14 pb-8 w-[92%] ${extraInnerClass}`}>
                <h2 className="font-heading text-[20px] text-darkCyan">{featureTitle}</h2>
                <p className={`text-sm leading-[21px] m-auto mt-4 text-grayBlue ${extraMargin}`}>{featureDescription}</p>
            </div>
            <img src={featureImg} alt={featureTitle} className="w-[242px]"/>
        </div>
    );
}

export default Feature;