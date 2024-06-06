import React, { useState, useEffect, useRef } from "react";
import tnegalogo from "../../assets/img/tnega-logo.png";
import tnlogo from "../../assets/img/tn_logo.png";
import MobNav from "./MobNav";
import { useNavigate } from "react-router";

const Header = (props) => {
  const [isActive] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  }
  const handleClick1 = (event) => {
    document.body.classList.toggle("sidebar-icon-only");
  };

  // Use a ref to store a reference to the div element
  const toggleClickRef = useRef(null);

  useEffect(() => {
    // Trigger a click event on the toggleClink element when the component mounts
    if (toggleClickRef.current) {
      toggleClickRef.current.click();
    }
  }, []);

  // dark mode
  // let clickedClass = "clicked";
  // const body = document.body;
  // const lightTheme = "light";
  // const darkTheme = "dark";
  // let theme;

  // if (localStorage) {
  //   theme = localStorage.getItem("theme");
  // }

  // if (theme === lightTheme || theme === darkTheme) {
  //   body.classList.add(theme);
  // } else {
  //   body.classList.add(lightTheme);
  // }

  // const switchTheme = (e) => {
  //   if (theme === darkTheme) {
  //     body.classList.replace(darkTheme, lightTheme);
  //     e.target.classList.remove(clickedClass);
  //     localStorage.setItem("theme", "light");
  //     theme = lightTheme;
  //   } else {
  //     body.classList.replace(lightTheme, darkTheme);
  //     e.target.classList.add(clickedClass);
  //     localStorage.setItem("theme", "dark");
  //     theme = darkTheme;
  //   }
  // };

  return (
    <div>
      {/* header starts */}
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div
      className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center toggleClink"
      ref={toggleClickRef} // Assign the ref to the div element
    >
        {/* <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center toggleClink"> */}
          <button
            type="button"
            className={isActive ? "bg-salmon " : ""}
            onClick={handleClick1}
          >
            <i className="bi bi-list-nested pd-2"></i>
          </button>
          <a className="navbar-brand brand-logo" href="user-dashboard.html">
            <img src={tnlogo} alt="logo" className="hd-logo" />
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex v-align">
          <div className="search-field d-none d-md-block">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a
                  className="active logo-text txt-red d-block deco-none txt-bold"
                  aria-current="page"
                  onClick={handleLogout}
                >
                  Government of Tamil Nadu
                </a>
                <a
                  className="logo-text txt-green d-block deco-none txt-bold"
                  aria-current="page"
                  onClick={handleLogout}
                >
                  State Scholarship Portal
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="navbar-brand brand-logo-mini" onClick={handleLogout}>
                  <img
                    className="logo-one hd-logo"
                    src={tnegalogo}
                    alt="logo"
                  />
                </a>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav navbar-nav-right">
            {/* <li className="nav-item d-none d-lg-block full-screen-link">
              <a
                href="/#"
                className="linkedin txt-green"
                onClick={() => handleClick("en")}
              >
                Eng
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#"
                className="linkedin txt-green"
                onClick={() => handleClick("tm")}
              >
                தமிழ்
              </a>
            </li> */}
            {/* <li className="nav-item nav-logout d-none d-lg-block">
              <a
                href="/#"
                className={theme === "dark" ? clickedClass : ""}
                id="darkMode"
                onClick={(e) => switchTheme(e)}
              >
                <i className="bi bi-circle-half txt-green"></i>
              </a>
            </li> */}
             <li className="nav-item nav-logout d-none d-lg-block">
              <a className="txt-green">
              தமிழ்
              </a>
            </li>
            <li className="nav-item nav-logout d-none d-lg-block">
              <a className="txt-green">
                <i className="bi bi-person-circle px-1"></i> Welcome {props.sendingProps === 'instituteComponent' ? 'Institute' : props.sendingProps === 'studentComponent' ? 'Student Name' :  props.sendingProps === 'departmentComponent' ? 'Department' : ''}
              </a>  
            </li>
            <li className="nav-item nav-logout d-none d-lg-block">
              <a onClick={handleLogout} className="txt-green">
              <i className="bi bi-box-arrow-in-right px-1"></i> Logout
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
      {/* header ends */}
      {/* left canvas starts */}
      <div
        className="offcanvas offcanvas-start leftCanvas"
        tabIndex="-1"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <i className="bi bi-stack"></i> Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* mobile nav starts */}
          <MobNav />
          {/* Mobile nav ends */}
        </div>
      </div>
      {/* left canvas ends */}
    </div>
  );
};

export default Header;
