import React, { useState } from 'react';
import './Service.css';
import AppointmentBook from '../AppointmentBook/AppointmentBook';

const Service = (props) => {
    //console.log(props);

    const { serviceName ,seatAvailable,time } = props.service;
    //console.log(serviceName);
    return (
        
      <div className="serviceCard ">
      <h4 style={{ color: "#19D3AC" }}>{serviceName}</h4>
      <h5>{time}</h5>
      <p className="card-text text-muted">{seatAvailable} SPACES AVAILABLE</p>
       <AppointmentBook
        date={props.date}
        serviceDetails={props.service}></AppointmentBook> 
    </div>
    );
};

export default Service;