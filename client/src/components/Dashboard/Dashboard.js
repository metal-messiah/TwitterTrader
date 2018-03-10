import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
// import './Dashboard.css';

import {updateCoins} from '../../Reducer/reducer';

import axios from "axios";

class Dashboard extends Component {

  componentDidMount(){
    // axios.get("/api/auth/authenticated/#")
    //   .then((r)=>{
    //     if (r.data){
    //       //do nothing for a minute
    //     }
    //     else{
    //       //window.open("/#/auth")
    //     }
    //   })

    //   axios.get("/api/recommended")
    //   .then((r)=>{
    //     if (r.data){
    //       console.log(r.data)
    //     }
    //   })
  }

  render() {
    return (
      <div className="main-wrapper">
        <Navbar />
        <Sidebar />
        <div className="dashboard-wrapper">
          <div className="coins" >{this.props.coins} Coins</div>
          
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  const {coins} = state;
  return {
    coins
  }
};

export default connect(mapStateToProps, {updateCoins})(Dashboard);
