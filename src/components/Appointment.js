import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import '../styles/Appointment.css'
import StarIcon from '@material-ui/icons/Star';
import axios from 'axios'

function Appointment() {
  let id = useParams().id;
  // Lets set the doctor and patients to be used to create an appointment
  let[doctor,setDoctor] =useState([])
  let [patient,setPatient]=useState([])
  let [appointmentDate, setAppointmentDate]=useState("")
  const [loggedUserId, setLoggedUserId]=useState("")

    useEffect(()=>{
      axios.get(`https://kolacare.herokuapp.com/api/doctor/${id}`,
        {
            headers:{
                Authorization:localStorage.getItem('access_token')
                ? 'JWT ' + localStorage.getItem('access_token')
                : null,
                'Content-Type': 'application/json',
                accept: 'application/json'
            }
        })
        .then((res)=>{
            setDoctor(res.data)
        })        

      axios.get(`https://kolacare.herokuapp.com/api/account/getuser/`,
      {
          headers:{
              Authorization:localStorage.getItem('access_token')
              ? 'JWT ' + localStorage.getItem('access_token')
              : null,
              'Content-Type': 'application/json',
              accept: 'application/json'
          }
      })
      .then((res)=>{
        setLoggedUserId(res.data.id)
      })


     
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
      body:JSON.stringify({"doctor":doctor.id,"patient":loggedUserId, "appointment_time":appointmentDate})
    },
    )
    alert(`${doctor.fullname} will get back to you soon`)
      e.preventDefault()
  }
  console.log(doctor)
 
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
            <button className='custom-but' onClick={createAppointment}>make Appointment</button>
          </form>

        </div>
        
        <div className='myMessage'>
    
        </div>
         
    </div>
  )
}

export default Appointment