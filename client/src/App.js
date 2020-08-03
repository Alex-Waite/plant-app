import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar.js"
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import SignInPage from "./pages/SignInPage"
import ShopPage from './pages/ShopPage';

import {Switch, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter basename="plant-app">
        <Switch>

          <Route exact path="/register">
            <RegisterPage/>
          </Route>

          <Route exact path="/signin">
            <SignInPage/>
          </Route>

          <Route exact path="/shop">
            <ShopPage/>
          </Route>

          <Route>
            <Homepage/>
          </Route>

        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
