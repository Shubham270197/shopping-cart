import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/homeScreen'
import ProductScreen from './screens/productScreen'
import CartScreen from './screens/cartScreen'

// components
import Navbar from './components/Navbar/navbar.js'

function App() {
  return (
    <Router>
      <Navbar />
      {/*SideDrawer*/}
      {/*Backdrop*/}
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={HomeScreen}
          />
          <Route
            exact
            path="/product/:id"
            component={ProductScreen}
          />
          <Route
            exact
            path="/cart"
            component={CartScreen}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
