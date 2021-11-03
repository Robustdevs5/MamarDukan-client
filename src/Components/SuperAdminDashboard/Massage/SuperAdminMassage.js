import SuperAdminSidebar from '../SuperAdminSidebar/SuperAdminSidebar';
import Massage from './Massage' ;


const SuperAdminMassage = () => {
    
    return (
        <div className=" bg-gray-800 ">
            <div className="flex flex-wrap">
                <SuperAdminSidebar/>

                <div className="sm:w-4/5 w-screen mx-auto">
                    <Massage />
                </div>
            </div>
        </div>
    )
}

export default SuperAdminMassage;