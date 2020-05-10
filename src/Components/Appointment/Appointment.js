import React, { useState } from 'react';
import './Appointment.css';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import Nav from '../Nav/Nav';
import Service from '../Service/Service';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

  const dateChange = (date) =>{ setDate(date);
  console.log(date);
  }

    return (
        <div>
        <div className="appointment-div">
            <div className="appointment-nav">
          <Nav></Nav>
        </div>
        <div className="appointment-calender">
          <Calendar minDate={new Date()} onChange={dateChange} value={date} />
          <img
            className="home-img-right"
            src={require("../../images/Mask Group 1.png")}
            alt="patient-Chair"
          />
        </div>
        </div>
        <div className='service-div'>
        <h1 style={{ textAlign: "center", color: "#19D3AE" }}>
          Available Appointments on{" "}
          {new Date(date).toLocaleString("en-us", { month: "long" })}{" "}
          {date.getDate()}, {date.getUTCFullYear()}
        </h1>
        <Service></Service>
        </div>
        </div>
    );
};

export default Appointment;