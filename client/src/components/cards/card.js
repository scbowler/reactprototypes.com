import React from 'react';
import { Link } from 'react-router-dom';

function Card(props){
    const styles = {
        backgroundColor: 'rgba(255, 255, 255, .4)'
    }

    const { title, subtitle, text} = props.item;
    
    return (
        <div className="card" style={styles}>
            <div className="card-block">
                <h4 className="card-title">{title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className="card-text">{text}</p>
                <Link to={props.to} >View Instructions</Link>
            </div>
        </div>
    )
}

export default Card;
