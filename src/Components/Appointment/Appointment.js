import React, { useState } from 'react';
import './Appointment.css';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import image1 from '../../images/Mask Group 1.png'
import Service from '../Service/Service';
import serviceData from '../../fakeData';

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  const dateChange = (date) => {
    setDate(date);
    console.log(date);
  }
  const showAllServices = serviceData.map((service) => (
    <Service date={date} service={service}></Service>
  ));

  return (
    <div>
      <div className="appointment-div">

        <div className="calender-div">
          <Calendar minDate={new Date()} onChange={dateChange} value={date} />
          <img
            className="rightSide-img"
            src={image1}
            alt=""
          />
        </div>
      </div>
      <div className='service-div'>
        <h1 style={{ textAlign: "center", color: "#19D3AE" }}>
          Available Appointments on{" "}
          {new Date(date).toLocaleString("en-us", { month: "long" })}{" "}
          {date.getDate()}, {date.getUTCFullYear()}
        </h1>
        <div className="service-card-holder">{showAllServices}</div>
      </div>
    </div>
  );
};

export default Appointment;