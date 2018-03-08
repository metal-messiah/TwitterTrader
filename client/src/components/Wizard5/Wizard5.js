import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateDesiredRent} from '../../Reducer/reducer';
import {Link} from 'react-router-dom';

import stepActive from '../../assets/step_active.png'
import stepInactive from '../../assets/step_inactive.png'
import stepCompleted from '../../assets/step_completed.png'
import axios from 'axios';

import './Wizard5.css';

class Wizard5 extends Component {
    addProperty() {
        const body = {
            name: this.props.propertyName,
            description: this.props.propertyDescription,
            address: this.props.address,
            city: this.props.city,
            state: this.props.ST,
            zip: this.props.zip,
            image: this.props.imageURL,
            loanamt: this.props.loanAmount,
            monthly: this.props.monthlyMortgage,
            rent: this.props.desiredRent
        }
        axios.post(`/api/properties`, body)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    render() {
        const {updateDesiredRent} = this.props;
        var recRent = this.props.monthlyMortgage * 1.25
        return (
            <div className="parent-div">

                <div className="vert-align">

                    <div className="header">
                        <p className="left-align">Add new listing</p>
                        <Link to="/dashboard">
                            <button className="right-align cancel">Cancel</button>
                        </Link>
                    </div>

                    <div className="status">
                        <p>Step 5</p>
                        <div class="steps">
                            <img src={stepCompleted} alt="Step 1"/>
                            <img src={stepCompleted} alt="Step 2"/>
                            <img src={stepCompleted} alt="Step 3"/>
                            <img src={stepCompleted} alt="Step 4"/>
                            <img src={stepActive} alt="Step 5"/>
                        </div>
                    </div>

                    <div className="inputs">
                        <p>Recommended Rent ${recRent}</p>
                        <p>Desired Rent</p>
                        <input type="text" value = {this.props.desiredRent} onChange={(e) => updateDesiredRent(e.target.value)}/>
                    </div>

                    <div className="navigation">
                        <Link to="/wizard/4">
                            <button className="next-step">Previous Step</button>
                        </Link>
                        <Link to="/dashboard">
                            <button className="next-step" onClick={() => this.addProperty()}>Complete</button>
                        </Link>
                    </div>

                </div>

            </div>
        )
    }
}

let mapStateToProps = state => {
    const {propertyName, propertyDescription, address, city, ST, zip, imageURL, loanAmount, monthlyMortgage, desiredRent} = state;
    return {
        propertyName,
        propertyDescription,
        address,
        city,
        ST,
        zip,
        imageURL,
        loanAmount,
        desiredRent,
        monthlyMortgage
    }
};

export default connect(mapStateToProps, {updateDesiredRent})(Wizard5)
