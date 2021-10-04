import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import AdminPanel from '../../AdminDashboard/AdminPanel/AdminPanel';
import CustomerPanel from '../../CustomerDashboard/CustomerPanel/CustomerPanel';



const LoginPanel = () => {

    const { loggedInUser, setLoggedInUser } = useContext(userContext);
    const [checkCustomer, setCheckCustomer] = useState(false);
    const [checkAdmin, setCheckAdmin] = useState(false);

    console.log(loggedInUser.email);

    const user = {
        email: loggedInUser.email,
        password: loggedInUser.password
    }

    useEffect(() => {
        fetch('http://localhost:5000/user/login-admin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => setCheckAdmin(data));
    }, [])
    console.log(checkAdmin);


    // useEffect(() => {
    //     fetch('http://localhost:5000/user/login-user', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => setCheckCustomer(data))
    // }, [])
    // console.log(checkCustomer);




    return (
        <>
            <h1>asdsdad</h1>
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
