import React from 'react';

export default props => {
    const { info } = props;
    const {title, rel, type, href} = info.link[1].attributes;

    return (
        <div className="card text-center">
            <img className="card-img-top mt-2" src={info['im:image'][2].label}/>
            <div className="card-block">
                <h4 className="card-title">{info['im:name'].label}</h4>
                <p className="card-text">{info.summary.label}</p>
                <a title={title} rel={type} type={type} href={href} target="_blank" className="btn btn-outline-primary">View iTunes Preview</a>
            </div>
            <div className="card-footer">
                <small className="text-muted">{info.rights? info.rights.label : `Copyright Unknown`}</small>
            </div>
        </div>
    )
}
