import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActive } from '../actions';
import '../assets/css/instructions.css';

class Instructions extends Component {

    componentWillMount(){
        window.scrollTo(0, 0);
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
            <div className="instruction-body">
                <h1>Project <span>{title}</span></h1>
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-outline-white mb-2" to="/projects">Go Back</Link>
                </div>
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
