import React, {useState} from 'react'
import '../styles/Login.css'
import loginBanner from '../assets/login-banner.png'
import axiosInstance from '../axios'
import {useNavigate,Link} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from "axios"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Login() {
  const[message,setMessage] = useState("")
  
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
        setMessage("youre logged in")
        navigate('/')
        handleClick()
      })
      .catch(err=>{
        if(err){

          setMessage("Check Username or Password.")  
        }         
      
      })
        
  }

  const multiHandle=(e)=>{
    loginUser(e);
    handleClick()
    
  }
  return (
    <div className='content cont-alt' >
      <div className='fluid'>
          <div className='flex'>
            <div className='offset'>
              <div className='account-content'>
                <div className='account-row'>
                  <div className='account-left'>
                    <img src={loginBanner} />
                  </div>
                  <div className='account-right'>
                    <div className='account-header'>
                      <h3>
                        Login
                        <span> Bluecare</span>
                      </h3>
                    </div>
                       
                    <form>
                    <Stack spacing={2} sx={{ width: '100%' }}>        
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                      <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        {message}
                      </Alert>
                    </Snackbar>
                    </Stack>
                    <div className='form-col-input'>
                        <div className='form-group'>
                            <input placeholder='Username' className='form-control' name='username' onChange={handleChange} required />
                        </div>
                    </div>

                    <div className='form-col-input'>
                        <div className='form-group'>
                           
                            <input placeholder='password' type='password' className='form-control' name='password' onChange={handleChange} required />
                        </div>
                    </div>
                      
                      <div style={{fontSize:"12px", float:"right"}}>
                        <Link to='#' style={{textDecoration:"none", color:"inherit"}}>
                        Forgot Password ?
                        </Link>
                      </div>
                      {/* onClick={() => {loginUser();handleClick()}} */}
                      <button className='account-but'  onClick={multiHandle}>Login</button>
                      <div style={{textAlign:"center"}}>or</div>
                      <div className='social-buttons'>
                        <button  className=' social-but' style={{backgroundColor:"#3a559f",}}> Login </button>
                        <button className=' social-but' style={{backgroundColor:"#dd4b39",}}> Login </button>
                      </div>

                      <div className='dont-have'>
                        Don’t have an account? 
                        <Link to='/signup'> Register</Link> 
                      </div>
                      <div>

                      </div>

                    </form>
                  </div>

                </div>

              </div>

            </div>
          </div>
      </div>
   
  </div>
  )
}

export default Login
