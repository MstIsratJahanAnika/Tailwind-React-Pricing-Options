// import React from 'react';

import { CircleCheckBig } from "lucide-react";

const PricingFeature = ({feature}) => {
    return (
        <p className="flex mt-2">
            <CircleCheckBig className="mr-1.5"></CircleCheckBig> {feature}
        </p>
    );
};

export default PricingFeature;