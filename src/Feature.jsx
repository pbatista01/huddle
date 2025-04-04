function Feature({featureImg, featureTitle, featureDescription}){
    return(
        <div>
            <div>
                <h2>{featureTitle}</h2>
                <p>{featureDescription}</p>
            </div>
            <img src={featureImg} alt={featureTitle}/>
        </div>
    );
}

export default Feature;