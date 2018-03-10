import React, { Component } from 'react';
// import logo from '../../assets/header_logo.png';
import { Link } from 'react-router-dom';
// import './Navbar.css';
import logo from '../../assets/logo.png'
export default class Navbar extends Component {

  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-contents">
          <div className="navbar-left">
            <div>
              <img src={logo} className="logo-topbar"/>
            </div>
          </div>
          {/* <div className="navbar-center">Dashboard</div> */}
          <div className="navbar-right">
            <div>
              <Link to="/api/auth/logout"><span className="Header_right_span open-sans-bold">Logout</span></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}