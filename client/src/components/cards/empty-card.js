import React from 'react';

const styles = {
    backgroundColor: 'rgba(255, 255, 255, .4)'
}

export default (props) => (
    <div className="card" style={styles}>
        <div className="card-block">
            <h4 className="card-title">{props.title}</h4>
        </div>
    </div>
)
