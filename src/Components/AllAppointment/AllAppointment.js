import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import './AllAppointment.css';

const AllAppointment = () => {


    const [allAppointments, setAllAppointments] = useState([]);

    useEffect(() => {
        fetch("https://morning-harbor-96274.herokuapp.com/allAppointment")
            .then((res) => res.json())
            .then((data) => {
                setAllAppointments(data);
            });
    }, []);
    //console.log(allAppointments.length);

    const tableData = allAppointments;
    const tableColumns = [
        { Header: "Appointment ID", accessor: "_id", width: 220 },
        {
            Header: "Date",
            accessor: "appointmentDate",
            style: { textAlign: "center" },
            width: 100,
        },
        { Header: "Time", accessor: "time", width: 160 },
        { Header: "Patient's Name", accessor: "patientName", width: 300 },
        { Header: "Phone Number", accessor: "phoneNumber", width: 200 },
        {
            Header: "Category ",
            accessor: "treatmentCategory",
            width: 200,
        }

    ];

    return (
        <div>

            <div className="appointment-nav">
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3 count" style={{ backgroundColor: 'cornFlowerBlue' }}>
                    <h2>Total Appointments </h2>
                    <h3>{allAppointments.length}</h3>
                </div>
                <div className="col-md-3 count" style={{ backgroundColor: "lightGreen" }}>
                    <h2>Pending Appointments 0</h2>
                </div>
                <div className="col-md-3 count" style={{ backgroundColor: "salmon" }}>
                    <h2>Today's Appointments</h2>
                </div>
            </div>

            <ReactTable
                style={{ margin: "20px 40px" }}
                data={tableData}
                columns={tableColumns}
                defaultPageSize={8}
            ></ReactTable>

        </div>
    );
};

export default AllAppointment;