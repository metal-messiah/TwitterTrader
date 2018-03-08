import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import './Dashboard.css';

import axios from "axios";

export default class Dashboard extends Component {

  componentDidMount(){
    axios.get("/api/auth/authenticated/#")
      .then((r)=>{
        if (r.data){
          //do nothing for a minute
        }
        else{
          window.open("/#/auth")
        }
      })

      axios.get("/api/recommended")
      .then((r)=>{
        if (r.data){
          console.log(r.data)
        }
      })
  }

  render() {
    return (
      <div className="main-wrapper">
        <Navbar />
        <div className="dashboard-wrapper">

          <div className="profile-wrapper">
            <img className="profile-image" src="https://robohash.org/me" />
            <div className="profile-d-wrapper">
              <div className="profile-name">Name</div>
              <br />
              <div className="edit-profile">
                <Link to="/profile">Edit Profile</Link>
              </div>
            </div>
          </div>
          <div className="description-wrapper">
            Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!
          </div>



        </div>
        <div className="friends-wrapper">

          <div className="friends-container">
            <div className="friends-header">

              <div className="friends-title">Recommended Friends</div>
              <div className="friends-sort">Sorted by <select>

                <option value="firstname">First Name</option>
                <option value="lastname">Last Name</option>
                <option value="gender">Gender</option>
                <option value="hobby">Hobby</option>
                <option value="hair">Hair</option>
                <option value="eye">Eye</option>
                <option value="birthday">Birthday</option>


              </select></div>
            </div>

            <div className="friends-content"><span>No Recommendations</span></div>

          </div>
        </div>
      </div>
    );
  }
}
