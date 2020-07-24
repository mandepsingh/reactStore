import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from "./Navbar.js";
import Home from "./Home.js";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Navbar/>
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login page</h1>
        </Route>
        <Route path="/">
          <Navbar/>
          <Home/>
        </Route>
      </Switch>
    </div>  
    </Router>
  );
}
{/*
   home page

   checkout

   login



*/}
export default App;
