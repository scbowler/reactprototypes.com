import React from 'react' ;
import { Link, Route } from 'react-router-dom';
import Instructions from './instructions';
import * as all from './instructions/index.js';

export default (props) => {
    const { url } = props;
    const routes = Object.keys(all).map((k, i) => {
        const current = all[k];
        return <Route key={i} path={`${url}/${current.path}`} render={() => {
            return (
                <Instructions>{current.component}</Instructions>
            )
        }}/>;
    });
    return <div>{routes}</div>;
}
