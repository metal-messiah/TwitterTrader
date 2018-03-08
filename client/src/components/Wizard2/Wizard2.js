import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateAddress, updateCity, updateState, updateZip} from '../../Reducer/reducer';
import {Link} from 'react-router-dom';

import stepActive from '../../assets/step_active.png'
import stepInactive from '../../assets/step_inactive.png'
import stepCompleted from '../../assets/step_completed.png'

import './Wizard2.css';

class Wizard2 extends Component {

    render() {
        const {updateAddress, updateCity, updateState, updateZip} = this.props;
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
                        <p>Step 2</p>
                        <div class="steps">
                            <img src={stepCompleted} alt="Step 1"/>
                            <img src={stepActive} alt="Step 2"/>
                            <img src={stepInactive} alt="Step 3"/>
                            <img src={stepInactive} alt="Step 4"/>
                            <img src={stepInactive} alt="Step 5"/>
                        </div>
                    </div>

                    <div className="inputs">
                        <p>Address</p>
                        <input id="addressInput" type="text" value={this.props.address} onChange={(e) => updateAddress(e.target.value)}/>
                        <div className="cityState">
                            <div id="city">
                                <p>City</p>
                                <input class="cityStateInput" type="text" value={this.props.city} onChange={(e) => updateCity(e.target.value)}/>
                            </div>
                            <div id="state"><p>State</p>
                                <input class="cityStateInput" value={this.props.ST} type="text"
                                       onChange={(e) => updateState(e.target.value)}/>
                            </div>
                        </div>
                        <p>Zip</p>
                        <input id="zipInput" type="text" value={this.props.zip} onChange={(e) => updateZip(e.target.value)}/>
                    </div>

                    <div className="navigation">
                        <Link to="/wizard/1">
                            <button class="next-step">Previous Step</button>
                        </Link>
                        <Link to="/wizard/3">
                            <button class="next-step">Next Step</button>
                        </Link>
                    </div>

                </div>

            </div>
        )
    }
}

let mapStateToProps = state => {
    const {address, city, ST, zip} = state;
    return {
        address,
        city,
        ST,
        zip
    }
};

export default connect(mapStateToProps, {updateAddress, updateCity, updateState, updateZip})(Wizard2)

