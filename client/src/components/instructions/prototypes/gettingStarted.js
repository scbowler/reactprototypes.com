import React, { Component } from 'react';
import Card from '../../cards/instruction-card';

class GettingStarted extends Component {
    constructor(props){
        super(props);

        this.state = {
            simpleView: true
        }

        this.toggleView = this.toggleView.bind(this);
    }

    toggleView(){
        this.setState({
            simpleView: !this.state.simpleView
        });
    }

    render(){
        const {branch} = this.props;
        if(this.state.simpleView){
            return (
                <Card title="Getting Started" subtitle="Do this before starting the prototype">
                    <ol>
                        <li>Navigate to your <code>react-prototypes</code> folder in your terminal</li>
                        <li>Switch to your <b>clean</b> <code>master</code> branch</li>
                        <li>Create a new branch <code>{branch}</code>
                            <ul><li><code>git checkout -b {branch}</code></li></ul>
                        </li>
                        <li>Start the React dev server
                            <ul><li><code>npm start</code></li></ul>
                        </li>
                        <li>You're ready to start the prototype!</li>
                    </ol>
                    <button onClick={this.toggleView} className="btn btn-outline-secondary">Show Detailed Setup Instructions</button>
                </Card>
            )
        }
        return (
            <Card title="Getting Started" subtitle="Do this before starting the prototype">
                <ol>
                    <li>Navigate to your <code>react-prototypes</code> folder in your terminal</li>
                    <li>Check your repos status
                        <ol>
                            <li><code>git status</code></li>
                            <li>If you have changes not staged for commit and/or untracked files:
                                <ol>
                                    <li>If you are on the <code>master</code> branch create a new branch, otherwise go to the next step
                                        <ul><li><code>git checkout -b [a fitting branch name]</code></li></ul>
                                    </li>
                                    <li><code>git add .</code></li>
                                    <li><code>git commit -m "A fitting commit message"</code></li>
                                    <li><b>Optional:</b> Push your code to Github
                                        <ul><li><code>git push origin [branch-name]</code></li></ul>
                                    </li>
                                    <li><code>git checkout master</code></li>
                                    <li>Go to step <b>3.</b></li>
                                </ol>
                            </li>
                            <li>If you are <b>NOT</b> on <code>master</code> and there is nothing to commit:
                                <ol>
                                    <li>Switch to the <code>master</code> branch
                                        <ul><li><code>git checkout master</code></li></ul>
                                    </li>
                                    <li>Go to step <b>3.</b></li>
                                </ol>
                            </li>
                            <li>If you are on the <code>master</code> branch and there is nothing to commit:
                                <ol>
                                    <li>You are good</li>
                                    <li>Go to step <b>3.</b></li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li>You should be on the <code>master</code> branch by this step
                        <ol>
                            <li>If you are not on the <code>master</code> branch return to step <b>2.</b></li>
                            <li>Your <code>master</code> branch should be unchanged from its original version</li>
                            <li>If your <code>master</code> branch is not "clean", you can't get to your <code>master</code> branch or any other issue, <b>STOP</b> and ask for help before continuing</li>
                        </ol>
                    </li>
                    <li>Create a new branch <code>{branch}</code>
                        <ul><li><code>git checkout -b {branch}</code></li></ul>
                    </li>
                    <li>Start the React dev server
                        <ul><li><code>npm start</code></li></ul>
                    </li>
                    <li>You're ready to start the prototype!</li>
                </ol>
                <button onClick={this.toggleView} className="btn btn-outline-secondary">Show Less Detailed Instructions</button>
            </Card>
        )
    }
}

export default GettingStarted;
