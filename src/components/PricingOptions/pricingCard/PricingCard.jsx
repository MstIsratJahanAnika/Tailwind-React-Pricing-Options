// import React from 'react';

import PricingFeature from "./PricingFeature";

const PricingCard = ({pricing}) => {
    console.log(pricing);  //proti ta object er data pacchi 

    const {membershipType, price, duration, popular, description, features, limitatons} = pricing;
    return (
        <div className="flex flex-col border bg-amber-100 p-4 rounded-2xl">
            {/* card header */}
            <h2 className="text-3xl font-bold">{membershipType}</h2>
            <h2 className="font-semibold">Pricing {price}/{duration}</h2>
            
            {/* card body */}
            <div className="flex-1 bg-orange-200 p-3 rounded-2xl mt-10">
                <p className="font-bold">{description}</p>
                {
                    features.map((feature,index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;