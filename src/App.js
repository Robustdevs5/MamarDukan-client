import "./App.css";
import HomePage from "./pages/Home-page/HomePage";
<<<<<<< HEAD
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={HomePage} />
     </Switch>
=======
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <HomePage />
>>>>>>> 56c15f8c54cfc159f192b4ba7f9965731a7a4f67
    </Router>
  );
}

export default App;
