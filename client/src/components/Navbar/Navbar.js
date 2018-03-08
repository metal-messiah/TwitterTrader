import React, { Component } from 'react';
// import logo from '../../assets/header_logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import home from '../../assets/home.png';
import search from '../../assets/search.png';

export default class Navbar extends Component {

  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-contents">
          <div className="navbar-left">
            <span>Helo</span>
            <Link to="/"><div className="home-button" /><img src={home}/></Link>
            <Link to="/search/1"><div className="search-button" /><img src={search}/></Link>
          </div>
          <div className="navbar-center">Dashboard</div>
          <div className="navbar-right">
            <Link to="/api/auth/logout"><span className="Header_right_span open-sans-bold">Logout</span></Link>
          </div>
        </div>
      </div>
    );
  }
}