import React,{useState, useEffect} from 'react'
import '../styles/SingleDoctor.css'
import {useParams} from "react-router-dom"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import MoneyIcon from '@material-ui/icons/Money';
import ChatIcon from '@material-ui/icons/Chat';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import  ThumbUpAlt  from '@material-ui/icons/ThumbUpAlt';
import { Link } from 'react-router-dom';
import { Call, ChatBubbleOutline, ChatBubbleOutlined, VideoCall } from '@material-ui/icons';
import axiosInstance from '../axios'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import Login from "../components/Login"

function SingleDoctor() {

    const navigate = useNavigate()
    let id = useParams().id;
    const [token,setToken]=useState("")
    let [singleDoctor, setSingleDoctor]=useState([])
    

    useEffect(()=>{    
        setToken(localStorage.getItem('access_token'))
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
            setSingleDoctor(res.data)
        })        
      },[])

    return (
      
        <div className='single__doctor'>
              {! token ? (
            <Login/>
            
          ) : (
            <>
            <div className='single__doctor-top'>
                <div className='top-left'><img src={singleDoctor.photo} /></div>
                <div className='top-middle'>
                    <div className='top'>

                    <h4>{singleDoctor.fullname}</h4>
                    <p>{singleDoctor.myeducation}</p>
                    </div>
                    <div className='ratings'>
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />(35)
                    </div>
                    <div className='bottom'>
                        <p><LocationOnIcon />{singleDoctor.location}</p>
                        <div>
                        <p>{singleDoctor.specialties}</p>
                        
                        </div>
                    </div>
                </div>
                <div className='top-right'>
                    <p><ThumbUpAlt />99%</p>
                    <p><ChatIcon />35 Feedback</p>
                    <p><LocationOnIcon />{singleDoctor.location}</p>
                    <p><MoneyIcon />{singleDoctor.pricings}</p>
                    <div><BookmarkBorderIcon /><ChatBubbleOutline/><Call /><VideoCall /></div>
                    <Link to={`/doctor/${id}/appointment`}> 
                    <button className='my-button'>Book Appointment</button>
                     </Link>
                </div>
            </div>
            <div className='single__doctor-bottom'>
                <div className='about doc-info'>
                    <h4>About Me</h4>
                    <p>{singleDoctor.about}</p>
                </div>
                <br />
                <div className='education doc-info'>
                    <h4>Education</h4>
                    
                    {/* {(singleDoctor.education).map(singledoctor =>{
                        const{id,college,course,degree,yearBegin,yearEnded}=singledoctor
                        return(<div key={id}>
                        <h5>{degree}</h5>
                    <h6>{yearBegin}-{yearEnded}</h6>
                    <br />
                    <h4>{college}</h4>
                
                            </div>)
                    })} */}
                    
                </div>

                <div className='experience doc-info'>
                    <h4>Work & Experience</h4>
                    <h3>American Dental Medical University</h3>
                    <h5>BDS</h5>
                    <h6>1998-2003</h6>
                    <br />
                    <h3>American Dental Medical University</h3>
                    <h6>BDS</h6>
                    <h6>1998-2003</h6>
                </div>
            </div>
             </>
             ) }
        </div>
       
  )
}

export default SingleDoctor