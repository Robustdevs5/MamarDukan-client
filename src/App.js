import axios from "axios";
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddAdmin from "./Components/AdminDashboard/AddAdmin/AddAdmin";
import AddProduct from "./Components/AdminDashboard/AddProduct/AddProduct";
import AdminSidebar from './Components/AdminDashboard/AdminSidebar/AdminSidebar';
import ManageProduct from "./Components/AdminDashboard/ManageProduct/ManageProduct";
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
import AddBlog from "./Components/SuperAdminDashboard/SuperAdminBlogs/AddBlog/AddBlog";
import ManageBlog from "./Components/SuperAdminDashboard/SuperAdminBlogs/ManageBlog/ManageBlog";
import UpdateBlog from "./Components/SuperAdminDashboard/SuperAdminBlogs/UpdateBlog/UpdateBlog";
import SuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminDashboard/SuperAdminDashboard";
import AdminSuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminManageUser/Admin-SuperAdminDashboard/AdminSuperAdminDashboard";
import CustomerSuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminManageUser/Customers-SuperAdminDashboard/CustomerSuperAdminDashboard";
import SuperAdmin from "./Components/SuperAdminDashboard/SuperAdminManageUser/SuperAdmin-SuperAdminDashboard/SuperAdmin";
import SuperAdminManageUser from "./Components/SuperAdminDashboard/SuperAdminManageUser/SuperAdminManageUser";
import VendorSuperAdminDashboard from "./Components/SuperAdminDashboard/SuperAdminManageUser/Vendor-SuperAdminDashboard/VendorSuperAdminDashboard";
import TrackOrder from './Components/TrackOrder/TrackOrder';
import Dashboard from './Components/UserDashboard/Dashboard';
import VendorSupport from "./Components/VendorDashboard/Support/Support";
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
import './hooks/useCart';
import NotFound from "./pages/404/404";
import About from "./pages/AboutPage/AboutPage";
import Affiliate from "./pages/Affiliate/Affiliate";
import Blogs from "./pages/Blog-page/Blogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Careers from "./pages/Careers/Careers";
import CheckoutPage from "./pages/Checkout-page/CheckoutPage";
import Compare from "./Components/Cart/CompareCart/Compare";
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
import SmoothScroll from './Components/SmoothScroll/SmoothScroll';
import Pants from "./Components/CatagoryProduct/Pants";
import OrderReview from "./Components/SuperAdminDashboard/Products-SuperAdminDashboard/Orders-SuperAdminDashboard/Order-Review/OrderReview";
export const userContext = createContext();

function App() {
  const [products, setProducts] = useState([])
  
  // const [products, setProducts] = useProducts(); 
  const [orders, setOrders] = useState([])
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [wishlistCart, SetWishlistCart] = useState([]);
  const [CompareCart, SetCompareCart] = useState([]);
  const contextData = { products, setProducts, orders, setOrders, user, setUser, cart, setCart,  CompareCart, SetCompareCart, wishlistCart, SetWishlistCart}

  return (
    <userContext.Provider value={contextData}>
      <Router>
        <SmoothScroll></SmoothScroll>
        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={SIgnIn} />
          <Route path="/register" component={SignUP} />
          <Route path="/shop" component={Shop} />
          <Route path="/pants" component={Pants} />
          <Route path="/customerService" component={CustomerService} />
          <Route path="/trackOrder" component={TrackOrder} />
          <Route path="/product/:id" component={ProductDeatils} />
          <Route path="/blog/:id" component={BlogDetails} />
          <Route path="/updateProduct/:id" component={UpdateProduct} />
          <Route path="/updateBlog/:id" component={UpdateBlog} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blogs} />
          <Route path="/cart" component={ShopingCart} />
          <Route path="/faqs" component={FAQS} />
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


          {/* <PrivateRoute path="/dashboard" component={AdminPanel} /> */}
          {/* <PrivateRoute path="/dashboard" component={AdminPanel} /> */}
          <PrivateRoute path="/dashboard">
            <LoginPanel/>
          </PrivateRoute>
          <PrivateRoute path="/addProduct" >
            <AddProduct/>
          </PrivateRoute>
          <PrivateRoute path="/adminSidebar">
            <AdminSidebar/>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin" > 
              <AddAdmin/>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct"  >
            <ManageProduct/>
          </PrivateRoute>


          <PrivateRoute path="/user/dashboard">
              <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/reports/reports1">
              <Report/>
          </PrivateRoute>

                {/* Super Admin Route */}

          <PrivateRoute path="/super-admin/dashboard/overview" >
            <SuperAdminDashboard/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/manage-user/overview">
            <SuperAdminManageUser/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/customers/overview" >
            <CustomerSuperAdminDashboard/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/admin/overview" >
            <AdminSuperAdminDashboard/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/super-admin/overview" >
            <SuperAdmin/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/vendors/overview" >
            <VendorSuperAdminDashboard/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/orders/overview" >
            <OrdersSuperAdminDashboard/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/products/overview" >
            <ProductsSuperAdminDashboard/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/all-products/overview" >
            <AllProductsSuperAdminDashboard/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/review/overview" >
            <ReviewSuperAdminDashboard/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/massage/overview">
            <SuperAdminMassage/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/addproduct/overview" >
            <SuperAddProduct/>
          </PrivateRoute>
          <PrivateRoute path="/reports/orders">
            <OrdersReport/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/blogs/addBlog" >
            <AddBlog/>
          </PrivateRoute>
          <PrivateRoute path="/super-admin/dashboard/blogs/overview" >
            <ManageBlog/>
          </PrivateRoute>
          

                {/* Vendor Panel Dashboard */}

          <PrivateRoute path="/vendor/dashboard/overview">
            <VendorPanel/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/products">
            <VendorAllProducts/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/customers" >
            <VendorCustomer/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/orders">
            <VendorOrders/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/addProduct" >
            <VendorAddProduct/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/customers-overview" >
            <VendorCustomerOverview/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/products-overview" >
            <VendorProductOverview/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/order-overview" >
            <VendorOrderOverview/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/stock-overview" >
            <VendorStockOverview/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/stock-status" >
            <VendorStockStatus/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/reports" >
            <VendorReport/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/messages" >
            <VendorMessage/>
          </PrivateRoute>
          <PrivateRoute path="/vendor/dashboard/support" >
            <VendorSupport/>
          </PrivateRoute>
          
          <PrivateRoute path="/checkout">
            <CheckoutPage/>
          </PrivateRoute>
          <PrivateRoute path="/Confirm-order">
            <ConfirmOrder/>
          </PrivateRoute>

          <Route path="*" component={NotFound} />

      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
