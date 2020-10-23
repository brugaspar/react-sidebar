import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Support from "./pages/Support";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/products" component={Products}/>
          <Route path="/team" component={Team}/>
          <Route path="/messages" component={Messages}/>
          <Route path="/support" component={Support}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
