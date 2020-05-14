import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const AppointmentBook = (props) => {
  console.log(props);
  const{serviceName,time}= props.serviceDetails;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddAppointment=()=>{
    const patientName= document.getElementById('patientName').value;
    const treatmentName= document.getElementById('treatmentName').value;
    const phoneNumber= document.getElementById('phoneNumber').value;
    const appointmentDate= document.getElementById('appointmentDate').value;
    const time= document.getElementById('time').value;

    const formDetails={
      patientName, treatmentName,phoneNumber,appointmentDate,time
    }

    //ADD TO DataBase

    fetch("https://morning-harbor-96274.herokuapp.com/addAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("post Successful",data);
      });

    setOpen(false);
  }
    return (
  <div>  
        <Button
        className="appointment-button"
        variant="text"
        color="white"
        onClick={handleClickOpen}>
        BOOK APPOINTMENT
      </Button> 
      <Dialog
        open={open}
        Style={{display:'block'}}
        onClose={handleClose}>
        <DialogTitle
          style={{ textAlign: "center", color: "#19D3AE" }}> {serviceName}
        </DialogTitle>
        <DialogContent>
          
          <TextField
            margin="dense"
            id="treatmentName"
            label="Treatment's Name"
            type="text"
            variant="outlined"
            value={serviceName}
            fullWidth
          />
          <TextField
            margin="dense"
            id="time"
            label="Time"
            type="text"
            variant="outlined"
            value={time}
            fullWidth
          />
         
          <TextField
            autoFocus
            margin="dense"
            id="patientName"
            label="Your Name"
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            margin="dense"
            id="phoneNumber"
            label="Phone Number"
            type="string"
            variant="outlined"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="appointmentDate"
            label="Appointment Date"
            variant="outlined"
            type="text"
             value={
               props.date.getDate() +
              "-" +
              (props.date.getMonth() + 1) +
              "-" +
              props.date.getFullYear()
            }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddAppointment} className="appointment-button">
            SEND
          </Button>
        </DialogActions>
        
        
      </Dialog>
    </div>

    );
};

export default AppointmentBook;