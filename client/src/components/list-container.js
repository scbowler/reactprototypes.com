import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import List from './list';

class ListContainer extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink to="/prototypes" className="nav-link">Prototypes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" className="nav-link">Projects</NavLink>
                    </li>
                </ul>

                <Route path="/prototypes" component={List} />
                <Route path="/projects" component={List} />
            </div>
        )
    }
}

export default ListContainer;
