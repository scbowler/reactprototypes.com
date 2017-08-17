import React from 'react';

export default props => {
    
    const { title, subtitle, children, optional } = props;
    
    return (
        <div className="card">
            <div className="card-block">
                <h2 className="card-title">{isNaN(title) ? title : `Feature Set ${title}`} <span style={{color: '#ccc'}}>{optional ? '(Optional)' : ''}</span></h2>
                <h5 className="card-subtitle mb-3 text-muted">{subtitle}</h5>
                <div>{children}</div>
            </div>
        </div>
    )
}