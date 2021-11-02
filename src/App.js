import axios from "axios";
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddAdmin from "./Components/AdminDashboard/AddAdmin/AddAdmin";
import AddBlog from "./Components/AdminDashboard/AddBlog/AddBlog";
import AddProduct from "./Components/AdminDashboard/AddProduct/AddProduct";
import AdminSidebar from './Components/AdminDashboard/AdminSidebar/AdminSidebar';
import ManageBlog from "./Components/AdminDashboard/ManageBlog/ManageBlog";
import ManageProduct from "./Components/AdminDashboard/ManageProduct/ManageProduct";
import UpdateBlog from "./Components/AdminDashboard/UpdateBlog/UpdateBlog";
import UpdateProduct from './Components/AdminDashboard/UpdateProduct/UpdateProduct';
import LoginPanel from "./Components/Authentication/LoginPanel/LoginPanel";
import SIgnIn from "./Components/Authentication/SignIn/SIgnIn";
import SignUP from "./Components/Authentication/SignUp/SignUP";
import ShopingCart from './Components/Cart/ShopingCart/ShopingCart';
import CustomerService from "./Components/CustomerService/CustomerService";
import FAQS from './Components/FAQ/FAQS';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ProductDeatils from "./Components/ProductDeatils/ProductDeatils";
import Shop from './Components/Shop/Shop';
import './Components/StyledComponent/Global.css';
import SuperAdminMassage from "./Components/SuperAdminDashboard/Massage/SuperAdminMassage";
import SuperAddProduct from './Components/SuperAdminDashboard/Products-SuperAdminDashboard/AddProduct';
import AllProductsSuperAdminDashboard from "./Components/SuperAdminDashboard/Products-SuperAdminDashboard/AllProducts-SuperAdminDashboard/AllProductsSuperAdminDashboard";
import OrdersSuperAdminDashboard from "./Components/SuperAdminDashboard/Products-SuperAdminDashboard/Orders-SuperAdminDashboard/OrdersSuperAdminDashboard";
import ProductsSuperAdminDashboard from "./Components/SuperAdminDashboard/Products-SuperAdminDashboard/ProductsSuperAdminDashboard";
import ReviewSuperAdminDashboard from "./Components/SuperAdminDashboard/Products-SuperAdminDashboard/Review-SuperAdminDashboard/ReviewSuperAdminDashboard";
import OrdersReport from "./Components/SuperAdminDashboard/Report/OrdersReport/OrdersReport";
import Report from "./Components/SuperAdminDashboard/Report/Report";
import SuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminDashboard/SuperAdminDashboard";
import AdminSuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminManageUser/Admin-SuperAdminDashboard/AdminSuperAdminDashboard";
import CustomerSuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminManageUser/Customers-SuperAdminDashboard/CustomerSuperAdminDashboard";
import SuperAdmin from "./Components/SuperAdminDashboard/SuperAdminManageUser/SuperAdmin-SuperAdminDashboard/SuperAdmin";
import SuperAdminManageUser from "./Components/SuperAdminDashboard/SuperAdminManageUser/SuperAdminManageUser";
import VendorSuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminManageUser/Vendor-SuperAdminDashboard/VendorSuperAdminDashboard";
import TrackOrder from './Components/TrackOrder/TrackOrder';
import Dashboard from './Components/UserDashboard/Dashboard';
import VendorAddProduct from "./Components/VendorDashboard/VendorAddProduct/VendorAddProduct";
import VendorAllProducts from "./Components/VendorDashboard/VendorAllProducts/VendorAllProducts";
import VendorProductOverview from "./Components/VendorDashboard/VendorAllProducts/VendorProductOverview";
import VendorCustomer from "./Components/VendorDashboard/VendorCustomer/VendorCustomer";
import VendorCustomerOverview from "./Components/VendorDashboard/VendorCustomer/VendorCustomerOverview";
import VendorMessage from "./Components/VendorDashboard/VendorMessage/VendorMessage";
import VendorOrderOverview from "./Components/VendorDashboard/VendorOrders/VendorOrderOverview";
import VendorOrders from "./Components/VendorDashboard/VendorOrders/VendorOrders";
import VendorPanel from "./Components/VendorDashboard/VendorPanel/VendorPanel";
import VendorReport from "./Components/VendorDashboard/VendorReport/VendorReport";
import VendorStockOverview from "./Components/VendorDashboard/VendorStock/VendorStockOverview";
import VendorStockStatus from "./Components/VendorDashboard/VendorStock/VendorStockStatus";
import './hooks/useProducts';
import NotFound from "./pages/404/404";
import About from "./pages/AboutPage/AboutPage";
import Affiliate from "./pages/Affiliate/Affiliate";
import Blogs from "./pages/Blog-page/Blogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Careers from "./pages/Careers/Careers";
import CheckoutPage from "./pages/Checkout-page/CheckoutPage";
import Compare from "./pages/Compare/Compare";
import ConfirmOrder from "./pages/ConfirmOrder/ConfirmOrder";
import Contact from './pages/Contact-page/Contact';
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import HomePage from "./pages/Home-page/HomePage";
import HowToBuy from "./pages/HowToBuy/HowToBuy";
import Privacy from "./pages/Privacy/Privacy";
import Refund from "./pages/Refund/Refund";
import ShippingAndDelivery from "./pages/ShippingAndDelivery/ShippingAndDelivery";
import Terms from "./pages/T&C/T&C";
import Wishlist from "./pages/Wishlist/Wishlist";
export const userContext = createContext();

const api = axios.create({
  baseURL: `https://mamardukan.herokuapp.com`
})

function App() {
  const [allUser, setAllUser] = useState([])
  const [products, setProducts] = useState([])
  
  // const [products, setProducts] = useProducts(); 
  const [orders, setOrders] = useState([])
  const [user, setUser] = useState({});
  // const [loggedInUser, setLoggedInUser] = useState([])
  const [cart, setCart] = useState([]);
  const [wishlistCart, SetWishlistCart] = useState([]);
  const [CompareCart, SetCompareCart] = useState([]);

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


  const contextData = { products, setProducts, orders, setOrders, user, setUser, cart, setCart,  CompareCart, SetCompareCart, wishlistCart, SetWishlistCart}
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
          <Route path="/addBlog" component={AddBlog} />
          <Route path="/adminSidebar" component={AdminSidebar} />
          <Route path="/addAdmin" component={AddAdmin} />
          <Route path="/shop" component={Shop} />
          <Route path="/customerService" component={CustomerService} />
          <Route path="/trackOrder" component={TrackOrder} />
          <Route path="/manageProduct" component={ManageProduct} />
          <Route path="/manageBlog" component={ManageBlog } />
          <Route path="/product/:id" component={ProductDeatils} />
          <Route path="/blog/:id" component={BlogDetails} />
          <Route path="/updateProduct/:id" component={UpdateProduct} />
          <Route path="/updateBlog/:id" component={UpdateBlog} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blogs} />
          <Route path="/cart" component={ShopingCart} />
          <Route path="/faqs" component={FAQS} />
          <Route path="/user/dashboard" component={Dashboard} />
          <Route path="/reports/reports1" component={Report}/>

                {/* Super Admin Route */}

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
          <Route path="/super-admin/dashboard/massage/overview" component={SuperAdminMassage} />
          <Route path="/super-admin/dashboard/addproduct/overview" component={SuperAddProduct} />
          <Route path="/reports/orders" component={OrdersReport} />
          

                {/* Vendor Panel Dashboard */}

          <Route path="/vendor/dashboard/overview" component={VendorPanel}/>
          <Route path="/vendor/dashboard/products" component={VendorAllProducts}/>
          <Route path="/vendor/dashboard/customers" component={VendorCustomer}/>
          <Route path="/vendor/dashboard/orders" component={VendorOrders}/>
          <Route path="/vendor/dashboard/addProduct" component={VendorAddProduct}/>
          <Route path="/vendor/dashboard/customers-overview" component={VendorCustomerOverview}/>
          <Route path="/vendor/dashboard/products-overview" component={VendorProductOverview}/>
          <Route path="/vendor/dashboard/order-overview" component={VendorOrderOverview}/>
          <Route path="/vendor/dashboard/stock-overview" component={VendorStockOverview }/>
          <Route path="/vendor/dashboard/stock-status" component={VendorStockStatus }/>
          <Route path="/vendor/dashboard/reports" component={VendorReport }/>
          <Route path="/vendor/dashboard/messages" component={VendorMessage }/>
          
          <Route path="/checkout" component={CheckoutPage }/>
          <Route path="/Confirm-order" component={ConfirmOrder }/>
          <Route path="/careers" component={Careers }/>
          <Route path="/about" component={About }/>
          <Route path="/terms-and-conditions" component={Terms }/>
          <Route path="/privacy-policy" component={Privacy }/>
          <Route path="/help-center" component={HelpCenter }/>
          <Route path="/return-and-refund" component={Refund }/>
          <Route path="/affiliates" component={Affiliate }/>
          <Route path="/how-to-buy" component={HowToBuy }/>
          <Route path="/shipping-and-delivery" component={ShippingAndDelivery }/>
          <Route path="/compare" component={Compare }/>
          <Route path="/wishlist" component={Wishlist }/>
          <Route path="*" component={NotFound} />

      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
