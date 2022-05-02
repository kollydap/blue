import React, {useState} from 'react'
import '../styles/Login.css'
import loginBanner from '../assets/login-banner.png'
import axiosInstance from '../axios'
import {useNavigate} from 'react-router-dom'

function Login() {

 const navigate = useNavigate()
  const initialFormData = Object.freeze({
    "username":"",
    "password":"",

  });
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]:e.target.value.trim(),
    })
  }
  const loginUser= (e)=>{
    e.preventDefault();

    axiosInstance
      .post(`token/`,{
        "password":formData.password,
        "username":formData.username,
      })
      .then((res)=>{
        localStorage.setItem('access_token',res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        axiosInstance.defaults.headers['Authorization'] = 
        'JWT ' + localStorage.getItem('access_token');
        navigate('/')
      })
   
  }
  return (
    <div className='login'>
      <div className='img-container'>
        <img src={loginBanner}/>
      </div>

      <div className='form'>
      <form>
        <div className="input-container">
          <input type="text" placeholder='Username' name='username' onChange={handleChange} required />
        </div>
        <div className="input-container">
          <input type="password" placeholder='password' name='password' onChange={handleChange} required />
        </div>
        <div className='forget'></div>
        <div className="button-container">
            <button onClick={loginUser}>Login</button>
        </div>
      
      </form>   
      </div>  
            
    </div>
  )
}

export default Login

{/* <form className='loginForm'>
           <h3>Login</h3>
       <div className="input-container">
         <input type="text" placeholder='Username'  required />
       </div>

       <div className="input-container">
         <input type="password" placeholder='password'  required />
       </div>

       <div className="button-container">
         <input type="submit" />
       </div>
     </form> */}