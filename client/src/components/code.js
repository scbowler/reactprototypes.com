import React, { Component } from 'react';
import '../assets/css/code.css';

class Code extends Component {
    constructor(props){
        super(props);

        this.state = {
            showCode: false
        }
    }

    toggleCode(){
        const { showCode } = this.state;
        this.setState({ showCode: !showCode });
    }

    makeHtmlObj(html){
        return {__html: html};
    }

    render(){
        if(this.props.noHide){
            return <div className="show mt-2" dangerouslySetInnerHTML={this.makeHtmlObj(this.props.html)}/>
        }
        const { text } = this.props;
        const { showCode } = this.state;

        const btnText = text ? text : {show: 'Show hint', hide: 'Hide Hint'};
        return (
            <div className="code-hint">
                <button className={`my-2 btn btn-sm btn-outline-${showCode ? 'warning' : 'secondary' }`} onClick={() => this.toggleCode()}>{showCode ? btnText.hide : btnText.show}</button>
                <div className={`code-body ${showCode ? 'show' : ''}`} dangerouslySetInnerHTML={this.makeHtmlObj(this.props.html)} />
            </div>
        )
    }
}

export default Code;
