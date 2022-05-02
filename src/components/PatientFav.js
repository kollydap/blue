import React,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom';
import {Money,Info,AccessTime,Star, VerifiedUserOutlined, LocationOn, } from '@material-ui/icons';


function PatientFav() {

    let [doctors, setDoctors]=useState([])

  useEffect(()=>{
    fetch("https://kolacare.herokuapp.com/api/doctor/")
    .then (response => response.json())
    .then(data => setDoctors(data))
  },[])

  return (
    <div className='patient__right'>
    <div className='right__card'>
        <div className='right__card-body'>

        {
               doctors.map(doctor =>{
                 const {id,photo,location,schedule,pricings,fullname,myeducation} = doctor
              
                 return(
                  
                   <Link key={id} to={`/doctor/${id}`} >
                    <div  className="doctor-card">
                   <img src={photo} alt ="doctor "/>
                    <div className='card-body'>
                      <h3>{fullname}<VerifiedUserOutlined /></h3>
                      <p> {myeducation}</p>
                      <div className='ratings'>
                    <Star /><Star /><Star /><Star /><Star />(35)
                    </div>
                    
                      <ul className='availability-info' >
                      <li><LocationOn />{location}</li>
                        <li><AccessTime/>Available: {schedule }</li>
                        <li><Money />{pricings} <Info/> </li>
                      </ul>
                      </div>
                 </div>
                 </Link>
                 
                 )
               })
             }
            
        </div>

    </div>

</div>
  )
}

export default PatientFav