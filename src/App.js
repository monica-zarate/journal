import React from "react";
import "./components/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import BlogMenu from "./components/BlogMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} />
        <Route path="/blog_menu" component={BlogMenu} />
      </Switch>
    </div>
  );
}

export default App;
