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
    // console.log(user);


    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);

            console.log('found user role1', foundUser.role)
            if (foundUser.role === "user") {
                console.log('found user role', foundUser.role)
                setCheckCustomer(true)
            } else if (foundUser.role === "admin") {
                console.log('found user role2', foundUser.role)
                setCheckAdmin(true)
            } else if (foundUser.role === "superadmin") {
                console.log('found user role2', foundUser.role)
                setSuperAdmin(true)
            }
        }
    }, []);



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
    // console.log(checkAdmin);




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
