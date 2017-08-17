import React, { Component } from 'react';

class FormatTime extends Component {
    constructor(props){
        super(props);

        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0
        }

        this.timerStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            width: '383px'
        }
    }

    componentWillReceiveProps(nextProps){
        const { elapsed } = nextProps;

        const sec = elapsed / 1000;
        const min = sec / 60;

        this.setState({
            hour: Math.floor(min / 60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(elapsed % 100)
        });
    }

    leadingZero(num){
        return num < 10 ? `0${num}` : num;
    }

    trailingZero(num){
        return num < 10 ? `${num}0` : num; 
    }

    render(){
        const { timerStyle, leadingZero, trailingZero, state: { hour, min, sec, ms } } = this;

        return (
            <div style={timerStyle}>{leadingZero(hour)}:{leadingZero(min)}:{leadingZero(sec)}.{trailingZero(ms)}</div>
        )
    }
}

export default FormatTime;
