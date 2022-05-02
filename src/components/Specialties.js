import React from 'react'
import "../styles/Specialties.css"
import feature from '../assets/feature.png'



function Specialties() {
  
  return (
    <div className='specialties'>
        <div className='specialties-fluid '>
            <div className='specialties-header'>
                <h2>How BlueCare Works</h2>
                <p  className='sub-title'>We have doctors with great specialities around the country feel free to book an appointment</p>
            </div>
            <div className='specialties__conatiner'>
            <img src={feature}  alt="banner"/>
            <div className='specialties__list'>
                <h2>Create Account  </h2>
                <h2>Search Doctors</h2>
                <h2>Book Appointments Online</h2>
                <h2>Chat with doctors online</h2>
                </div>
              {/* <img className='green-tick' style={{height:"200px"}} src={green}/> */}
              
            </div>
        </div>
    </div>
  )
}

export default Specialties