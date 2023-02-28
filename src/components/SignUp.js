import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../axios";
import loginBanner from "../assets/login-banner.png";

function SignUp() {
  const navigate = useNavigate();

  const initialFormData = Object.freeze({
    email: "",
    password: "",
    username: "",
    first_name: "",
    last_name: "",
  });

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  const createUser = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`account/register/`, {
        email: formData.email,
        password: formData.password,
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
      })
      .then((res) => {
        navigate("/login");
      });
  };

  return (
    <div className="content">
      <div className="fluid">
        <div className="flex">
          <div className="offset">
            <div className="account-content">
              <div className="account-row">
                <div className="account-left">
                  <img src={loginBanner} />
                </div>
                <div className="account-right">
                  <div className="account-header">
                    <h3>
                      Login
                      <span> Bluecare</span>
                    </h3>
                  </div>
                  <form>
                    <div className="form-col-input">
                      <div className="form-group">
                        <input
                          placeholder="Firstname"
                          className="form-control"
                          name="first_name"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-col-input">
                      <div className="form-group">
                        <input
                          placeholder="Lastname"
                          className="form-control"
                          name="last_name"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-col-input">
                      <div className="form-group">
                        <input
                          placeholder="Username"
                          className="form-control"
                          name="username"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-col-input">
                      <div className="form-group">
                        <input
                          placeholder="email"
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-col-input">
                      <div className="form-group">
                        <input
                          placeholder="password"
                          type="password"
                          className="form-control"
                          name="password"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div style={{ fontSize: "12px", float: "right" }}>
                      <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Already have an Account ?
                      </Link>
                    </div>

                    <button className="account-but" onClick={createUser}>
                      SignUp
                    </button>
                    <div style={{ textAlign: "center" }}>or</div>
                    <div className="social-buttons">
                      <button
                        className=" social-but"
                        style={{ backgroundColor: "#3a559f" }}
                      >
                        {" "}
                        Login{" "}
                      </button>
                      <button
                        className=" social-but"
                        style={{ backgroundColor: "#dd4b39" }}
                      >
                        {" "}
                        Login{" "}
                      </button>
                    </div>

                    <div></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   <div><div className='login'>
    //   <div>
    //     <img src={loginBanner}/>
    //   </div>

    //   <form>
    //   <div className="input-container">
    //       <input type="text" placeholder='FirstName' name='first_name' onChange={handleChange}  required />
    //     </div>
    //     <div className="input-container">
    //       <input type="text" placeholder='LastName'name='last_name' onChange={handleChange} required />
    //     </div>
    //     <div className="input-container">
    //       <input type="text" placeholder='Username' name='username' onChange={handleChange} required />
    //     </div>
    //     <div className="input-container">
    //       <input type="email" placeholder='email' name='email' autoComplete='email'onChange={handleChange}  required />
    //     </div>
    //     <div className="input-container">
    //       <input type="password" placeholder='password' name='password' onChange={handleChange} required />
    //     </div>
    //     <div className='forget'></div>
    //     <div className="button-container">
    //         <button onClick={createUser}>SignUp</button>
    //     </div>

    //   </form>

    // </div></div>
  );
}

export default SignUp;
