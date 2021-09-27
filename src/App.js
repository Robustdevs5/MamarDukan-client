import HomePage from "./pages/Home-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AddProduct from "./Components/Admin/addProduct/AddProduct";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import AdminPanel from "./Components/Admin/AdminPanel/AdminPanel";
import ManageProduct from "./Components/Admin/ManageProduct/ManageProduct";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import ProductDeatils from "./Components/ProductDeatils/ProductDeatils";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/admin">
          <AdminPanel />
        </Route>
        <Route path="/addProduct">
          {/* <AddProduct /> */}
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
      </Switch>
    </Router>
  );
}

export default App;
