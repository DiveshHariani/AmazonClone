import React, {useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout'
import Login from './Components/Login';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function App() {
  const [{user}, dispatch] = useStateValue();

  // piece of code which runs on condition
  useEffect(() => {
    // listeners for firebase.
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
    })
    return () => {
      // Cleanup
      unsubscribe();
    }
  }, [])

  console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          {/* This is default route */}
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
