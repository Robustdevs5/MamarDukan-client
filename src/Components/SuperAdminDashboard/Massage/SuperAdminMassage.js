import React from 'react';
import SuperAdminSidebar from '../SuperAdminSidebar/SuperAdminSidebar';
import { DashboardContainer } from '../Style/AddSuperAdminStyle';
import Massage from './Massage' ;


const SuperAdminMassage = () => {
    return (
        <div className="flex">
            <DashboardContainer >
                    <SuperAdminSidebar />
                    <div className="w-9/12 mx-auto"><Massage  /></div>
            </DashboardContainer>
        </div>
    );
};

export default SuperAdminMassage;