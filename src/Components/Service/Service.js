import React, { useState } from 'react';
import './Service.css';

import serviceData from '../../fakeData/index';
import { Link } from 'react-router-dom';

const Service = () => {
    const [appointment, setAppointment]=useState(serviceData);
    // const appointment= serviceData;
    console.log(appointment);
    return (
        <div>
        <div className='row service-card-holder d-flex justify-content-around'>
            {
                appointment.map(appointment=>
                    <div className="serviceCard col-lg-3">
                        <h4 style={{ color: "#19D3AC"}}> {appointment.serviceName}</h4> 
                        <h5> {appointment.seatAvailable}-{appointment.endTime}</h5>
                            <p className="card-text text-muted">{appointment.seatAvailable} SPACES AVAILABLE</p>
                            <Link to='/add'>
                            <button className='appointment-button'>
                            BOOK APPOINTMENT</button></Link>
                    </div>
                )
            }

        </div>

        </div>
    );
};

export default Service;