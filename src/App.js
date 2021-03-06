import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";

function App() {
  return (
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route path="/login" >
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/" component={Home} />
      </Switch>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
