import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateImageURL} from '../../Reducer/reducer';
import {Link} from 'react-router-dom';

import stepActive from '../../assets/step_active.png'
import stepInactive from '../../assets/step_inactive.png'
import stepCompleted from '../../assets/step_completed.png'

import './Wizard3.css';

class Wizard3 extends Component {

    render() {
        const {updateImageURL} = this.props;
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
                        <p>Step 3</p>
                        <div class="steps">
                            <img src={stepCompleted} alt="Step 1"/>
                            <img src={stepCompleted} alt="Step 2"/>
                            <img src={stepActive} alt="Step 3"/>
                            <img src={stepInactive} alt="Step 4"/>
                            <img src={stepInactive} alt="Step 5"/>
                        </div>
                    </div>

                    <div className="inputs">
                        {/* style with object-fit: contain */}
                        <div className="imageWrapper">
                            <div className="image">
                                <img src={this.props.imageURL} alt="Pic Should be Here"/>
                            </div>
                        </div>
                        <p>Image URL</p>
                        <input type="text" value={this.props.imageURL} onChange={(e) => updateImageURL(e.target.value)}/>
                    </div>

                    <div className="navigation">
                        <Link to="/wizard/2">
                            <button className="next-step">Previous Step</button>
                        </Link>
                        <Link to="/wizard/4">
                            <button className="next-step">Next Step</button>
                        </Link>
                    </div>

                </div>

            </div>
        )
    }
}

let mapStateToProps = state => {
    const {imageURL} = state;
    return {
        imageURL
    }
};

export default connect(mapStateToProps, {updateImageURL})(Wizard3)
