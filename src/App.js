import HomePage from "./pages/Home-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from "./Components/AdminDashboard/AddProduct/AddProduct";
import ManageProduct from "./Components/AdminDashboard/ManageProduct/ManageProduct";
import AdminSidebar from "./Components/AdminDashboard/AdminSidebar/AdminSidebar";
import AddAdmin from "./Components/AdminDashboard/AddAdmin/AddAdmin";
import ProductDeatils from "./Components/ProductDeatils/ProductDeatils";
import AdminPanel from "./Components/AdminDashboard/AdminPanel/AdminPanel";



function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={AdminPanel} />
        <Route exact path="/addProduct" component={AddProduct} />
        <Route exact path="/adminSidebar" component={AdminSidebar} />
        <Route exact path="/addAdmin" component={AddAdmin} />
        <Route exact path="/manageProduct" component={ManageProduct} />
        <Route exact path="/product" component={ProductDeatils} />
        
      </Switch>
    </Router>
  );
}

export default App;
