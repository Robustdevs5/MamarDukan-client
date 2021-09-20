import "./App.css";
import HomePage from "./pages/Home-page/HomePage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
