import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import AdminPanel from '../../AdminDashboard/AdminPanel/AdminPanel';
import Dashboard from '../../UserDashboard/Dashboard';
import CustomerPanel from '../../CustomerDashboard/CustomerPanel/CustomerPanel';
import SuperAdminDashboard from '../../SuperAdminDashboard/SuperAdminDashboard/SuperAdminDashboard';



const LoginPanel = () => {

    // const { loggedInUser, setLoggedInUser } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = useState([]);
    const [checkCustomer, setCheckCustomer] = useState(false);
    const [checkAdmin, setCheckAdmin] = useState(false);
    const [superAdmin, setSuperAdmin] = useState(false);


    // const { user, setUser } = useContext(userContext);
 


    // useEffect(() => {
    //     const loggedInUser = sessionStorage.getItem("user");
    //     if (loggedInUser) {
    //         const foundUser = JSON.parse(loggedInUser);

    //         if (foundUser.role === "user") {
    //             setCheckCustomer(true)
    //         } else if (foundUser.role === "admin") {
    //             setCheckAdmin(true)
    //         } else if (foundUser.role === "superadmin") {
    //             setSuperAdmin(true)
    //         }
    //     }
    // }, []);



    // useEffect(() => {
    //     const loggedInUser = sessionStorage.getItem("user");
    //     if (loggedInUser) {
    //         const foundUser = JSON.parse(loggedInUser);
    //         if (foundUser.role === "admin") {
    //             setCheckAdmin(true)
    //         }
    //     }
    // }, []);


    // useEffect(() => {
    //     fetch('https://mamar-dukan.herokuapp.com/user/login-admin', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: user.email, password: user.password })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (user.success) {
    //                 setCheckAdmin(data)
    //             }
    //         })
    // }, [user])




    return (
        <>
            {checkAdmin && <div>
                <AdminPanel />
            </div>
            }

            {checkCustomer && <div>
                <Dashboard />
            </div>
            }
            {superAdmin && <div>
               <SuperAdminDashboard/>
            </div>
            }
        </>

    );
};

export default LoginPanel;
