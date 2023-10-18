import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <>
          <Navigation />
          <Switch>
            <Route path="/" exact component={HomePage}/>
          </Switch>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
