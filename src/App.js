<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminPanel from "./Components/Admin/AdminPanel/AdminPanel";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import ManageProduct from "./Components/Admin/ManageProduct/ManageProduct";
import SIgnIn from "./Components/Authentication/SignIn/SIgnIn";
import SignUP from "./Components/Authentication/SignUp/SignUP";
// import AddProduct from "./Components/Admin/addProduct/AddProduct";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import ProductDeatils from "./Components/ProductDeatils/ProductDeatils";
import HomePage from "./pages/Home-page/HomePage";
=======
import HomePage from "./pages/Home-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from "./Components/AdminDashboard/AddProduct/AddProduct";
import ManageProduct from "./Components/AdminDashboard/ManageProduct/ManageProduct";
import AdminSidebar from "./Components/AdminDashboard/AdminSidebar/AdminSidebar";
import AddAdmin from "./Components/AdminDashboard/AddAdmin/AddAdmin";
import ProductDeatils from "./Components/ProductDeatils/ProductDeatils";
import AdminPanel from "./Components/AdminDashboard/AdminPanel/AdminPanel";


>>>>>>> cb4841bb70777ae87f9dacc53e1b7040282b3291

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={HomePage} />
<<<<<<< HEAD
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
          <MakeAdmin />
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
=======
        <Route exact path="/dashboard" component={AdminPanel} />
        <Route exact path="/addProduct" component={AddProduct} />
        <Route exact path="/adminSidebar" component={AdminSidebar} />
        <Route exact path="/addAdmin" component={AddAdmin} />
        <Route exact path="/manageProduct" component={ManageProduct} />
        <Route exact path="/product" component={ProductDeatils} />
        
>>>>>>> cb4841bb70777ae87f9dacc53e1b7040282b3291
      </Switch>
    </Router>
  );
}

export default App;
