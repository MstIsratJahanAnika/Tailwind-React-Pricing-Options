// import React from 'react';

import { use } from "react";
// import PricingCard from "./pricingCard/PricingCard";
import DaisyPricingCard from "../DaisyPricingCard/DaisyPricingCard";

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    console.log(pricingData); //success

    return (
        <div>
            <h2 className="font-bold text-5xl">Get Our Membership</h2>
            {/* cards container*/}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}


                {/* daisy theke */}
                {
                    pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;