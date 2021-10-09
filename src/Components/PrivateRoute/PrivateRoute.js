import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {

    const [login, SetLogin] = useState()
    // const { loggedInUser, setLoggedInUser } = useContext(userContext);
    const { user, setUser } = useContext(userContext);

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user) {
            const foundUser = JSON.parse(user);
            SetLogin(foundUser.email);
        }
    }, []);

    console.log(login);
    console.log(user);


    return (
        <Route
            {...rest}
            render={({ location }) =>
            login ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
