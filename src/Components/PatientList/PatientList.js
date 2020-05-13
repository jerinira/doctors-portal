import React, { useState, useEffect } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './PatientList.css'



const PatientList = () => {
  const [date, setDate] = useState(new Date());


  const handleDateChange = (date) => setDate(date);

  const [allAppointment, setAllAppointment] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4000/allAppointment")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllAppointment(data);
      });
  }, []);
  console.log(allAppointment);


  const tableData = allAppointment.filter(
    (appointmentData) =>
      appointmentData.appointmentDate ===
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
  );

 // console.log(tableData);

  const tableColumns = [
    { Header: "Name", accessor: "patientName", width: 300 },
    { Header: "Schedule", accessor: "time", width: 200 },
    {
      Header: "Action",
      Cell: (props) => {
        
        return (
          <>
            <select className="appointment-button">
              <option value="pending">Pending</option>
              <option value="sone">Done</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </>
        );
      },
      width: 150,
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <div style={{margin:'40px'}}>

      <h1 className='heading'>
        Please Select the Date to Find Patient List
        </h1>
      <h3 className='heading'>
        {new Date(date).toLocaleString("en-us", { month: "long" })}{" "}
        {date.getDate()}, {date.getUTCFullYear()}
      </h3>


      <div className="list-container">

        <div className="calender-container">

          <div className="calender-div">
            <Calendar handleDateChange={handleDateChange} value={date} />
          </div>
        </div>
        <div className="cart-container">
          <h4>Appointments</h4>
          <ReactTable
            data={tableData}
            columns={tableColumns}
            defaultPageSize={10}>

            </ReactTable>

        </div>
      </div>
    </div>

  );
};

export default PatientList;