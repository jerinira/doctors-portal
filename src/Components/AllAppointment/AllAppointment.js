import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import './AllAppointment.css';
import Nav from "../Nav/Nav";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const AllAppointment = () => {


    const [allAppointments, setAllAppointments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/allAppointment")
            .then((res) => res.json())
            .then((data) => {
                setAllAppointments(data);
            });
    }, []);
    console.log(allAppointments.length);

    const tableData = allAppointments;
    const tableColumns = [
        { Header: "Appointment ID", accessor: "_id", sortable: false, width: 220 },
        {
            Header: "Date",
            accessor: "appointmentDate",
            style: { textAlign: "center" },
            width: 100,
        },
        { Header: "Time", accessor: "time", width: 160 },
        { Header: "Patient's Name", accessor: "patientName", width: 300 },
        { Header: "Phone Number", accessor: "phoneNumber", width: 150 },
        {
            Header: "Category ",
            accessor: "treatmentCategory",
            width: 150,
        },
        {
            Header: "Status",
            Cell: (props) => {
                return (
                    <>
                        <select className="Appointment-button">
                            <option value="pending">Pending</option>
                            <option value="sone">Done</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                        <button className="Appointment-button">Edit</button>
                    </>
                );
            },
            sortable: false,
            filterable: false,
        },
    ];

    return (
        <div>

            <div className="appointment-nav">
                <Nav></Nav>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3 count"  style={{backgroundColor:'cornFlowerBlue'}}>
                    <h2>Total Appointments </h2>
                    <h3>{allAppointments.length}</h3>
                </div>
                <div className="col-md-3 count"  style={{backgroundColor:"lightGreen"}}>
                    <h2>Pending Appointments 0</h2>
                </div>
                <div className="col-md-3 count"  style={{backgroundColor:" salmon"}}>
                    <h2>Today's Appointments</h2>
                </div>
            </div>

                    <ReactTable
                    style={{margin:"20px"}}
                            data={tableData}
                            columns={tableColumns}
                            defaultPageSize={8}
                            pageSizeOptions={[8, 15, 20]}
                            filterable
                        ></ReactTable>

                    </div>
    );
};

export default AllAppointment;