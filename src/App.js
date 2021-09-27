import HomePage from "./pages/Home-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AddProduct from "./Components/Admin/addProduct/AddProduct";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import ManageProduct from "./Components/Dashboard/ManageProduct/ManageProduct";
import AdminSidebar from "./Components/Dashboard/AdminSidebar/AdminSidebar";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";
import ProductDeatils from "./Components/ProductDeatils/ProductDeatils";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        
        <Route exact path="/addProduct" component={AddProduct} />
        <Route exact path="/adminSidebar" component={AdminSidebar} />
        <Route exact path="/addAdmin" component={AddAdmin} />
        <Route exact path="/manageProduct" component={ManageProduct} />
        
        <Route path="/product">
          <ProductDeatils />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
