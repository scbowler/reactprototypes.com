import React, { Component } from 'react';
import '../assets/css/confirm.css'

class Confirm extends Component {
    constructor(props){
        super(props);

        this.defaults = {
            title: 'Are You Sure?',
            message: <div className="text-center"><p>You should only view this example if you are hopelessly stuck</p><p> - OR - </p><p>You have completed the steps up to this point and you want to verify your work.</p></div>
        }
    }

    handleConfirm(){
        this.props.onClick();
        this.props.toggleModal();
    }

    render(){
        const { showModal, message, title, toggleModal } = this.props;
        if(showModal){
            return (
                <div className="confirm-modal">
                    <div className="confirm-modal-content">
                        <h2>{title ? title : this.defaults.title}</h2>
                        <hr className="my-3"/>
                        {message ? message : this.defaults.message}
                        <button onClick={() => toggleModal()} className="btn btn-outline-danger">Cancel</button>
                        <button onClick={() => this.handleConfirm()} className="btn btn-outline-success mr-2">Confirm</button>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default Confirm;
