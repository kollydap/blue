import React, { useState, useEffect } from "react";
import "../styles/SingleDoctor.css";
import { useParams } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StarIcon from "@material-ui/icons/Star";
import MoneyIcon from "@material-ui/icons/Money";
import ChatIcon from "@material-ui/icons/Chat";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";
import { Link } from "react-router-dom";
import { Call, ChatBubbleOutline, VideoCall } from "@material-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

function SingleDoctor() {
  const navigate = useNavigate();
  let id = useParams().id;
  const [token, setToken] = useState("");
  let [singleDoctor, setSingleDoctor] = useState([]);

  useEffect(() => {
    setToken(localStorage.getItem("access_token"));
    axios
      .get(` http://127.0.0.1:8000/api/doctor/${id}`, {
        headers: {
          Authorization: localStorage.getItem("access_token")
            ? "JWT " + localStorage.getItem("access_token")
            : null,
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((res) => {
        setSingleDoctor(res.data);
      });
  }, []);
  console.log(singleDoctor);
  return (
    <div className="single__doctor">
      {!token ? (
        navigate("/login")
      ) : (
        <>
          <div className="single__doctor-top">
            <div className="top-left">
              <img src={singleDoctor.photo} />
            </div>
            <div className="top-middle">
              <div className="top">
                <h4>{singleDoctor.fullname}</h4>
                <p>{singleDoctor.myeducation}</p>
              </div>
              <div className="ratings">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                (35)
              </div>
              <div className="bottom">
                <p>
                  <LocationOnIcon />
                  {singleDoctor.location}
                </p>
                <div>
                  <p>{singleDoctor.specialties}</p>
                </div>
              </div>
            </div>
            <div className="top-right">
              <p>
                <ThumbUpAlt />
                99%
              </p>
              <p>
                <ChatIcon />
                35 Feedback
              </p>
              <p>
                <LocationOnIcon />
                {singleDoctor.location}
              </p>
              <p>
                <MoneyIcon />
                {singleDoctor.pricings}
              </p>
              <div>
                <BookmarkBorderIcon />
                <ChatBubbleOutline />
                <Call />
                <VideoCall />
              </div>
              <Link to={`/doctor/${id}/appointment`}>
                <button className="my-button">Book Appointment</button>
              </Link>
            </div>
          </div>
          <div className="single__doctor-bottom">
            <div className="about doc-info">
              <h4>About Me</h4>
              <p>{singleDoctor.about}</p>
            </div>
            <br />
            <div className=" doc-info">
              <h4>Education</h4>

              {/* {(singleDoctor.education).map(singledoctorEducation =>{
                        const{id,college,course,degree,startDate,endDate}=singledoctorEducation
                        return(<div key={id}>
                        <p>{degree}</p>
                    <p>{startDate}-{endDate}</p>
                    <br />
                    <p>{college}</p>
                
                            </div>)
                    })} */}
            </div>
            <br />
            <br />
            <div className=" doc-info">
              <h4>Work & Experience</h4>
              <div style={{ padding: "5px 0" }}>
                <p>American Dental Medical University</p>
                <p>BDS</p>
                <p>1998-2003</p>
              </div>

              <div style={{ padding: "5px 0" }}>
                <p>American Dental Medical University</p>
                <p>BDS</p>
                <p>1998-2003</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleDoctor;
