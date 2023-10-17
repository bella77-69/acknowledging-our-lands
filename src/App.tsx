import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <>
          <Navigation />
          <Switch>
            <Route path="/" exact />
          </Switch>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
