import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActive } from '../actions';

class Instructions extends Component {

    componentWillMount(){
        this.props.setActive(this.props.match.params.name);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.redirect){
            this.props.history.goBack();
        }
    }

    render(){
        if(!this.props.current){
            return <div>Loading...</div>
        }

        const { title, component } = this.props.current;
        return (
            <div>
                <h1>Prototypes {title}</h1>
                <Link to="/prototypes">&lt;&lt; Go Back</Link>
                {component()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        current: state.inst.current,
        redirect: state.inst.redirect
    }
}

export default connect(mapStateToProps, {setActive})(Instructions);
