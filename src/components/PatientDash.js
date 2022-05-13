import React,{useState,useEffect} from 'react'
import '../styles/PatientDash.css'
import PatientLeft from './PatientLeft'
import ProfileSet from './ProfileSet';
import PatientFav from './PatientFav';
import {
  Routes,
 Route} from 'react-router-dom'
 import ChangePassword from './ChangePassword';
 import Login from './Login'



function PatientDash() {
  const [token,setToken]=useState("")

  
useEffect(()=>{
  setToken(localStorage.getItem('access_token'))
 
},[])

  return (

    <div className='content'>
      {!token ?(<Login />) :(
        <div className='fluid'>
            <div className='flex'>
          
           <PatientLeft />
                <Routes>
               <Route path='/favourites' element={<PatientFav/>}/>
               <Route path='/profile-settings' element={<ProfileSet/>}/>
               <Route path='/change-password' element={<ChangePassword/>}/>
                </Routes>
                 
            </div>
        </div>
      )}
    </div>
  )
}

export default PatientDash