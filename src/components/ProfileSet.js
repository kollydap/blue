import React,{useEffect,useState} from 'react'
import axiosInstance from "../axios"
import patient from '../assets/patient.jpg'
import {Bookmark,Cake, Chat, CloudUpload, Dashboard, ExitToApp,  LocationOn, Lock, Settings} from '@material-ui/icons';

function ProfileSet() {
    const initialFormData = Object.freeze({
        // "user":1,
        "email":"",
        "address":"",
        "city":"",
        "state":"",
        "country":"",
        "zip_code":"",
        "about":"",
        "phone":"",
        "date_of_birth":"",
        "blood_group":"",
      });
    
      const [formData, setFormData] = useState(initialFormData);
      const handleChange = (e)=>{
        setFormData({
          ...formData,
          // Trimming any whitespace
          [e.target.name]:e.target.value
        })
      }
      const createPatient= (e)=>{
        e.preventDefault()
        axiosInstance
        .post(`patient/create/`,{
          "email":formData.email,
          "user":2,
          "address":formData.address,
          "city":formData.city,
          "state":formData.state,
          "zip_code":formData.zip_code,
          "about":formData.about,
          "phone":formData.phone,
          "date_of_birth":formData.date_of_birth,
          "blood_group":formData.blood_group,
          "country":formData.country,

        })
      }
  return (
    <div className='patient__right'>
                    <div className='right__card'>
                        <div className='right__card-body'>
                            <form>
                                <div className='form-row'>
                                    <div className='form-col'>
                                        <div className='form-group'>
                                            <div className='change-avatar'>
                                                <div className='profile-img'>
                                                    <img src={patient} alt="user-image"/>
                                                </div>
                                                <div className='upload-img'>
                                                    <div className='change-photo-btn'>
                                                        <span>
                                                            <CloudUpload />
                                                            Upload Photo
                                                        </span>
                                                        <input className='upload' type="file"  />

                                                    </div>
                                                    <small>Allowed JPG, GIF or PNG. Max size of 2MB</small>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                 
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>Email ID</label>
                                            <input type='email' name='email' onChange={handleChange} className='form-control' />
                                        </div>

                                    </div>
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>Date of Birth</label>
                                            <input type='date' name='date_of_birth'onChange={handleChange} className='form-control' />
                                        </div>

                                    </div>
                              
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>Mobile</label>
                                            <input type='text' name='phone' onChange={handleChange} className='form-control' />
                                        </div>

                                    </div>
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>Address</label>
                                            <input type='text' name='address' onChange={handleChange} className='form-control' />
                                        </div>

                                    </div>
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>City</label>
                                            <input type='text' name='city' onChange={handleChange} className='form-control' />
                                        </div>

                                    </div>
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>State</label>
                                            <input type='text' name='state' onChange={handleChange} className='form-control' />
                                        </div>

                                    </div>
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>Country</label>
                                            <input type='text' name='country' onChange={handleChange} className='form-control' />
                                        </div>

                                    </div>
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>Zip Code</label>
                                            <input type='text' name='zip_code' onChange={handleChange} className='form-control' />
                                        </div>

                                    </div>
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>Blood Group</label>
                                            <input type='text' name='blood_group' onChange={handleChange} className='form-control' />
                                        </div>

                                    </div>
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>About You</label>
                                            <input type='text' name='about' onChange={handleChange} className='form-control' />
                                        </div>

                                    </div>


                                </div>
                                <div className='patient-submit'>
                                    <button onClick={createPatient} type='submit'>Save changes</button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>
  )
}

export default ProfileSet