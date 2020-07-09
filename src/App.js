import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import PrivateRoute from "./helpers/PrivateRoute";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";

function App() {
  return (
   <div className="App">
      <Provider store={createStore(reducers)}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <PrivateRoute exact path="/home">
              <Home />
            </PrivateRoute>
          </Switch>
        </Router>
      </Provider>
   </div>
  );
}

export default App;
