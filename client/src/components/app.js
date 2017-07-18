import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Prototypes from './inst-prototypes';
import Projects from './inst-projects';
import '../assets/css/app.css';
import logo from '../assets/imgs/logo.svg';

class App extends Component {
    render(){
        return (
            <div className="main-body">
                <img className="main-bg-logo" src={logo}/>
                <div className="container">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:type" component={Home}/>
                    <Route path="/prototypes/:name" component={Prototypes}/>
                    <Route path="/projects/:name" component={Projects}/>
                </div>
            </div>
        )
    }
};

export default App;
