import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {

    // // const [login, SetLogin] = useState()
    // const { loggedInUser, setLoggedInUser } = useContext(userContext);
    const { user, setUser } = useContext(userContext);

    // useEffect(() => {
    //     const user = sessionStorage.getItem("user");
    //     if (user) {
    //         const foundUser = JSON.parse(user);
    //         setLoggedInUser(foundUser.email);
    //     }
    //     else{
    //         setLoggedInUser(null);
    //     }
    // }, [loggedInUser]);

    console.log(user.email);


    return (
        <Route
            {...rest}
            render={({ location }) =>
            user.email ? (
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
