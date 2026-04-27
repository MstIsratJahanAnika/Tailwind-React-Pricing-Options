// import React from 'react';

import { use } from "react";

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    console.log(pricingData); //success
    
    return (
        <div>
            
        </div>
    );
};

export default PricingOptions;