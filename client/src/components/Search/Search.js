import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
// import './Search.css';
import axios from 'axios';

export default class Profile extends Component {

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

      window.
      axios.get("/api/user/search/"+window.location.href.split("/").pop())
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

        <div className="container-box">
          
            <select>
              <option value="firstname">First Name</option>
              <option value="lastname">Last Name</option>
            </select>
            <input type="text" />
            <div className="update-button">
              <Link to="#">Search</Link>
            </div>
            <div className="cancel-button">
              <Link to="#">Reset</Link>
            </div>
          
          {/* <div id="searchBottom"></div> */}
        </div>
        <div className="container-box">
          
            
          
          
        </div>
        
      </div>
    );
  }
}
