import React, { useState } from "react";
import SchemeRegistration from "./schemeRegister/SchemeRegistration";
import MainLayout from "../components/MainLayout/MainLayout";

const SchemeRegister = () => {
return (
  <div>
    {/* <main id="main">
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
        <li className="nav-item active">
        <a className="nav-link" href="user-dashboard.html">
        <span className="menu-title">Scheme Register</span>
        <i className="bi bi-pencil-square menu-icon"></i>
        </a>
        </li>
        </ul>
      </nav> */}
      <MainLayout compName={'departmentComponent'}>
        <SchemeRegistration />
      </MainLayout>
      
    {/* </main>
    <a
    href="/#"
    className="back-to-top d-flex align-items-center justify-content-center"
    >
    <i className="bi bi-arrow-up-short"></i>
    </a> */}
  </div>
);
};

export default SchemeRegister;