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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
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
      </Switch>
    </Router>
  );
}

export default App;
