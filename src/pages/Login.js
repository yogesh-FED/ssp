import React, { useState } from "react";
import Header from "../components/layouts/Header";
import "../pages/Login.css";
import tnlogo from "../assets/img/tn_logo.png";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
    const studentLogin = () => {
      navigate('/StudentProfile');
    }
    const instituteLogin = () => {
      navigate('/institute');
    }
    const departmentLogin = () => {
      navigate('/scheme-register');
    }
    return (
        <div className="login-info">
            {/* <section className="wavescss">
                <div className='air air1'></div>
                <div className='air air2'></div>
                <div className='air air3'></div>
                <div className='air air4'></div>
            </section> */}
            <section className="w-100 pos-relative">
                <div className="container">
                    <div className="container-fluid bg-signup">
                        <div className="col-lg-12 text-center">
                            <img src={tnlogo} className="logoImg" alt="Govt. Of Tamil Nadu" />

                            <h3 className="fw-bold text-white">Government of Tamilnadu</h3>
                            {/* <h3 className="text-white">Student Scholarship Portal</h3> */}

                            <ul className="nav nav-tabs mb-2 mt-4 d-flex justify-content-center align-items-center" id="myTab" role="tablist">
                                <li className="nav-item mb-2" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" 
                                    data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" 
                                    aria-selected="true"><i class="bi bi-person-circle"></i> Student Login</button>
                                </li>
                                <li className="nav-item mx-2 mb-2" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" 
                                    data-bs-target="#profile-tab-pane" type="button" role="tab" 
                                    aria-controls="profile-tab-pane" aria-selected="false"><i class="bi bi-person-square"></i> Institute Login</button>
                                </li>
                                <li className="nav-item mx-2 mb-2" role="presentation">
                                    <button className="nav-link" id="department-tab" data-bs-toggle="tab" 
                                    data-bs-target="#department-tab-pane" type="button" role="tab" 
                                    aria-controls="department-tab-pane" aria-selected="false"><i class="bi bi-person-square"></i> Department Login</button>
                                </li>
                            </ul>

                        </div>
                        <div className=""> 
                            <div className="card col-lg-12 mb-3 mauto">
                                <div className="card-body pt-4 pb-3">
                                    <div className="logo-section text-center">
                                        <h2 className="logo-txt1 text-default mb-3"> 
                                            <span className="d-block"><i className="bi bi-mortarboard font32"></i></span>
                                            State Scholarship Portal</h2>
                                    </div>
                                    {/* <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                                        <li className="nav-item mb-2" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Student Login</button>
                                        </li>
                                        <li className="nav-item mx-2 mb-2" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Institute Login</button>
                                        </li>
                                    </ul> */}
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                            <div>
                                                <form className="row" id="login_form" method="POST" >

                                                    <div class="input-group mb-2">
                                                        <span class="input-group-text box-color" id="basic-addon1"><i class="bi bi-person-check"></i></span>
                                                        <input type="number" id="txt_password" name="txt_password" className="form-control form-control"
                                                            placeholder="Enter UMIS ID / EMIS ID" required />
                                                    </div>

                                                    {/* <div className="input-group mb-2" id="div_password">
                                                        <input type="number" id="txt_password" name="txt_password" className="form-control form-control"
                                                            placeholder="Enter UMIS ID / EMIS ID" required />
                                                    </div> */}
                                                    <div className="input-group mb-2" id="div_password">
                                                        <a className="btn btn-primary btn-otp"><i className="bi bi-check2-circle"></i> Get OTP</a>
                                                    </div>
                                                    <div className="input-group mb-2" id="div_password">
                                                        <input type="number" id="txt_password" name="txt_password" className="form-control form-control"
                                                            placeholder="Enter OTP" required />
                                                    </div>
                                                    <div className="mb-1 mt-3 h-100 d-flex align-items-center justify-content-center">
                                                        <a onClick={studentLogin} id="btnSendOTP" value="Submit" className="btn btn-lg btn-otp btn-success d-block"><i class="bi bi-send"></i> Submit</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                            <div>
                                                <form className="row" id="login_form" method="POST" >
                                                <div class="input-group mb-2">
                                                        <span class="input-group-text box-color" id="basic-addon1"><i class="bi bi-person-check"></i></span>
                                                        <input type="number" id="txt_password" name="txt_password" className="form-control form-control"
                                                            placeholder="Enter Institute ID" required />
                                                    </div>

                                                    {/* <div className="input-group mb-2" id="div_password">
                                                        <input type="number" id="txt_password" name="txt_password" className="form-control form-control"
                                                            placeholder="Enter Institute ID" required />
                                                    </div> */}
                                                    <div className="input-group mb-2" id="div_password">
                                                        <a className="btn btn-primary btn-otp"><i className="bi bi-check2-circle"></i> Get OTP</a>
                                                    </div>
                                                    <div className="input-group mb-2" id="div_password">
                                                        <input type="number" id="txt_password" name="txt_password" className="form-control form-control"
                                                            placeholder="Enter OTP" required />
                                                    </div>
                                                    <div className="mb-1 mt-3 h-100 d-flex align-items-center justify-content-center">
                                                        <a onClick={instituteLogin} id="btnSendOTP" value="Submit" className="btn btn-lg btn-otp btn-success d-block"><i class="bi bi-send"></i> Submit</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="department-tab-pane" role="tabpanel" aria-labelledby="dept-tab" tabindex="0">
                                            <div>
                                                <form className="row" id="login_form" method="POST" >
                                                <div class="input-group mb-2">
                                                        <span class="input-group-text box-color" id="basic-addon1"><i class="bi bi-person-check"></i></span>
                                                        <input type="number" id="txt_password" name="txt_password" className="form-control form-control"
                                                            placeholder="Enter Department ID" required />
                                                    </div>

                                                    {/* <div className="input-group mb-2" id="div_password">
                                                        <input type="number" id="txt_password" name="txt_password" className="form-control form-control"
                                                            placeholder="Enter Institute ID" required />
                                                    </div> */}
                                                    <div className="input-group mb-2" id="div_password">
                                                        <a className="btn btn-primary btn-otp"><i className="bi bi-check2-circle"></i> Get OTP</a>
                                                    </div>
                                                    <div className="input-group mb-2" id="div_password">
                                                        <input type="number" id="txt_password" name="txt_password" className="form-control form-control"
                                                            placeholder="Enter OTP" required />
                                                    </div>
                                                    <div className="mb-1 mt-3 h-100 d-flex align-items-center justify-content-center">
                                                        <a onClick={departmentLogin} id="btnSendOTP" value="Submit" className="btn btn-lg btn-otp btn-success d-block"><i class="bi bi-send"></i> Submit</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="col-lg-12 text-center footerInfo">
                <p className="mb-1 font14 text-white">TNeGA, Copyright © 2024. All Rights Reserved</p>
            </div>
        </div>
    );

};

export default Login;