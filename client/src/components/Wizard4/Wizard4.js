import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateLoanAmount, updateMonthlyMortgage} from '../../Reducer/reducer';
import {Link} from 'react-router-dom';

import stepActive from '../../assets/step_active.png'
import stepInactive from '../../assets/step_inactive.png'
import stepCompleted from '../../assets/step_completed.png'

import './Wizard4.css';

class Wizard4 extends Component {

    render() {
        const {updateLoanAmount, updateMonthlyMortgage} = this.props;
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
                        <p>Step 4</p>
                        <div class="steps">
                            <img src={stepCompleted} alt="Step 1"/>
                            <img src={stepCompleted} alt="Step 2"/>
                            <img src={stepCompleted} alt="Step 3"/>
                            <img src={stepActive} alt="Step 4"/>
                            <img src={stepInactive} alt="Step 5"/>
                        </div>
                    </div>

                    <div className="inputs">
                        <p>Loan Amount</p>
                        <input type="text" value= {this.props.loanAmount} onChange={(e) => updateLoanAmount(e.target.value)}/>
                        <p>Monthly Mortgage</p>
                        <input type="text" value={this.props.monthlyMortgage} onChange={(e) => updateMonthlyMortgage(e.target.value)}/>
                    </div>

                    <div className="navigation">
                        <Link to="/wizard/3">
                            <button className="next-step">Previous Step</button>
                        </Link>
                        <Link to="/wizard/5">
                            <button className="next-step">Next Step</button>
                        </Link>
                    </div>

                </div>

            </div>
        )
    }
}

let mapStateToProps = state => {
    const {loanAmount, monthlyMortgage} = state;
    return {
        loanAmount,
        monthlyMortgage
    }
};

export default connect(mapStateToProps, {updateLoanAmount, updateMonthlyMortgage})(Wizard4)