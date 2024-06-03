import React from "react";

export default function MobNav() {
  return (
    <div>
      <nav id="navbar" className="navbar p-1">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link scrollto " href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#team">
              Team
            </a>
          </li>
          <li className="dropdown">
            <a href="/#">
              <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li>
                <a href="/#">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="/#">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="/#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="/#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="/#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/#">Drop Down 2</a>
              </li>
              <li>
                <a href="/#">Drop Down 3</a>
              </li>
              <li>
                <a href="/#">Drop Down 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/#" className="nav-link scrollto">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
