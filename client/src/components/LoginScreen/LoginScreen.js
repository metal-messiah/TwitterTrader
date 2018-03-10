import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
// import './LoginScreen.css';

export default class LoginScreen extends Component {

  render() {
    return (
      <div>
        <div id="login-wrapper" className="p-g-gradient">

          <div className="login-box o-y-gradient">

            <div>
              <div className="logo-container">
                <img className="logo-img" src={logo}/><br/>
              </div>
              <div className="login-button-wrapper">
                <a href="/api/auth/login"><div className="login-button">Login / Register</div></a>

              </div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

