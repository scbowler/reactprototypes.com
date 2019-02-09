import React from 'react';
import Intro from '../gettingStarted';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';
import Cc from '../../../code_component';
import Clock from './demo';
import examples from './examples';
import appRender1 from './images/appRender1.png';
import appRender2 from './images/appRender2.png';
import appRender3 from './images/appRender3.png';
import appRender4 from './images/appRender4.png';

export default function(){
    let fs = 1;
    return (
        <div>
            <Intro branch="redux-intro"/>
            <Card title="Overview" subtitle="What you'll be building in this prototype">
                <p>In the <b>React Redux Intro</b> you will be making a simple clock example that utilizes Redux to update every one second.</p>
                <ol>
                    <li><b>Related Slides:</b>
                        <ul>
                            <li><a href="https://docs.google.com/presentation/d/e/2PACX-1vQd840PKaSN9TqeVFT9K13S_gmKhN9Wcu62Yp1qvYVTM34QDsr3EI76AX3RHf7MNm7PSV_a5-5u-ImT/pub?start=false&loop=false&delayms=3000" target="_blank">React Redux Intro</a></li>
                        </ul>
                    </li>
                    <li><b>Feature Set 1:</b>
                        <ul>
                            <li>In the first feature set you will do all the necessary setup for Redux</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 2:</b>
                        <ul>
                            <li>In this feature set you will build the <Cc>Clock/</Cc> component to display the static time</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 3:</b>
                        <ul>
                            <li>In the final feature set you will utilize Redux to update the <Cc>Clock/</Cc> component every one sec so your clock is always displaying the current time</li>
                        </ul>
                    </li>
                    <li><b>Demo:</b></li>
                </ol>
                <Clock/>
            </Card>
            <Card title={fs++} subtitle="Setup Redux">
                <p>In your terminal do the following:</p>
                <ol>
                    <li>Verify you are in the <code>react-prototypes</code> directory</li>
                    <li>Use <code>npm</code> to install <code>redux</code> and <code>react-redux</code>
                        <ul>
                            <li><code>npm install --save redux react-redux</code></li>
                        </ul>
                    </li>
                </ol>
                <p>Add the following folders and files:</p>
                <ol>
                    <li>In the <code>src/</code> folder create a folder named <code>actions/</code></li>
                    <li>In the <code>src/actions/</code> folder create a file named <code>index.js</code></li>
                    <li>In the <code>src/</code> folder create a folder named <code>reducers</code></li>
                    <li>In the <code>src/reducers/</code> folder create a file named <code>index.js</code></li>
                    <li>In the <code>src/reducers/</code> folder create a second file named <code>clock_reducer.js</code></li>
                </ol>
                <p>In the <code>src/reducers/clock_reducer.js</code> file do the following:</p>
                <ol>
                    <li>Create a <code>const</code> named <code>DEFAULT_STATE</code> equal to an object with the following property:
                        <ul>
                            <li><code>time</code> set to <code>null</code></li>
                        </ul>
                        <Code {...examples.fs1e1}/>
                    </li>
                    <li><code>export default</code> an anonymous <code>function</code>. The function will have two parameters <code>state</code> and <code>action</code>
                        <Code {...examples.fs1e2}/>
                    </li>
                    <li>In the parameter list of the anonymous function have <code>state</code> default to <code>DEFAULT_STATE</code>
                        <Code {...examples.fs1e3}/>
                    </li>
                    <li>Inside the anonymous function create a <code>switch</code> statement based on <code>action.type</code>
                        <Code {...examples.fs1e4}/>
                    </li>
                    <li>Add the <code>default</code> case to the <code>switch</code> statement, have it <code>return</code> <code>state</code>
                        <Code {...examples.fs1e5}/>
                    </li>
                </ol>
                <Code {...examples.fs1e6} confirm/>
                <p>In the <code>src/reducers/index.js</code> file do the following:</p>
                <ol>
                    <li>Import <code>combineReducers</code> from <code>redux</code>
                        <Code {...examples.fs1e13}/>
                    </li>
                    <li>Import the <code>clockReducer</code> function from the <code>clock_reducer</code> file
                        <Code {...examples.fs1e14}/>
                    </li>
                    <li><code>export default</code> the result of calling <code>combineReducers</code>
                        <Code {...examples.fs1e15}/>
                    </li>
                    <li>Pass <code>combineReducers</code> an object as an argument, give the object the following property:
                        <ul>
                            <li><code>clock</code> set to <code>clockReducer</code></li>
                        </ul>
                        <Code {...examples.fs1e16}/>
                    </li>
                </ol>
                <Code {...examples.fs1e17} confirm/>
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Create a functional component</li>
                    <li>The component should <code>return</code> a <Cc>div</Cc> with a class of <code>container</code>
                        <Code {...examples.fs1e7}/>
                    </li>
                    <li>Inside the <Cc>div</Cc> add a <Cc>h1</Cc> with a class of <code>text-center</code> and any text you want
                        <Code {...examples.fs1e8}/>
                    </li>
                </ol>
                <Code {...examples.fs1e9} confirm/>
                <p>In the <code>src/index.js</code> file do the following:</p>
                <ol>
                    <li>Import the <Cc>App/</Cc> component</li>
                    <li>Replace the first argument of <code>ReactDOM.render</code> with <Cc>App/</Cc></li>
                </ol>
                <Code {...examples.fs1e10}/>
                <p>Test your code. You should now see the <Cc>h1</Cc> from the <Cc>App/</Cc> component rendered in the browser</p>
                <img src={appRender1} className="img-pop"/>
                <p className="mt-4">Still in <code>src/index.js</code> do the following:</p>
                <ol>
                    <li>Import the <code>Provider</code> component from <code>react-redux</code>
                        <Code {...examples.fs1e11}/>
                    </li>
                    <li>Import the <code>createStore</code> function from <code>redux</code>
                        <Code{...examples.fs1e12}/>
                    </li>
                    <li>Import the <code>rootReducer</code> from <code>src/reducers/index.js</code>
                        <Code {...examples.fs1e18}/>
                    </li>
                    <li>Wrap the first argument of <code>ReactDOM.render</code> with the <Cc>Provider</Cc> component
                        <Code {...examples.fs1e19}/>
                    </li>
                    <li>Give the <Cc>Provider</Cc> a <code>prop</code> of <code>store</code> set to <code>createStore(rootReducer)</code>
                        <Code {...examples.fs1e20}/>
                    </li>
                </ol>
                <Code {...examples.fs1e21} confirm/>
                <p>Test your code. In the browser nothing should have changed and you should have no errors in the console</p>
                <img src={appRender1} className="img-pop"/>
            </Card>
            <Card title={fs++} subtitle="Create the &lt;Clock/&gt; component">
                <p>In the <code>src/components/</code> folder create a file named <code>clock.js</code></p>
                <p>In the <code>src/components/clock.js</code> file do the following:</p>
                <ol>
                    <li>Create a class component that renders a <Cc>div</Cc> with the classes <code>text-center</code> and <code>mt-5</code>
                        <Code {...examples.fs2e1}/>
                    </li>
                    <li>Inside the <Cc>div</Cc> add a <Cc>h1</Cc> with some text inside of it
                        <Code {...examples.fs2e2}/>
                    </li>
                </ol>
                <Code {...examples.fs2e3} confirm/>
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Import the <Cc>Clock/</Cc> component</li>
                    <li>In the <code>return</code> of the <Cc>App/</Cc> component add the <Cc>Clock/</Cc> component below the <Cc>h1</Cc> element
                        <Code {...examples.fs2e4}/>
                    </li>
                </ol>
                <Code {...examples.fs2e5} confirm/>
                <p>Test your code. You should now see the text from the <Cc>Clock/</Cc> component in the browser</p>
                <img src={appRender2} className="img-pop"/>
                <p className="mt-4">In the <code>src/reducers/clock_reducer.js</code> do the following:</p>
                <ol>
                    <li>In the <code>DEFAULT_STATE</code> <code>const</code> set the <code>time</code> property to <code>new Date().toLocaleTimeString()</code>
                        <Code {...examples.fs2e6}/>
                    </li>
                </ol>
                <p>In the <code>src/components/clock.js</code> file do the following:</p>
                <ol>
                    <li>Import <code>connect</code> from <code>react-redux</code>
                        <Code {...examples.fs2e7}/>
                    </li>
                    <li>At the bottom of the file define the <code>mapStateToProps</code> function. The function has a single parameter, <code>state</code></li>
                    <li><code>mapStateToProps</code> should return an object with the following property
                        <ol>
                            <li><code>time</code> set to <code>state.clock.time</code></li>
                        </ol>
                        <Code {...examples.fs2e8}/>
                    </li>
                    <li>Update the <code>export default</code> statement to use <code>connect</code>
                        <ol>
                            <li>Remove <code>Clock</code></li>
                            <li>Add <code>connect()</code></li>
                            <li>Pass <code>connect</code> <code>mapStateToProps</code> as its first argument</li>
                            <li>Right now we don't have any action creators so we don't need to give <code>connect</code> a second argument</li>
                            <li>Invoke the returned function from <code>connect</code> and pass in an argument of <code>Clock</code></li>
                        </ol>
                        <Code {...examples.fs2e9}/>
                    </li>
                    <li>In the <code>return</code> of the <code>render</code> method remove the text from the <Cc>h1</Cc> element</li>
                    <li>In the now empty <Cc>h1</Cc> display the contents of <code>this.props.time</code>
                        <Code {...examples.fs2e10}/>
                    </li>
                </ol>
                <Code {...examples.fs2e11} confirm/>
                <p>After completing this feature set you should see the time displayed in the browser</p>
                <img src={appRender3} className="img-pop"/>
            </Card>
            <Card title={fs++} subtitle="Make the clock tick">
                <p>In the <code>src/actions/index.js</code> file do the following:</p>
                <ol>
                    <li><code>export</code> a <code>function</code> named <code>updateTime</code>
                        <ul>
                            <li><code>updateTime</code> will have no parameters</li>
                        </ul>
                        <Code {...examples.fs3e1}/>
                    </li>
                    <li><code>updateTime</code> should <code>return</code> an object with the following properties:
                        <ol>
                            <li><code>type</code> set to <code>'UPDATE_TIME'</code></li>
                            <li><code>payload</code> set to <code>new Date().toLocaleTimeString()</code></li>
                        </ol>
                        <Code {...examples.fs3e2}/>
                    </li>
                </ol>
                <Code {...examples.fs3e3} confirm/>
                <p>In the <code>src/reducers/clock_reducer.js</code> do the following</p>
                <ol>
                    <li>In the <code>switch</code> statement add a <code>case</code> for <code>'UPDATE_TIME'</code>
                        <Code {...examples.fs3e4}/>
                    </li>
                    <li>Have the new <code>case</code> <code>return</code> a new object with the following property:
                        <ol>
                            <li><code>time</code> set to <code>new Date().toLocaleTimeString()</code></li>
                        </ol>
                        <Code {...examples.fs3e5}/>
                    </li>
                </ol>
                <Code {...examples.fs3e6} confirm/>
                <p>In the <code>src/components/clock.js</code> file do the following:</p>
                <ol>
                    <li>Import <code>updateTime</code> from <code>src/actions/index.js</code>
                        <Code {...examples.fs3e7}/>
                    </li>
                    <li>At the bottom of the file add a second argument to <code>connect</code> in the form of an object with the following property:
                        <ol>
                            <li><code>updateTime</code> set to <code>updateTime</code></li>
                        </ol>
                        <Code {...examples.fs3e8}/>
                        <ol start="2">
                            <li>You can also use ES6 object structuring</li>
                        </ol>
                        <Code {...examples.fs3e9}/>
                    </li>
                    <li>Inside the <code>Clock</code> class add a <code>componentDidMount</code> method
                        <Code {...examples.fs3e10}/>
                    </li>
                    <li>Use <code>setInterval</code> to call <code>this.props.updateTime</code> every 1 second
                        <Code {...examples.fs3e11}/>
                    </li>
                </ol>
                <Code {...examples.fs3e12} confirm/>
                <p>After completing this feature set you should see your clock updating every 1 second</p>
                <img src={appRender4} className="img-pop"/>
            </Card>
        </div>
    )
}
