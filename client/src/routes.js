import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
// import Wizard1 from './components/Wizard1/Wizard1';
// import Wizard2 from './components/Wizard2/Wizard2';
// import Wizard3 from './components/Wizard3/Wizard3';
// import Wizard4 from './components/Wizard4/Wizard4';
// import Wizard5 from './components/Wizard5/Wizard5';

export default (
    <HashRouter>
        <div>
            <Route exact path='/' component={Dashboard} />
            <Route path='/auth' component={LoginScreen} />
            <Route path='/profile' component={Profile} />
            <Route path="/search/:page" component={Search} />
        </div>
    </HashRouter>    
)