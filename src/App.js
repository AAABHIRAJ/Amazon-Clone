import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const Promise = loadStripe("pk_test_51LSP9KSAbLbnLrWDniWbaf0dghmA1lLcJ8XCFbxScwLLF7kem7YZCU6hHaio6At2JVbY1iJlRhRL2mijGWb38PtX00PRM1V9sD");

function App() {
  
  const [{user}, dispatch] = useStateValue();
  //piece of code which runs on a given condition

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
   }, [])

 

  return (
    <Router>
      <div className="app">
      
          <Switch>          
            <Route path="/checkout">
              <Header />
              <Checkout />
          </Route>
          
          <Route path="/orders">
              <Header />
              <Orders />
            </Route>

            <Route path="/login">   
              <Login />
            </Route>
          
            <Route path="/payment">
              <Header />
              <Elements stripe={Promise}>
                <Payment />
              </Elements>            
            </Route>

            <Route path ="/">
              <Header />
              <Home />
            </Route>
          </Switch>         
          
    </div>
    </Router>
  );
}

export default App;
