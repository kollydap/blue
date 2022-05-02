import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import "../styles/Search_Section.css"

function SearchSection() {
  return (
    <div className='searchSection'>
        <div className='containerFluid block'>
            <div className='bannerWrapper block'>
                <div className='bannerHeader'>
                    <h1>Search Doctor, Make an Appointment</h1>
                    <p>Discover the best doctor's in your city or city nearest to you.</p>
                </div>
                <div className='search-box block'>
                  <form>
                    <div className='form-group search-location block'>
                   <input type="text" className="form-control" placeholder="Search Location" />
									<span className="form-text block">Based on your Location</span>
                    </div>
                    <div className='form-group search-info block  '>
                    <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
									<span className="form-text block">Ex : Dental or Sugar Check up etc</span>
								</div>
                <button><SearchOutlined /><h6>SEARCH</h6> </button>
    
                  </form>
                </div>

            </div>
        </div>

    </div>
  )
}

export default SearchSection