import React from 'react';
import ShipingInfo from '../../../UserDashboard/Onclick Page/ShipingInfo';
import DeliveryReport from './DeliveryReport';

const DeliveryDetails = () => {
    return (
        <div className="flex">
            <div className="w-2/5"><ShipingInfo /></div>
            <div className="w-2/5"><DeliveryReport /></div>
        </div>
    );
};

export default DeliveryDetails;