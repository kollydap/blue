
import { AccessTime,Star,  Info, LocationOn, Money, VerifiedUserOutlined } from '@material-ui/icons'
import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import '../styles/Doctor.css'

import Carousel from 'react-elastic-carousel';

function Doctors (){
  
  let [doctors, setDoctors]=useState([])

  useEffect(()=>{
    fetch("https://kolacare.herokuapp.com/api/doctor/")
    .then (response => response.json())
    .then(data => setDoctors(data))
  },[])
 
  const breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:5}
]
console.log(typeof(localStorage.getItem('access_token')))
  return (
    <div className='doctor-section'>
        <div className='doctor-fluid'>
            <div className='doctor-row'>
            <Carousel breakPoints={breakPoints}>
             {
               doctors.map(doctor =>{
                 const {id,photo,location,schedule,pricings,fullname,myeducation} = doctor
              
                 return(
                  
                   <Link key={id} to={`doctor/${id}`} >
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
               </Carousel>
              
            </div>
        </div>
    </div>
  )
}


export default Doctors