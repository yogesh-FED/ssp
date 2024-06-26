import React, { useEffect, useState } from "react";

// import BarChart from "../components/uicomponents/BarChart";
import Filter from "../components/uicomponents/Filter";
// import FilterOne from "../components/uicomponents/FilterOne";
// import Grid from "../components/uicomponents/Grid";
import Stats from "../components/uicomponents/Stats";
import Institute from "../components/uicomponents/Institute";
import Sample from "./Sample";
import { useLocation } from "react-router";
import Header from "../components/layouts/Header";
import AllSchemes from "./AllSchemes";
import DashboardScreen from "./DashboardScreen";
import Student from "../components/Student/Student";
import SchemeRegistration from "./schemeRegister/SchemeRegistration";
import InstituteDeptApproveReject from "../components/InstituteDeptPages/InstituteHome";
import PageInProg from "./PageInProg";

const Index = (props) => {
  const [allSchemes, setAllSchemes] = useState(false);
  const [dashboardScreen, setDashBoardScreen] = useState(true);
  const [studentScreen, setStudentScreen] = useState(false);
  const [schemeReg, setSchemeReg] = useState(false);
  const [instDash, setInstDash] = useState(false);
  const [feeDetailsScreen, setFeeDetailsScreen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const handleClick = (event, args) => { debugger
    event.preventDefault();
    event.stopPropagation();
    let menuTitle;
    if (event.target.textContent) {
      menuTitle = event.target.textContent.trim();
    } else {
      menuTitle = args;
    }
    setActiveMenu(menuTitle);
    switch (menuTitle) {
      case 'Fee Details':
        setSchemeReg(false);
        setFeeDetailsScreen(true);
        break;
      case 'All Schemes':
        setAllSchemes(true);
        setDashBoardScreen(false);
        setStudentScreen(false);
        setSchemeReg(false);
        setInstDash(false);
        setFeeDetailsScreen(false);
        break;
      case 'Student Details':
        setAllSchemes(false);
        setStudentScreen(true);
        setDashBoardScreen(false);
        setSchemeReg(false);
        setInstDash(false);
        setFeeDetailsScreen(false);
        break;
      case 'Scheme Registration':
        setSchemeReg(true);
        setAllSchemes(false);
        setStudentScreen(false);
        setDashBoardScreen(false);
        setInstDash(false);
        setFeeDetailsScreen(false);
        break;
      case 'Dashboard':
      default:
        setDashBoardScreen(true);
        setAllSchemes(false);
        setStudentScreen(false);
        setSchemeReg(false);
        setFeeDetailsScreen(false);
        {props.compName === 'instituteComponent' ? setInstDash(true) : setInstDash(false)}
        break;
    }
    //document.body.className = 'sidebar-icon-only';
  };
  const [isOpen, setIsOpen] = useState(false);
  const openSchemeResgistration = () => {
    setIsOpen(true);
  }
  const [comp, setComp] = useState('');
  const location = useLocation();
  useEffect (() => {
    switch (location.pathname) {
      case '/institute':
        setComp('institute');
        break;
      case '/department':
        setComp('department');
        break;
      case '/scheme-register':
        setComp('department');
      default:
        setComp('Page Not Found');
    }
  },[])
  return (
    <div>
      <Header sendingProps={props.compName} />
      <main id="main">
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className={`nav-item ${activeMenu === 'Dashboard' ? 'active' : ''}`} onClick={handleClick}>
              <a className="nav-link">
                <span className="menu-title">
                  Dashboard
                </span>
                <i class="bi bi-speedometer2 menu-icon" onClick={(event) => handleClick(event, 'Dashboard')}></i>
              </a>
            </li>
            {
              props.compName === 'departmentComponent' && (
              <li className={`nav-item ${activeMenu === 'Scheme Registration'? 'active' : ''}`} onClick={handleClick}>
                <a className="nav-link">
                  <span className="menu-title">
                    Scheme Registration
                  </span>
                  <i class="bi bi-check-square menu-icon" onClick={(event) => handleClick(event, 'Scheme Registration')}></i>
                </a>
              </li>
              )
            }
            {
              props.compName === 'studentComponent' && (
              <>
                <li className={`nav-item ${ activeMenu === 'Student Details' ? 'active' : ''}`} onClick={handleClick}>
                  <a className="nav-link">
                    <span className="menu-title">
                      Student Details
                    </span>
                    <i class="bi bi-person-lines-fill menu-icon" onClick={(event) => handleClick(event, 'Student Details')}></i>
                  </a>
                </li>
                <li className={`nav-item ${ activeMenu === 'All Schemes' ? 'active' : ''}`} onClick={handleClick}>
                  <a className="nav-link">
                    <span className="menu-title">
                      All Schemes
                    </span>
                    <i class="bi bi-card-list menu-icon" onClick={(event) => handleClick(event, 'All Schemes')}></i>
                  </a>
                </li>
              </>
              )
            }
            {/* {
              props.compName === 'instituteComponent' && (
                <>
                <li className={`nav-item ${activeMenu === 'Fee Details' ? 'active' : ''}`} onClick={handleClick}>
                  <a className="nav-link">
                    <span className="menu-title">
                      Fee Details
                    </span>
                    <i class="bi bi-card-list menu-icon" onClick={(event) => handleClick(event, 'All Schemes')}></i>
                  </a>
                </li>
                <li className={`nav-item ${activeMenu === 'Scheme Report' ? 'active' : ''}`} onClick={handleClick}>
                  <a className="nav-link">
                    <span className="menu-title">
                      Scheme Report
                    </span>
                    <i class="bi bi-card-checklist menu-icon" 
                    onClick={(event) => handleClick(event, 'Scheme Report')}></i>
                  </a>
                </li>
                </>
              )
            } */}
          </ul>
        </nav>
        <div className="main-panel">
          <div className="content-wrapper"> 
            {dashboardScreen && <DashboardScreen compName = {props.compName} />}
            {allSchemes && <AllSchemes />}
            {studentScreen && <Student />}
            {schemeReg && <SchemeRegistration />}
            {feeDetailsScreen && <PageInProg />}
          </div>
        </div>
      </main>
      {/* <a href="/#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a> */}
    </div>
  );
};

export default Index;
