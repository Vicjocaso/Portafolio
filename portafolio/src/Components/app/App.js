import "./App.css";
import Header from "../header/header";
import About from "../about/about";
import Home from "../Home/HomePage";
import Skill from "../Skill/Skills";
import Contact from "../Contact/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Skill">
            <Skill />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
