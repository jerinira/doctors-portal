import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import AppointmentBook from './Components/AppointmentBook/AppointmentBook';
import PatientList from './Components/PatientList/PatientList';
import AllAppointment from './Components/AllAppointment/AllAppointment';
import Nav from './Components/Nav/Nav';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route exact path='/doctor/patientList'>
            <PatientList />
          </Route>
          <Route exact path='/bookAppointment'>
            <AppointmentBook />
          </Route>
          <Route exact path='/doctor/allList'>
            <AllAppointment />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
