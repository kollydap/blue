import React,{useEffect} from 'react'
import axiosInstance from '../axios'
import {useNavigate} from 'react-router-dom'

function LogOut() {
    const navigate = useNavigate()
    useEffect(()=>{
        const response = axiosInstance.post(`account/logout/`,{
            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token')
        localStorage.removeItem('access_token')
        axiosInstance.defaults.headers['Authorization']=null
        navigate('/login')
        
    })
  return (
    <div>LogOut</div>
  )
}

export default LogOut