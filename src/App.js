import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import AppointmentBook from './Components/AppointmentBook/AppointmentBook';
import PatientList from './Components/PatientList/PatientList';

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
        <Route path='/patientList'>
          <PatientList>
            </PatientList>        </Route>
        </Switch>
        <Route path='/book'>
          <AppointmentBook></AppointmentBook>
        </Route>
        <Route exact path="/addAppointment" component={AppointmentBook} />
      </Router>
     
    </div>
  );
}

export default App;
