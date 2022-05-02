import React from 'react'
import patient from '../assets/patient.jpg'
import {Bookmark,Cake, Chat, CloudUpload, Dashboard, ExitToApp,  LocationOn, Lock, Settings} from '@material-ui/icons';
import {Link} from "react-router-dom"

function PatientLeft() {
  return (
    <div className='patient__left'>
                    <div className='patient__left__container'>
                        <div className='patient__profile-sidebar'>
                            <div className='patient__widget-profile'>
                                <div className='profile__info'>
                                    <img style={{height:"100px", border:"5px solid #20c0f3", borderRadius:"100px",marginBottom:"7px"}} src={patient}/>
                                    <div>
                                        <h3>Richard Wilson</h3>
                                        <div>
                                            <h5><Cake/> 24 Jul 1983, 38 years</h5>
                                            <h5><LocationOn/>Newyork, USA</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='patient__widget-content'>
                                <div className='patient__widget-menu'>
                                    <nav>
                                        <ul className='patient__menu'>
                                            <li>
                                               <div className="abc">
                                                   <Link to="/patient" className="link">
                                                   <Dashboard />
                                                    Dashboard
                                                   </Link>

                                                </div>
                                            </li>
                                            <li>
                                               <div className="abc">
                                                   <Link to="/patient/favourites" className="link">
                                                   <Bookmark />
                                                    Favourites
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                               <div className="abc">
                                                   <Chat />
                                                    Message
                                                    <small className='unread-msg'>26</small>
                                                </div>
                                            </li>
                                            <li>
                                               <div className="abc">
                                                   <Link to='/patient/profile-settings' className="link">
                                                   <Settings/>
                                                    Profile Settings
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                               <div className="abc">
                                                   <Link to="/patient/change-password" className="link">
                                                   <Lock />
                                                    Change Password
                                                    </Link>
                                                </div>    
                                            </li>
                                            <li>
                                               <div className="abc">
                                                   <Link to="/logout" className="link">
                                                   <ExitToApp />
                                                   Logout
                                                   </Link>
                                                </div>                                             
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default PatientLeft