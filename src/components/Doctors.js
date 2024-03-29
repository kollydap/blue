import {
  AccessTime,
  Star,
  Info,
  LocationOn,
  Money,
  VerifiedUserOutlined,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Doctor.css";

// import CircularProgress from '@material-ui/material/';
// import Carousel from "react-elastic-carousel";

function Doctors() {
  let [doctors, setDoctors] = useState([]);
  let [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/doctor/")
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
        setLoader(false);
      });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <div className="doctor-section">
      <div className="doctor-fluid">
        <div className="doctor-row">
          {loader && (
            <div style={{ textAlign: "center" }}>
              {/* <CircularProgress style={{color:"#20c0f3"}} /> */}
              <br />
              Fetching Doctors...
            </div>
          )}
          {doctors && (
            <div className="doctors__reel">
              {/* // <Carousel breakPoints={breakPoints} transitionMs={1000} autoPlaySpeed={2000} enableAutoPlay={true}> */}
              {doctors.map((doctor) => {
                const {
                  id,
                  photo,
                  location,
                  schedule,
                  pricings,
                  fullname,
                  myeducation,
                } = doctor;

                return (
                  <Link key={id} to={`doctor/${id}`}>
                    <div className="doctor-card">
                      <img src={photo} alt="doctor " />
                      <div className="card-body">
                        <h3>
                          {fullname}
                          <VerifiedUserOutlined />
                        </h3>
                        <p> {myeducation}</p>
                        <div className="ratings">
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          (35)
                        </div>

                        <ul className="availability-info">
                          <li>
                            <LocationOn />
                            {location}
                          </li>
                          <li>
                            <AccessTime />
                            Available: {schedule}
                          </li>
                          <li>
                            <Money />
                            {pricings} <Info />{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                );
              })}
              {/* </Carousel> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
