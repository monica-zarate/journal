import React from "react";
import "./components/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import BlogMenu from "./components/BlogMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import BlogKeyword from "./components/BlogKeyword";

function App() {
  library.add(fab);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} />
        <Route path="/topics" component={BlogMenu} exact />
        <Route path="/topics/:title" component={BlogKeyword} exact />
      </Switch>
    </div>
  );
}

export default App;
