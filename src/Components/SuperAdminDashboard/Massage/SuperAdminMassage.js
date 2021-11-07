import Navbar from '../../Navbar/Navbar/Navbar';
import TopBar from '../../TopBar/TopBar';
import { DashboardContainer } from '../Style/AddSuperAdminStyle';
import SuperAdminSidebar from '../SuperAdminSidebar/SuperAdminSidebar';
import Massage from './Massage' ;


const SuperAdminMassage = () => {
    
    return (
        <div className=" ">
            <TopBar/>
            <Navbar/>
            <DashboardContainer>
                <SuperAdminSidebar/>

                <div className="md:w-5/6 w-full h-screen scrollBar">
                    <Massage />
                </div>
            </DashboardContainer>
        </div>
    )
}

export default SuperAdminMassage;