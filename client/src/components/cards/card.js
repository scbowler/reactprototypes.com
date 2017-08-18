import React from 'react';
import { Link } from 'react-router-dom';
import { RGBA } from '../../helpers';
import '../../assets/css/card.css';

function Card(props){

    const styles = {
        backgroundColor: RGBA('white', .4)
    }

    const { title, subtitle, text, badge } = props.item;
    
    return (
        <div className="card" style={styles}>
            <div className="card-block">
                <h4 className="card-title">{title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className="card-text">{text}</p>
                <Link className="btn btn-outline-white" to={props.to} >View Instructions</Link>
            </div>
            {addBadge(badge)}
        </div>
    )
}

export default Card;

function addBadge(badge){
    const type = typeof badge;

    const { color, opacity, text } = type === 'object' ? badge : { color: 'green', opacity: .5, text: 'New!' };
    const styles = {backgroundColor: RGBA(color, opacity)}
    
    return type === 'object' && color && opacity && text 
        ? <div className="card-badge" style={styles}>{text}</div>
        : type === 'string'
            ? <div className="card-badge" style={styles}>{badge ? badge : text}</div>
            : null
}
