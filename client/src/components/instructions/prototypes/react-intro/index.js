import React from 'react';
import Card from '../../../cards/instruction-card';
import reactPrototypesSS from './imgs/react-prototypes-ss.png';
import example from './imgs/example-output.png';

export default function(){ 
    return (
        <div>
            <Card title="Overview" subtitle="What you'll be building in this prototype">
                <p>The react-intro prototype is intended to help you set up the react-prototypes repo and give a gentle introduction to creating dynamic output using JSX. It is recommended to review the <a href="https://docs.google.com/presentation/d/e/2PACX-1vRaSQHssp3RZraQIwB9XGdpzVnHvtsEyNke5IXpk0F7PCJpB-rBK2vN2KVLY7_DC9HA4BZ2CFrfr8BU/pub?start=false&loop=false&delayms=3000" target="_blank">React Intro</a> slides before continuing if you have not already.</p>
                <ol>
                    <li><b>Related Slides</b>
                        <ul>
                            <li><a href="https://docs.google.com/presentation/d/e/2PACX-1vRaSQHssp3RZraQIwB9XGdpzVnHvtsEyNke5IXpk0F7PCJpB-rBK2vN2KVLY7_DC9HA4BZ2CFrfr8BU/pub?start=false&loop=false&delayms=3000" target="_blank">React Intro</a></li>
                        </ul>
                    </li>
                    <li><b>Feature Set 1</b>
                        <ul>
                            <li>Will walk you through the initial setup of the <code>react-prototypes</code> repo on your local system. You only have to do this setup one time, all other prototypes will use the same project.</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 2</b>
                        <ul>
                            <li>Utilizes some basic JS and JSX to create the below output
                                <div>
                                    <img src={example} className="img-pop"/>
                                </div>
                            </li>
                            <li>The greeting is dynamically created based on an user object</li>
                            <li>The "<i>lucky number</i>" is a randomly generated number between 1-1000</li>
                        </ul>
                    </li>
                </ol>
            </Card>
            <Card title="Feature Set 1" subtitle="Set up the React prototypes repository">
                <ol>
                    <li>Fork the react-prototypes repo
                        <ol>
                            <li>Visit the <a href="https://github.com/Learning-Fuze/react-prototypes" target="_blank">React Prototypes Repo</a></li>
                            <li>Fork the repo to your Github account</li>
                        </ol>
                    </li>
                    <li>Clone your forked version of the react-prototypes repo
                        <ol>
                            <li>In your <code>LFZ</code> folder create a new folder called <code>frontend</code></li>
                            <li>Navigate to the newly created <code>frontend</code> folder in your terminal</li>
                            <li>Run the following command in your terminal to clone the react-prototypes repo:
                                <ul><li><code>git clone https://github.com/[your username]/react-prototypes.git</code></li></ul>
                            </li>
                        </ol>
                    </li>
                    <li>Change directories into <code>react-prototypes</code> (<i>in your terminal</i>)
                        <ul><li><code>cd react-prototypes</code></li></ul>
                    </li>
                    <li>Install dependencies
                        <ul>
                            <li><code>npm install</code></li>
                            <li><i>Depending on your computer this may take a few minutes</i></li>
                        </ul>
                    </li>
                    <li>Create a new branch for this prototype
                        <ol>
                            <li>The branch name should be <code>react-intro</code></li>
                            <li><code>git checkout -b react-intro</code></li>
                        </ol>
                    </li>
                    <li>Start the dev server for react
                        <ol>
                            <li><code>npm start</code></li>
                        </ol>
                    </li>
                    <li>Open your browser to <code>localhost:3000</code>
                        <ul>
                            <li>If all went well you should see the following in your browser
                                <div><img src={reactPrototypesSS} className="img-pop"/></div>
                            </li>
                        </ul>
                    </li>
                </ol>
            </Card>
            <Card title="Feature Set 2" subtitle="Getting started with JSX">
                <p>In your <code>src/index.js</code> file do the following:</p>
                <ol>
                    <li>Create a function called <code>luckyNumber</code>. The function should:
                        <ol>
                            <li>Takes no parameters</li>
                            <li>Return a random number between <code>1-1000</code></li>
                        </ol>
                    </li>
                    <li>Create a function called <code>greeting</code>. The function should:
                        <ol>
                            <li>Take a single parameter
                                <ul>
                                    <li>The parameter will be a user object that has a property of <code>name</code> and a property of <code>luckyNumber</code> </li>
                                </ul>
                            </li>
                            <li>Return a <code>&lt;div&gt;</code> that has a class of <code>container</code> and two children elements, a <code>&lt;h1&gt;</code> and a <code>&lt;h2&gt;</code>
                                <ul>
                                    <li>The <code>&lt;h1&gt;</code> should contain a greeting to the <code>user</code></li>
                                    <li>The <code>&lt;h2&gt;</code> should have a class of <code>text-muted</code> and contain a sentence that displays the user's <code>luckyNumber</code></li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                    <li>Create an <code>user</code> object. The object should:
                        <ol>
                            <li>Have a property of <code>name</code> set to a <code>string</code></li>
                            <li>Have a property of <code>luckyNumber</code> set to a random number using the <code>luckyNumber()</code> function</li>
                        </ol>
                    </li>
                    <li>Use the <code>greeting()</code> function and the <code>user</code> object to display a greeting on to your webpage
                        <ol>
                            <li>In the <code>ReactDOM.render()</code> method delete the <code>&lt;h1&gt;</code> that is the first parameter</li>
                            <li>Call the <code>greeting()</code> function and pass in your <code>user</code> object where you just deleted the <code>&lt;h1&gt;</code> from</li>
                        </ol>
                    </li>
                    <li>Check your browser to verify everything worked as expected
                        <ul>
                            <li>You should see something along the lines of:
                                <div>
                                    <img src={example} className="img-pop"/>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ol>
            </Card>
        </div>
    )
}
