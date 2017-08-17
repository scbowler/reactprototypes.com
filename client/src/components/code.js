import React, { Component } from 'react';
import Confirm from './confirm';
import '../assets/css/code.css';

class Code extends Component {
    constructor(props){
        super(props);

        this.state = {
            showCode: false,
            showModal: false
        }
    }

    toggleCode(){
        
        const { showCode, showModal } = this.state;
        
        if(this.props.confirm && !showModal && !showCode){
            this.toggleModal();
            return;
        }
        
        this.setState({ showCode: !showCode });
    }

    confirm(){
        this.setState({ showCode: true});
    }

    toggleModal(){
        const { showModal } = this.state;
        this.setState({ showModal: !showModal });
    }

    makeHtmlObj(html){
        return {__html: html};
    }

    render(){
        if(this.props.noHide){
            return <div className="show mt-2" dangerouslySetInnerHTML={this.makeHtmlObj(this.props.html)}/>
        }
        const { text, title, message } = this.props;
        const { showCode, showModal } = this.state;

        const btnText = text ? text : {show: 'Show hint', hide: 'Hide Hint'};
        return (
            <div className="code-hint">
                <button className={`my-2 btn btn-sm btn-outline-${showCode ? 'warning' : 'secondary' }`} onClick={() => this.toggleCode()}>{showCode ? btnText.hide : btnText.show}</button>
                <div className={`code-body ${showCode ? 'show' : ''}`} dangerouslySetInnerHTML={this.makeHtmlObj(this.props.html)} />
                <Confirm title={title} message={message} showModal={showModal} toggleModal={() => this.toggleModal()} onClick={() => this.confirm()}/>
            </div>
        )
    }
}

export default Code;
