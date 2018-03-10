import React, { Component } from 'react';
// import logo from '../../assets/header_logo.png';
import { Link } from 'react-router-dom';
// import './Navbar.css';
import logo from '../../assets/logo.png'

import {updateActivePanel} from '../../Reducer/reducer';

import {connect} from 'react-redux';

class Sidebar extends Component {

  render() {
    // var hrefParts = window.location.href.split("/")
    // var currentPage = hrefParts.pop() || hrefParts[hrefParts.length-2];
    
    console.log(this.props.activepanel)
    return (
      <div className="sidebar-wrapper">
          <div onClick={()=>this.props.updateActivePanel('dashboard')} className={this.props.activepanel == 'dashboard' ? "sidebar-item active" : "sidebar-item"}>
            <Link to="/">
              <i className="fas fa-chart-line fa-3x"></i>
              <br/>
              <span>Dashboard</span>
            </Link>
          </div>
          <div onClick={()=>this.props.updateActivePanel('marketplace')} className={this.props.activepanel == 'marketplace' ? "sidebar-item active" : "sidebar-item"}>
            <Link to="#/marketplace">
            <i className="fas fa-id-card fa-3x"></i>
              <br/>
              <span>Marketplace</span>
            </Link>
          </div>
          <div onClick={()=>this.props.updateActivePanel('leaders')} className={this.props.activepanel == 'leaders' ? "sidebar-item active" : "sidebar-item"}>
            <Link to="#/leaders" onClick={()=>{}}>
            <i className="fas fa-trophy fa-3x"></i>
              <br/>
              <span>Leaders</span>
            </Link>
          </div>
          <div onClick={()=>this.props.updateActivePanel('profile')} className={this.props.activepanel == 'profile' ? "sidebar-item active" : "sidebar-item"}>
            <Link to="#/profile">
            <i className="fas fa-user-circle fa-3x"></i>
              <br/>
              <span>Profile</span>
            </Link>
          </div>
        </div>
      
    );
  }
}

let mapStateToProps = state => {
  const {activepanel} = state;
  return {
    activepanel
  }
};

export default connect(mapStateToProps, {updateActivePanel})(Sidebar);