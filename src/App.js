import React, { createContext, useState, useEffect } from 'react';
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
import HomePage from "./pages/Home-page/HomePage";
import axios from "axios";
export const userContext = createContext();

const api = axios.create({
  baseURL: `https://mamardukan.herokuapp.com`
})

function App() {
  const [allUser, setAllUser] = useState([])
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])
  const [user, setUser] = useState({});
  

  useEffect(() => {
    api.get('/user')
    .then(res => setAllUser(res.data.allUser.user))
  }, [allUser.length]);

  useEffect(() => {
    api.get('/products')
    .then(data => {setProducts(data.data.products)})
  }, [products.length])

  useEffect(() => {
    api.get('/orders')
    .then(data => {setOrders(data.data.orders)})
  }, [orders.length])


    const contextData = {allUser, setAllUser, products, setProducts, orders, setOrders, user, setUser }
    // console.log(';contextAPi', contextData)

  return (
    <userContext.Provider value={contextData}>
    <Router>
      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={SIgnIn} />
        <Route path="/register" component={SignUP} />
        <Route path="/dashboard" component={AdminPanel} />
        <Route path="/addProduct" component={AddProduct} />
        <Route path="/adminSidebar" component={AdminSidebar} />
        <Route path="/addAdmin" component={AddAdmin} />
        <Route path="/manageProduct" component={ManageProduct} />
        <Route path="/product" component={ProductDeatils} />
        <Route path="/updateProduct/:id" component={UpdateProduct} />

      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
