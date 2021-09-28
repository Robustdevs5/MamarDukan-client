import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddAdmin from "./Components/AdminDashboard/AddAdmin/AddAdmin";
// import AddProduct from "./Components/Admin/addProduct/AddProduct";
import AddProduct from "./Components/AdminDashboard/AddProduct/AddProduct";
import AdminPanel from "./Components/AdminDashboard/AdminPanel/AdminPanel";
import ManageProduct from "./Components/AdminDashboard/ManageProduct/ManageProduct";
import SIgnIn from "./Components/Authentication/SignIn/SIgnIn";
import SignUP from "./Components/Authentication/SignUp/SignUP";
import ProductDeatils from "./Components/ProductDeatils/ProductDeatils";
import HomePage from "./pages/Home-page/HomePage";
export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
    <userContext.Provider value={[user, setUser]}>
    <Router>
      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route path="/admin">
          <AdminPanel />
        </Route>
        <Route path="/addProduct">
          <AddProduct />
        </Route>
        <Route path="/manageProduct">
          <ManageProduct />
        </Route>
        <Route path="/makeAdmin">
          <AddAdmin />
        </Route>
        <Route path="/product">
          <ProductDeatils />
        </Route>       
        <Route path="/login">
          <SIgnIn />
        </Route>        
        <Route path="/register">
          <SignUP />
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
