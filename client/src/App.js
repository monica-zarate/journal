import React from "react";
import "./components/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import BlogIndex from "./components/BlogIndex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import BlogKeyword from "./components/BlogKeyword";
import Entry from "./components/Entry";

function App() {
  library.add(fab);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} />
        <Route path="/index" component={BlogIndex} exact />
        <Route path="/index/keyword/:title" component={BlogKeyword} exact />
        <Route path="/entries/:title" component={Entry} exact />
      </Switch>
    </div>
  );
}

export default App;
