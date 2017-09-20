import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTime } from '../../../../../actions';

class Clock extends Component {
    componentWillMount(){
        this.si = setInterval(this.props.updateTime, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.si);
    }

    render(){
        return (
            <div className="text-center">
                <h1>Redux Clock!</h1>
                <h1 className="mt-5">{this.props.time}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        time: state.reduxIntro.time
    }
}

export default connect(mapStateToProps, {updateTime})(Clock);
