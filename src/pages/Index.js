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

const Index = (props) => { debugger;
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
            <li className="nav-item active">
              <a className="nav-link">
                <span className="menu-title">Dashboard</span>
                <i className="bi bi-speedometer2 menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <span className="menu-title">
                  {
                    props.compName === 'instituteComponent'
                    ?
                    ''
                    :
                    props.compName === 'studentComponent'
                    ?
                    ''
                    :
                    ''
                  }
                </span>
                {
                  props.compName === 'instituteComponent'
                  ?
                  ''
                  :
                  props.compName === 'studentComponent'
                  ?
                  ''
                  :
                  // <i className="bi bi-pencil-square menu-icon"></i>
                  ''
                }
                
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <span className="menu-title">
                  {
                    props.compName === 'instituteComponent'
                    ?
                    ''
                    :
                    props.compName === 'studentComponent'
                    ?
                    ''
                    :
                    ''
                  }
                </span>
                {
                  props.compName === 'instituteComponent'
                  ?
                  ''
                  :
                  props.compName === 'studentComponent'
                  ?
                  ''
                  :
                  // <i className="bi bi-file-earmark-text menu-icon"></i>
                  ''
                }
              </a>
            </li>
          </ul>
        </nav>
        <div className="main-panel">
          <div className="content-wrapper"> {props.children} </div>
        </div>
      </main>
      {/* <a href="/#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a> */}
    </div>
  );
};

export default Index;
