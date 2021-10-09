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
import CustomerService from "./Components/CustomerService/CustomerService";
// import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ProductDeatils from "./Components/ProductDeatils/ProductDeatils";
import Shop from './Components/Shop/Shop';
import FAQS from './Components/ShopingCart/FAQS';
import ShopingCart from './Components/ShopingCart/ShopingCart';
import SuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminDashboard/SuperAdminDashboard";
import AdminSuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminManageUser/Admin-SuperAdminDashboard/AdminSuperAdminDashboard";
import CustomerSuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminManageUser/Customers-SuperAdminDashboard/CustomerSuperAdminDashboard";
import VendorSuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminManageUser/Vendor-SuperAdminDashboard/VendorSuperAdminDashboard";
import SuperAdmin from "./Components/SuperAdminDashboard/SuperAdminManageUser/SuperAdmin-SuperAdminDashboard/SuperAdmin";
import SuperAdminManageUser from "./Components/SuperAdminDashboard/SuperAdminManageUser/SuperAdminManageUser";
// import SuperAdminOverview from "./Components/SuperAdminDashboard/SuperAdminOverview/SuperAdminOverview";
// import SuperAdminUserOverview from "./Components/SuperAdminDashboard/SuperAdminUserOverview/SuperAdminUserOverview";
// import ManageSuperAdmin from "./Components/SuperAdminDashboard/ManageSuperAdmin/ManageSuperAdmin";
// import AddSuperAdmin from "./Components/SuperAdminDashboard/AddSuperAdmin/AddSuperAdmin";
import TrackOrder from './Components/TrackOrder/TrackOrder';
import Blogs from "./pages/Blog-page/Blogs";
import Contact from './pages/Contact-page/Contact';
import HomePage from "./pages/Home-page/HomePage";
import OrdersSuperAdminDashboard from "./Components/SuperAdminDashboard/Products-SuperAdminDashboard/Orders-SuperAdminDashboard/OrdersSuperAdminDashboard";
import ProductsSuperAdminDashboard from "./Components/SuperAdminDashboard/Products-SuperAdminDashboard/ProductsSuperAdminDashboard";
import AllProductsSuperAdminDashboard from "./Components/SuperAdminDashboard/Products-SuperAdminDashboard/AllProducts-SuperAdminDashboard/AllProductsSuperAdminDashboard";
import ReviewSuperAdminDashboard from "./Components/SuperAdminDashboard/Products-SuperAdminDashboard/Review-SuperAdminDashboard/ReviewSuperAdminDashboard";
import './Components/StyledComponent/Global.css'
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import LoginPanel from "./Components/Authentication/LoginPanel/LoginPanel";
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

  // useEffect(() => {
  //   api.get('/user')
  //     .then(res => setAllUser(res.data.allUser.user))
  // }, [allUser.length]);

  // useEffect(() => {
  //   api.get('/products')
  //     .then(data => { setProducts(data.data.products) })
  // }, [products.length])

  // useEffect(() => {
  //   api.get('/orders')
  //     .then(data => { setOrders(data.data.orders) })
  // }, [orders.length])


  const contextData = {loggedInUser, setLoggedInUser, products, setProducts, orders, setOrders, user, setUser }
  // console.log(';contextAPi', contextData)

  return (
    <userContext.Provider value={contextData}>
      <Router>
        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={SIgnIn} />
          <Route path="/register" component={SignUP} />
          {/* <PrivateRoute path="/dashboard" component={AdminPanel} /> */}
          {/* <PrivateRoute path="/dashboard" component={AdminPanel} /> */}
          <PrivateRoute path="/dashboard">
            <LoginPanel/>
          </PrivateRoute>
          <Route path="/addProduct" component={AddProduct} />
          <Route path="/adminSidebar" component={AdminSidebar} />
          <Route path="/addAdmin" component={AddAdmin} />
          <Route path="/shop" component={Shop} />
          <Route path="/customerService" component={CustomerService} />
          <Route path="/trackOrder" component={TrackOrder} />
          <Route path="/manageProduct" component={ManageProduct} />
          <Route path="/product/:id" component={ProductDeatils} />
          <Route path="/updateProduct/:id" component={UpdateProduct} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blogs} />
          <Route path="/cart" component={ShopingCart} />
          <Route path="/faqs" component={FAQS} />
          <Route path="/super-admin/dashboard/overview" component={SuperAdminDashboard}/>
          <Route path="/super-admin/dashboard/manage-user/overview" component={SuperAdminManageUser}/>
          <Route path="/super-admin/dashboard/customers/overview" component={CustomerSuperAdminDashboard}/>
          <Route path="/super-admin/dashboard/admin/overview" component={AdminSuperAdminDashboard}/>
          <Route path="/super-admin/dashboard/super-admin/overview" component={SuperAdmin}/>
          <Route path="/super-admin/dashboard/vendors/overview" component={VendorSuperAdminDashboard}/>
          <Route path="/super-admin/dashboard/orders/overview" component={OrdersSuperAdminDashboard} />
          <Route path="/super-admin/dashboard/products/overview" component={ProductsSuperAdminDashboard} />
          <Route path="/super-admin/dashboard/all-products/overview" component={AllProductsSuperAdminDashboard} />
          <Route path="/super-admin/dashboard/review/overview" component={ReviewSuperAdminDashboard} />
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
