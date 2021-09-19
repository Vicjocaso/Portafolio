import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../about/about";
import Home from "../Home/HomePage";
import Skill from "../Skill/Skills";
import Contact from "../Contact/Contact";

function Router() {
  return (
    <div>
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

export default Router;
