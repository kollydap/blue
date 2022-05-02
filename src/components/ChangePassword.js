import React from 'react'

function ChangePassword() {
  return (
     <div className='patient__right'>
                    <div className='right__card'>
                        <div className='right__card-body'>
                            <form>
                                <div className='form-row'> 
                                 
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>Old Password</label>
                                            <input type='password'   className='form-control' />
                                        </div>

                                    </div>
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>New Password</label>
                                            <input type='password'  className='form-control' />
                                        </div>

                                    </div>
                              
                                    <div className='form-col-input'>
                                        <div className='form-group'>
                                            <label>Confirm Password</label>
                                            <input type='password'   className='form-control' />
                                        </div>

                                    </div>
                                   </div>
                                <div className='patient-submit'>
                                    <button  type='submit'>Save changes</button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>
  )
}

export default ChangePassword