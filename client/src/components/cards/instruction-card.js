import React from 'react';

export default props => (
    <div className="card">
        <div className="card-block">
            <h2 className="card-title">{props.title}</h2>
            <h5 className="card-subtitle mb-3 text-muted">{props.subtitle}</h5>
            <div>{props.children}</div>
        </div>
    </div>
)
