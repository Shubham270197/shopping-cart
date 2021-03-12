import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/homeScreen'
import ProductScreen from './screens/productScreen'
import CartScreen from './screens/cartScreen'

// components
import Navbar from './components/Navbar/navbar.js'
import Backdrop from './components/BackDrop/backDrop'
import SideDrawer from './components/SideDrawer/SideDrawer'

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop
        show={sideToggle}
        click={() => setSideToggle(false)}
      />
      
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
