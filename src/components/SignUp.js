import React,{ useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axiosInstance from '../axios'
import loginBanner from '../assets/login-banner.png';

function SignUp() {
  const navigate = useNavigate()

  const initialFormData = Object.freeze({
    "email":"",
    "password":"",
    "username":"",
    "first_name":"",
    "last_name":"",
  });

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]:e.target.value.trim(),
    })
  }
  const createUser= (e)=>{
    e.preventDefault()
    axiosInstance
    .post(`account/register/`,{
      "email":formData.email,
      "password":formData.password,
      "username":formData.username,
      "first_name":formData.first_name,
      "last_name":formData.last_name
    })
    .then((res)=>{
      navigate('/login')
    })
    
  }

  return (
    <div><div className='login'>
    <div>
      <img src={loginBanner}/>
    </div>
    
    <form>
    <div className="input-container">
        <input type="text" placeholder='FirstName' name='first_name' onChange={handleChange}  required />
      </div>
      <div className="input-container">
        <input type="text" placeholder='LastName'name='last_name' onChange={handleChange} required />
      </div>
      <div className="input-container">
        <input type="text" placeholder='Username' name='username' onChange={handleChange} required />
      </div>
      <div className="input-container">
        <input type="email" placeholder='email' name='email' autoComplete='email'onChange={handleChange}  required />
      </div>
      <div className="input-container">
        <input type="password" placeholder='password' name='password' onChange={handleChange} required />
      </div>
      <div className='forget'></div>
      <div className="button-container">
          <button onClick={createUser}>SignUp</button>
      </div>
    
    </form>     
          
  </div></div>
  )
}

export default SignUp