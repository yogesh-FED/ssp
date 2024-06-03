import React from "react";

export default function Sidebar() {
  return (
    <div>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item active">
            <a className="nav-link" href="user-dashboard.html">
              <span className="menu-title">Dashboard</span>
              <i className="bi bi-hourglass-bottom menu-icon"></i>
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="projects.html">
              <span className="menu-title">Reports</span>
              <i className="bi bi-bookmark-plus menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="user-leave-module.html">
              <span className="menu-title">Leave Module</span>
              <i className="bi bi-cart-check menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="discussion-forum.html">
              <span className="menu-title">Discussion Forum</span>
              <i className="bi bi-shield-check menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="user-profile.html">
              <span className="menu-title">Complete your Profile</span>
              <i className="bi bi-sticky menu-icon"></i>
            </a>
          </li> */} 
        </ul>
      </nav>
    </div>
  );
}
