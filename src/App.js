import React, { useEffect } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Home from "./Home";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import { auth } from "./Firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsuscribe();
    };
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

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
