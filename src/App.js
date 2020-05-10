import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/appointment'>
          <Appointment></Appointment>
        </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
