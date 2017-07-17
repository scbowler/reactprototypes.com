import React from 'react' ;
import { Link, Route } from 'react-router-dom';
import * as all from './instructions';

export default (props) => {
    const { url } = props;
    console.log('Test:', all, url);
    const routes = Object.keys(all).map((k, i) => {
        console.log('Key:', all[k]);
        const current = all[k];
        return <Route key={i} path={`${url}/${current.path}`} component={current.component}/>;
    });
    return (
        <div>
            <h1>This is the main test component</h1>
            <Link to={`${url}/test1`}>Test 1</Link>
            <Link to={`${url}/test2`}>Test 2</Link>
            <Link to={`${url}/test3`}>Test 3</Link>
            <Link to={`${url}/test4`}>Test 4</Link>
            {routes}
        </div>
    )
}
