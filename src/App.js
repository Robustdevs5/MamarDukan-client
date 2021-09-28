import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./Components/AdminDashboard/AddProduct/AddProduct";
import AdminPanel from "./Components/AdminDashboard/AdminPanel/AdminPanel";
import AddAdmin from "./Components/AdminDashboard/AddAdmin/AddAdmin";
import AdminSidebar from "./Components/AdminDashboard/AdminSidebar/AdminSidebar";
import ManageProduct from "./Components/AdminDashboard/ManageProduct/ManageProduct";
import SIgnIn from "./Components/Authentication/SignIn/SIgnIn";
import SignUP from "./Components/Authentication/SignUp/SignUP";
import ProductDeatils from "./Components/ProductDeatils/ProductDeatils";
import HomePage from "./pages/Home-page/HomePage";



function App() {

  const [user, setUser] = useState({});

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

      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
