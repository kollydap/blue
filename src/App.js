import React,{useState,useEffect} from 'react'
import Doctors from './components/Doctors'
import SearchSection from './components/SearchSection'
import Specialties from './components/Specialties'
import Login from './components/Login'

function App() {



  return (
    <div>
   
       <SearchSection />
      <Specialties />
      <Doctors />
     
      
    </div>
  )
}

export default App
