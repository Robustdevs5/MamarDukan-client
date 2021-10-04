import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddAdmin from "./Components/AdminDashboard/AddAdmin/AddAdmin";
// import AddProduct from "./Components/Admin/addProduct/AddProduct";
import AddProduct from "./Components/AdminDashboard/AddProduct/AddProduct";
import AdminPanel from "./Components/AdminDashboard/AdminPanel/AdminPanel";
import AdminSidebar from './Components/AdminDashboard/AdminSidebar/AdminSidebar';
import ManageProduct from "./Components/AdminDashboard/ManageProduct/ManageProduct";
import UpdateProduct from './Components/AdminDashboard/UpdateProduct/UpdateProduct';
import SIgnIn from "./Components/Authentication/SignIn/SIgnIn";
import SignUP from "./Components/Authentication/SignUp/SignUP";
import ProductDeatils from "./Components/ProductDeatils/ProductDeatils";
import FAQS from './Components/ShopingCart/FAQS';
import ShopingCart from './Components/ShopingCart/ShopingCart';
import HomePage from "./pages/Home-page/HomePage";
export const userContext = createContext();



function App() {

  const [user, setUser] = useState({});

  return (
    <userContext.Provider value={[user, setUser]}>
    <Router>
      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={SIgnIn} />
        <Route exact path="/register" component={SignUP} />
        <Route exact path="/dashboard" component={AdminPanel} />
        <Route exact path="/addProduct" component={AddProduct} />
        <Route exact path="/adminSidebar" component={AdminSidebar} />
        <Route exact path="/addAdmin" component={AddAdmin} />
        <Route exact path="/manageProduct" component={ManageProduct} />
        <Route exact path="/product" component={ProductDeatils} />
        <Route exact path="/updateProduct/:id" component={UpdateProduct} />
        <Route exact path="/cart" component={ShopingCart} />
        <Route exact path="/faqs" component={FAQS} />
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
