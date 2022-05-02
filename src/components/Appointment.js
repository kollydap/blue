import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import '../styles/Appointment.css'
import StarIcon from '@material-ui/icons/Star';

function Appointment() {
  let id = useParams().id;
  // Lets set the doctor and patients to be used to create an appointment
  let[doctor,setDoctor] =useState([])
  let [patient,setPatient]=useState([])
  let [appointmentDate, setAppointmentDate]=useState("")
  

    useEffect(()=>{
      fetch(`https://kolacare.herokuapp.com/api/doctor/${id}`)
      .then (response => response.json())
      .then(data => setDoctor(data))  

      fetch(` https://kolacare.herokuapp.com/api/patient/1`)
      .then (response => response.json())
      .then(data => setPatient(data))
     
  },[])

  // on click of the appointment function we  call the create api and pass our doctor and patient parameter
  const createAppointment= (e)=>{
    fetch(`https://kolacare.herokuapp.com/api/appointment/create/`,
    {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      mode: 'cors',
      body:JSON.stringify({"doctor":doctor.id,"patient":patient.id, "appointment_time":appointmentDate})
    },
    )
    // alert(`${doctor.fullname} will get back you soon, Thank you`)
    alert("You need to be a registered user to make appointments")
      e.preventDefault()
  }
 
  return (
    <div className='appointment'>
        <div className='appointment-top'>
          <div>
            <img src={doctor.photo} alt=''/>
            <div className='appointment-top-side ratings'>
              <h4>{doctor.fullname}</h4>
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /> 35
              <p>{doctor.location}</p>
            </div>
          </div>
        </div>
        <div className='appointment-bottom'>
          <form>
            <input type="date"
            onChange={(e)=>setAppointmentDate(e.target.value)}
            />
            <button onClick={createAppointment}>make Appointment</button>
          </form>

        </div>
        
        <div className='myMessage'>
    
        </div>
         
    </div>
  )
}

export default Appointment