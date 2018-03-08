import React, { Component } from 'react';
import Routes from './routes';
import {connect} from 'react-redux';
import Navbar from './components/Navbar/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container">
          <div>
            {Routes}
          </div>
        </div>   
        
    );
  }
}

let mapStateToProps = (state) => state;
export default connect(mapStateToProps)(App);

