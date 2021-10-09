import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import AdminPanel from '../../AdminDashboard/AdminPanel/AdminPanel';
import CustomerPanel from '../../CustomerDashboard/CustomerPanel/CustomerPanel';



const LoginPanel = () => {

    // const { loggedInUser, setLoggedInUser } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = useState([]);
    const [checkCustomer, setCheckCustomer] = useState(false);
    const [checkAdmin, setCheckAdmin] = useState(false);


    // const { user, setUser } = useContext(userContext);
    // console.log(user);


    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            if (foundUser.role === "user") {
                setCheckCustomer(true)
            }else if (foundUser.role === "admin") {
                setCheckAdmin(true)
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
    //     fetch('https://mamardukan.herokuapp.com/user/login-admin', {
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
            <h1>asdsdad</h1>
            <br />

            {checkAdmin && <div>
                <AdminPanel />
            </div>
            }

            {checkCustomer && <div>
                <CustomerPanel />
            </div>
            }
        </>

    );
};

export default LoginPanel;
