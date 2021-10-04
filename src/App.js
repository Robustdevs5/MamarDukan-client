import axios from "axios";
import React, { createContext, useEffect, useState } from 'react';
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
import Shop from './Components/Shop/Shop';
import TrackOrder from './Components/TrackOrder/TrackOrder';
import LoginPanel from './Components/Authentication/LoginPanel/LoginPanel';
import Contact from './pages/Contact-page/Contact';
import HomePage from "./pages/Home-page/HomePage";
export const userContext = createContext();

const api = axios.create({
  baseURL: `https://mamardukan.herokuapp.com`
})

function App() {
  const [allUser, setAllUser] = useState([])
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])
  const [user, setUser] = useState({});
  const [loggedInUser, setLoggedInUser] = useState([])

  useEffect(() => {
    api.get('/user')
      .then(res => setAllUser(res.data.allUser.user))
  }, [allUser.length]);

  useEffect(() => {
    api.get('/products')
      .then(data => { setProducts(data.data.products) })
  }, [products.length])

  useEffect(() => {
    api.get('/orders')
      .then(data => { setOrders(data.data.orders) })
  }, [orders.length])


  const contextData = {loggedInUser, setLoggedInUser, allUser, setAllUser, products, setProducts, orders, setOrders, user, setUser }
  // console.log(';contextAPi', contextData)

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
