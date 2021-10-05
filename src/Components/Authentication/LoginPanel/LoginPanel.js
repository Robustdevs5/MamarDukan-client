import React, { useEffect, useState } from 'react';
import AdminPanel from '../../AdminDashboard/AdminPanel/AdminPanel';
import CustomerPanel from '../../CustomerDashboard/CustomerPanel/CustomerPanel';



const LoginPanel = () => {

    // const { loggedInUser, setLoggedInUser } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = useState([]);
    const [checkCustomer, setCheckCustomer] = useState(false);
    const [checkAdmin, setCheckAdmin] = useState(false);


    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("user");
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser);
            setLoggedInUser(user);
        }
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
