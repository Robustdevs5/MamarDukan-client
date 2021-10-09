import React, { useEffect, useState } from 'react';
import AdminPanel from '../../AdminDashboard/AdminPanel/AdminPanel';
import CustomerPanel from '../../CustomerDashboard/CustomerPanel/CustomerPanel';



const LoginPanel = () => {

    // const { loggedInUser, setLoggedInUser } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = useState([]);
    const [checkCustomer, setCheckCustomer] = useState(false);
    const [checkAdmin, setCheckAdmin] = useState(false);


    const { user, setUser } = useContext(userContext);
    console.log(user);


    useEffect(() => {
        fetch('https://mamardukan.herokuapp.com/user/login-user', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email, password: user.password })
        })
            .then(res => res.json())
            .then(data => {
                if (user.success) {
                    setCheckCustomer(data)
                }
            })
    }, [user])
    console.log(checkCustomer);


    useEffect(() => {
        fetch('https://mamardukan.herokuapp.com/user/login-admin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email, password: user.password })
        })
            .then(res => res.json())
            .then(data => {
                if (user.success) {
                    setCheckAdmin(data)
                }
            })
    }, [user])
    console.log(checkAdmin);




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
