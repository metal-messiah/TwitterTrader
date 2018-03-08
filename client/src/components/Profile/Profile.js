import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import {connect} from 'react-redux';
import {updateFirstname,
  updateLastname,
  updateGender,
  updateHairColor,
  updateEyeColor,
  updateHobby,
  updateBirthDay,
  updateBirthMonth,
  updateBirthYear} from '../../Reducer/reducer';
import { Link } from 'react-router-dom';
import './Profile.css';
import axios from 'axios';
// import httpRequest from 'request';

class Profile extends Component {

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
  }

  savePropsToDb() {
    axios.post(`/api/user/patch/?firstname=${this.props.firstname}&lastname=${this.props.lastname}&gender=${this.props.gender}&haircolor=${this.props.hairColor}&eyecolor=${this.props.eyeColor}&hobby=${this.props.hobby}&birthday=${this.props.birthDay}&birthmonth=${this.props.birthMonth}&birthyear=${this.props.birthYear}`)
      .then(r => console.log(r))
  }

  render() {
    
    var years = [<option key="default" ></option>],
        days = [<option key="default" ></option>];
    var startYear = 1910;
    var startDay = 1;
    while (startYear < 2018){
      years.push(<option key={startYear}>{startYear}</option>)
      startYear++
    }
    while (startDay < 32){
      days.push(<option key={startDay}>{startDay}</option>)
      startDay++
    }
    return (
      <div className="main-wrapper">
        <Navbar />
        <div className="dashboard-wrapper">

          <div className="profile-info">
            <div className="profile-box">
              <img className="profile-image" src="https://robohash.org/me" />
              <div className="profile-name">Name</div>
            </div>
            <div className="profile-details-wrapper">


              <div className="update-button">
                <Link to="/" onClick={()=>{this.savePropsToDb()}}>Update</Link>
              </div>
              <div className="cancel-button">
                <Link to="/">Cancel</Link>
              </div>
            </div>
          </div>




        </div>
        <div className="profile-fields-wrapper">

          <div className="input-box">
            First Name<br />
            <input className="o-bounds" type="text"  onChange={(e) => {this.props.updateFirstname(e.target.value)}} value={this.props.firstname}/>
          </div><div className="input-box">
            Hobby<br />
            <select value={this.props.hobby} onChange={(e) => {this.props.updateHobby(e.target.value)}}><option value=""></option>
              <option>Video Games</option>
              <option>Hiking</option>
              <option>Fishing</option>
              <option>Rafting</option>
            </select>
          </div>
          <div className="input-box">
            Last Name<br />
            <input className="o-bounds" type="text"  onChange={(e) => {this.props.updateLastname(e.target.value)}} value={this.props.lastname}/>
          </div><div className="input-box">
            Birth Day<br />
            <select value={this.props.birthDay} onChange={(e) => {this.props.updateBirthDay(e.target.value)}}>
              {days}
            </select>
          </div>
          <div className="input-box">
            Gender<br />
            <select value={this.props.gender} onChange={(e) => {this.props.updateGender(e.target.value)}}><option value=""></option><option value="male">Male</option><option value="female">Female</option></select>
          </div><div className="input-box">
            Birth Month<br />
            <select value={this.props.birthMonth} onChange={(e) => {this.props.updateBirthMonth(e.target.value)}}>
              <option value=""></option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            
            </select>
          </div>
          <div className="input-box">
            Hair Color<br />
            <select value={this.props.hairColor} onChange={(e) => {this.props.updateHairColor(e.target.value)}}><option value=""></option>
              <option>Brown</option>
              <option>Blonde</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Red</option>
              <option>White</option>
            </select>
          </div><div className="input-box">
            Birth Year<br />
            <select value={this.props.birthYear} onChange={(e) => {this.props.updateBirthYear(e.target.value)}}>
              {years}
            </select>
          </div>
          <div className="input-box">
            Eye Color<br />
            <select value={this.props.eyeColor} onChange={(e) => {this.props.updateEyeColor(e.target.value)}}>
            <option value=""></option>
              <option>Brown</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  const {firstname,
    lastname,
    gender,
    hairColor,
    eyeColor,
    hobby,
    birthDay,
    birthMonth,
    birthYear} = state;
  return {
    firstname,
    lastname,
    gender,
    hairColor,
    eyeColor,
    hobby,
    birthDay,
    birthMonth,
    birthYear
  }
};

export default connect(mapStateToProps, {updateFirstname,
  updateLastname,
  updateGender,
  updateHairColor,
  updateEyeColor,
  updateHobby,
  updateBirthDay,
  updateBirthMonth,
  updateBirthYear})(Profile);