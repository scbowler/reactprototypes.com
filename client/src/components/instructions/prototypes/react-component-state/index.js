import React from 'react';
import Intro from '../gettingStarted';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';
import Stopwatch from './stopwatch';
import examples from './examples.js';
import appRender1 from './imgs/appRender1.png';
import appRender2 from './imgs/appRender2.png';
import appRender3 from './imgs/appRender3.png';
import appRender4_1 from './imgs/appRender4.1.png';
import appRender4_2 from './imgs/appRender4.2.png';
import appRender5_1 from './imgs/appRender5.1.png';
import appRender5_2 from './imgs/appRender5.2.png';
import appRender6 from './imgs/appRender6.png';
import appRender7 from './imgs/appRender7.png';
import appRender8 from './imgs/appRender8.png';
import appRender9 from './imgs/appRender9.png';
import appRender10 from './imgs/appRender10.png';
import appRender11 from './imgs/appRender11.png';
import appRender12_1 from './imgs/appRender12.1.png';
import appRender12_2 from './imgs/appRender12.2.png';
import appRender13_1 from './imgs/appRender13.1.png';
import appRender13_2 from './imgs/appRender13.2.png';
import error1 from './imgs/error1.png';

export default function(){ 
    return (
        <div>
            <Intro branch="component-state"/>
            <Card title="Overview" subtitle="What you'll be building in this prototype">
                <p>In the <b>class components with state</b> prototype you will be building a fully functional stopwatch. It will include a start button, stop button, and reset button. We will also be utilizing some Bootstrap 4 classes to add some minimal styling</p>
                <ol>
                    <li><b>Related Slides</b>
                        <ul>
                            <li><a href="https://docs.google.com/presentation/d/1F6rdoAxBdRnVR_1u4vBDvQDcWml25vSn-Slr6lv0Ajo/pub?start=false&loop=false&delayms=3000" target="_blank">React Component State</a></li>
                        </ul>
                    </li>
                    <li><b>Feature Set 1</b>
                        <ul>
                            <li>Create the <code>&lt;App&gt;</code> component and the basic setup of the app to get you started.</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 2</b>
                        <ul>
                            <li>Build and test you first <code>class</code> component <code>&lt;Stopwatch&gt;</code>.</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 3</b>
                        <ul>
                            <li>You will add some state to the <code>&lt;Stopwatch&gt;</code> component and build out the base functionality of the stopwatch. By the end of this feature set you will be displaying the amount of milliseconds that have elapsed since the start button was clicked.</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 4</b>
                        <ul>
                            <li>Create a new class component <code>&lt;FormatTime&gt;</code> that takes in elapsed milliseconds as a prop then uses math to calculate how many hours, minutes, and seconds have elapsed.</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 5</b>
                        <ul>
                            <li>You will be utilizing Bootstrap 4 classes to style the stopwatch along with a small bit of custom CSS</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 6</b>
                        <ul>
                            <li>This one is optional but in it you will add some additional formatting by adding leading and trailing zeros</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 7</b>
                        <ul>
                            <li>This feature set is also optional. Here you will fix an issue with the start button to make it behave in a more appropriate and expected manor</li>
                        </ul>
                    </li>
                    <li><b>Extras</b>
                        <ul>
                            <li>This section has a list of ideas that you can do to improve / change your stopwatch</li>
                        </ul>
                    </li>
                    <li><b>Demo:</b>
                        <h1 className="text-center">Stopwatch</h1>
                        <Stopwatch/>
                    </li>
                </ol>
            </Card>
            <Card title="1" subtitle="Set up the &lt;App/&gt; component... Yes again">
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Import React
                        <Code html={examples.importReact} noHide/>
                    </li>
                    <li>Create a functional component called <code>App</code> that returns the following
                        <ol>
                            <li>A <code>&lt;div&gt;</code> with a <code>className</code> of <code>container</code></li>
                            <li>Inside the <code>&lt;div&gt;</code> should be a <code>&lt;h1&gt;</code> with a <code>className</code> of <code>text-center</code></li>
                            <li>The <code>&lt;h1&gt;</code> should contain the text "<i>Stopwatch</i>"</li>
                        </ol>
                        <Code html={examples.example1} />
                    </li>
                </ol>
                <p>In the <code>src/index.js</code> file do the following:</p>
                <ol>
                    <li>import the newly created <code>App</code> component
                        <Code html={examples.importApp} noHide/>
                    </li>
                    <li>Replace the first parameter of the <code>render</code> method with the <code>&lt;App/&gt;</code> component using <b>JSX</b>
                        <Code html={examples.example2}/>
                    </li>
                </ol>
                <p>After completing the above steps you should see the following in the browser:</p>
                <div className="text-center">
                    <img src={appRender1} className="img-pop"/>
                </div>
            </Card>
            <Card title="2" subtitle="Build your first class component: &lt;Stopwatch/&gt;">
                <ol>
                    <li>In the <code>src/components</code> folder create a new file called <code>stopwatch.js</code></li>
                </ol>
                <p>In the <code>src/components/stopwatch.js</code> file do the following:</p>
                <ol>
                    <li>To start we will create a class component that will output some text</li>
                    <li>Import React and Component (<i>remember put Component inside</i> &#123; &#125; )
                        <Code html={examples.importReactComponent} noHide/>
                    </li>
                    <li>Create a <i>class</i> named <code>Stopwatch</code> that <code>extends</code> <code>Component</code></li>
                    <li>Add a render method to the <code>Stopwatch</code> class</li>
                    <li>The render method should return a <code>&lt;div&gt;</code> with a <code>&lt;h3&gt;</code> inside that contains the text: "<i>This will be the stopwatch</i>"
                        <ul>
                            <li><b>NOTE:</b> We are just adding some temporary content so we can test the component</li>
                        </ul>
                    </li>
                    <li>Lastly we need to export the <code>Stopwatch</code> component
                        <Code html={examples.exportStopwatch} noHide/>
                    </li>
                </ol>
                <Code html={examples.example3} text={{show: 'View stopwatch.js Example', hide: 'Hide Example'}} confirm/>
                <p>In the <code>src/components/app.js</code> do the following:</p>
                <ol>
                    <li>Import the <code>Stopwatch</code> component
                        <Code html={examples.importStopwatch} noHide/>
                    </li>
                    <li>Add the <code>&lt;Stopwatch&gt;</code> component into the <code>&lt;App&gt;</code> component below the <code>&lt;h1&gt;</code> element</li>
                </ol>
                <Code html={examples.example4} text={{show: 'View app.js Example', hide: 'Hide Example'}} confirm/>
                <p>After completing the above you should see the following in the browser:</p>
                <img src={appRender2} className="img-pop"/>
            </Card>
            <Card title="3" subtitle="Add state to count the milliseconds">
                <p>To create a stopwatch (<i>a timer that counts up from zero</i>) the <code>&lt;Stopwatch&gt;</code> component will need to know a few things. Firstly the component will need to know if it is <code>running</code> or <code>stopped</code>. Next it needs to know how much time has passed since the timer was started so it'll need to know when it was started and how much time has elapsed. For the component to know all these things we will store the information into <code>state</code>.</p>
                <p>We will start with adding a <code>constructor</code> method to the <code>&lt;Stopwatch&gt;</code> component. We will add three properties to state: <code>status</code>, <code>start</code>, and <code>elapsed</code></p>
                <p>In the <code>src/components/stopwatch.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>Stopwatch</code> class create a <code>constructor</code> method
                        <ol>
                            <li>Add <code>props</code> as a parameter</li>
                            <li>Call <code>super()</code> and pass it <code>props</code></li>
                        </ol>
                        <Code html={examples.example5}/>
                    </li>
                    <li>Create the initial <code>state</code> object within the <code>constructor</code> method. It should have three properties:
                        <ol>
                            <li><code>status</code> set to <code>'stopped'</code></li>
                            <li><code>start</code> set to <code>null</code></li>
                            <li><code>elapsed</code> set to <code>0</code></li>
                        </ol>
                        <Code html={examples.example6}/>
                    </li>
                    <li>In the <code>render</code> method use destructuring to create constants for <code>elapsed</code> and <code>status</code> from <code>state</code>
                        <Code html={examples.example7}/>
                    </li>
                    <li>Still in the <code>render</code> method, in the <code>return</code>:
                        <ol>
                            <li>Delete the <code>&lt;h3&gt;</code></li>
                            <li>Add a <code>&lt;h1&gt;</code> that displays the value of the <code>elapsed</code> constant</li>
                            <li>Below the <code>&lt;h1&gt;</code> add a <code>&lt;p&gt;</code> that displays the value of the <code>status</code> constant</li>
                        </ol>
                        <Code html={examples.example8}/>
                    </li>
                    <li>Check your browser, you should see something that resembles this:
                        <img src={appRender3} className="img-pop"/>
                        <div className="mt-3">If you are stuck:</div>
                        <Code html={examples.example9} text={{show: 'Show stopwatch.js Example', hide: 'Hide Example'}} confirm/>
                    </li>
                </ol>
                <p>Next we will add a couple methods, one to <code>start</code> the timer and one to <code>stop</code> the timer.</p>
                <p><b>NOTE:</b> Although we are making a <code>start</code> method we still wont have an <code>update</code> method so the timer will not work yet.</p>
                <ol start="6">
                    <li>In the <code>Stopwatch</code> class create a new method called <code>start</code></li>
                    <li>In the <code>start</code> method update the state using <code>this.setState</code>
                        <ol>
                            <li><code>status</code> set to <code>'running'</code></li>
                            <li><code>start</code> set to a new timestamp using <code>new Date().getTime()</code></li>
                        </ol>
                        <Code html={examples.example10}/>
                    </li>
                    <li>In the <code>Stopwatch</code> class create a new method called <code>stop</code></li>
                    <li>In the <code>stop</code> method update the state using <code>this.setState</code>
                        <ol>
                            <li><code>status</code> set to <code>'stopped'</code></li>
                        </ol>
                        <Code html={examples.example11}/>
                    </li>
                    <li>In the render method we are going to add two buttons below the <code>&lt;p&gt;</code>
                        <ol>
                            <li>The first button should say <code>Start</code> and call the <code>start</code> method <i>on click</i>
                                <Code html={examples.example12} noHide/>
                            </li>
                            <li>The second button should say <code>Stop</code> and call the <code>stop</code> method <i>on click</i></li>
                        </ol>
                    </li>
                    <li>In the browser test your buttons, make sure you have your console open
                        <ul>
                            <li>The buttons wont work and you should see an error like this in your console:
                                <img src={error1} className="img-pop"/>
                            </li>
                            <li>The error happens because the <code>start</code> and <code>stop</code> methods have no context for what <code>this</code> is because they are being called through <code>onClick</code>. There are a couple different ways to solve this problem, we are going to use <code>bind</code> to fix it.</li>
                        </ul>
                    </li>
                    <li>In the <code>constructor</code> method <code>bind</code> <code>this</code> to the <code>start</code> method
                        <Code html={examples.example13} noHide/>
                    </li>
                    <li>In the <code>constructor</code> method <code>bind</code> <code>this</code> to the <code>stop</code> method</li>
                    <li>Now that both methods know what <code>this</code> is, the buttons should work</li>
                    <li>In the browser try clicking the <code>start</code> button. You should see the status change on the screen
                        <img src={appRender4_1} className="img-pop"/>
                        <hr className="mt-4" />
                        <p>After clicking the <code>stop</code> button the status should change back to <code>'stopped'</code></p>
                        <img src={appRender4_2} className="img-pop"/>
                    </li>
                </ol>
                <Code html={examples.example14} text={{show: 'The code so far', hide: 'Hide the code'}} confirm />
                <p>At this point we are able to "start" and "stop" our timer, however it never updates. To get the timer to update we need to add an <code>update</code> method</p>
                <ol start="16">
                    <li>In the <code>Stopwatch</code> class create a new method called <code>update</code></li>
                    <li>In the <code>update method do the following:</code>
                        <ol>
                            <li>Use destructuring to create variables for <code>status</code> and <code>start</code> from <code>this.state</code>
                                <Code html={examples.example15}/>
                            </li>
                            <li>Create an <code>if</code> statement that checks if <code>status</code> is equal to <code>'running'</code>
                                <Code html={examples.example16}/>
                            </li>
                            <li>In the <code>if</code> statement update <code>elapsed</code> in the state using <code>this.setState</code>
                                <ul>
                                    <li><code>elapsed</code> set to <code>new Date().getTime() - start</code></li>
                                    <li>Elapsed will now hold the number of milliseconds that have passed since the start button was pressed. The current time subtracted from when the timer was started gives us the amount of time that has passed</li>
                                </ul>
                                <Code html={examples.example17}/>
                            </li>
                            <li>Still inside the <code>if</code> statement we need to use a <code>setTimeout</code> to call the <code>update</code> method again after <code>10ms</code>
                                <Code html={examples.example18}/>
                            </li>
                        </ol>
                        <p>The <code>update</code> method checks to see if the timer is still <code>'running'</code> and if it is it updates <code>elapsed</code> in the state then recalls itself after <code>10ms</code>. If the <code>status</code> is <b>not</b> <code>'running'</code> then the timer will stop updating, effectively stopping the timer</p>
                        <Code html={examples.example19} text={{show: 'View completed update method code', hide: 'Hide update method code'}} confirm/>
                    </li>
                    <li>For <code>update</code> to work correctly when being called from <code>setTimeout</code> we need to <code>bind</code> <code>this</code> to the <code>update</code> method in the <code>constructor</code>. The same way we already did with <code>start</code> and <code>stop</code>
                        <Code html={examples.example20}/>
                    </li>
                    <li>At this point our <code>update</code> method is complete but if you try to run the code nothing happens. This is because we are never calling <code>update</code> to start the cycle of self updating. To fix this we can call <code>update</code> at the end of the <code>start</code> method
                        <ul>
                            <li>At the end of the <code>start</code> method use a <code>setTimeout</code> to call the <code>update</code> method after <code>10ms</code>. The same as we did in the <code>update</code> method earlier</li>
                        </ul>
                        <Code html={examples.example18}/>
                    </li>
                    <li>Test your code!
                        <p>At this point when you click on the <code>start</code> button you should see the numbers quickly count up.</p>
                        <img src={appRender5_1} className="img-pop"/>
                        <hr className="mt-4"/>
                        <p>When you click the <code>stop</code> button the numbers should stop counting up.</p>
                        <img src={appRender5_2} className="img-pop"/>
                    </li>
                    <li>The last thing we need to do for this feature set is add a reset button. Within the <code>Stopwatch</code> class add a method called <code>reset</code></li>
                    <li>In the <code>reset</code> method do the following:
                        <ol>
                            <li>Use <code>this.setState</code> to set all three properties in state to their original values
                                <ul>
                                    <li><code>status</code> set to <code>'stopped'</code></li>
                                    <li><code>start</code> set to <code>null</code></li>
                                    <li><code>elapsed</code> set to <code>0</code></li>
                                </ul>
                            </li>
                        </ol>
                        <Code html={examples.example21} text={{show: 'View completed reset method code', hide: 'Hide reset method code'}} confirm/>
                    </li>
                    <li>In the <code>constructor</code> method <code>bind</code> <code>this</code> to the <code>reset</code> method. The same as we have done with the other three methods: <code>start</code>, <code>stop</code>, and <code>update</code></li>
                    <li>In the <code>render</code> method add a third button that says "Reset" and calls the <code>reset</code> method</li>
                    <li>If all went well you should now have a "Reset" button that when pressed will set the displayed number back to <code>0</code> and if the timer is running it will stop
                        <img src={appRender6} className="img-pop mt-3"/>
                    </li>
                </ol>
                <Code html={examples.example22} text={{show: 'View complete stopwatch.js example', hide: 'Hide Example'}} confirm/>
            </Card>
            <Card title="4" subtitle="Format the time... there will be math!">
                <p>As it stands now our timer output is in milliseconds and is not very human readable. We want to take the milliseconds and convert it to something that is actually useful, something like <code>0:0:0.0</code> which translates to <code>hour:min:sec.ms</code></p>
                <p>We will create a new Component that will handle this conversion for us</p>
                <ol>
                    <li>In the <code>src/components/</code> folder create a new file named <code>format_time.js</code></li>
                </ol>
                <p>In the <code>src/components/format_time.js</code> file do the following:</p>
                <ol>
                    <li>At the top of the file import <code>React</code> and <code>Component</code>
                        <Code html={examples.importReactComponent}/>
                    </li>
                    <li>Create a class called <code>FormatTime</code>
                        <Code html={examples.example23}/>
                    </li>
                    <li>Add a <code>render</code> method to the <code>FormatTime</code> class. The <code>render</code> method should <code>return</code> a <code>&lt;div&gt;</code> that outputs <code>elapsed</code> from <code>this.props</code>
                        <Code html={examples.example24}/>
                    </li>
                </ol>
                <Code html={examples.example25} text={{show: 'View format_time.js Example', hide: 'Hide Example'}} confirm/>
                <p>In the <code>src/components/stopwatch.js</code> file do the following:</p>
                <ol>
                    <li>At the top of the file import the <code>FormatTime</code> component, import it with a name of <code>Time</code>
                        <Code html={examples.importTime} noHide/>
                    </li>
                    <li>In the <code>render</code> method of <code>Stopwatch</code> remove the contents of the <code>&lt;h1&gt;</code></li>
                    <li>Within the <code>&lt;h1&gt;</code> add the <code>&lt;Time/&gt;</code> component
                        <Code html={examples.example26}/>
                    </li>
                    <li>Add a prop to the <code>&lt;Time/&gt;</code> component called <code>elapsed</code> and set it to the <code>elapsed</code> const we pulled from state
                        <Code html={examples.example27}/>
                    </li>
                </ol>
                <p>If all went well the app should look and function the same as it did before starting this feature set. The difference now is that <code>elapsed</code> is being output from the <code>FormatTime</code> component not the <code>Stopwatch</code> component like before</p>
                <img src={appRender7} className="img-pop"/>
                <Code html={examples.example28} text={{show: 'View stopwatch.js Example', hide: 'Hide Example'}} confirm/>
                <p>In the <code>src/components/format_time.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>FormatTime</code> class add a <code>constructor</code> method. Remember to pass in <code>props</code> and call <code>super</code> with <code>props</code>
                        <Code html={examples.example29}/>
                    </li>
                    <li>In the <code>constructor</code> method create the initial <code>state</code> object. The <code>state</code> will need properties for each piece of the time display: <code>hour</code>, <code>min</code>, <code>sec</code>, and <code>ms</code>
                        <ol>
                            <li><code>hour</code> set to <code>0</code></li>
                            <li><code>min</code> set to <code>0</code></li>
                            <li><code>sec</code> set to <code>0</code></li>
                            <li><code>ms</code> set to <code>0</code></li>
                        </ol>
                        <Code html={examples.example30}/>
                    </li>
                    <li>In the <code>render</code> method (<i>before the return</i>) use destructuring to create constants for <code>hour</code>, <code>min</code>, <code>sec</code>, and <code>ms</code> from <code>this.state</code>
                        <Code html={examples.example31}/>
                    </li>
                    <li>In the <code>return</code> of the <code>render</code> method remove everything inside the <code>&lt;div&gt;</code></li>
                    <li>In the <code>&lt;div&gt;</code> use the <code>hour</code>, <code>min</code>, <code>sec</code>, and <code>ms</code> constants to create an output that looks like: <code>0:0:0.0</code> which is <code>hour:min:sec.ms</code>
                        <Code html={examples.example32}/>
                    </li>
                    <li>Check your browser you should see something like this:
                        <img src={appRender8} className="img-pop"/>
                        <p><b>NOTE:</b> <i>The start and stop buttons will no longer effect the time shown. This is expected at this point</i></p>
                        <Code html={examples.example33} text={{show: 'View format_time.js Example', hide: 'Hide Example'}} confirm/>
                    </li>
                    <li>We have the format done now we just need to update the state each time <code>Stopwatch</code> passes us a new <code>elapsed</code> time. We can use a lifecycle method to accomplish this, in particular we will use <code>componentWillReceiveProps</code> this method gets called every time the props being passed in are going to change</li>
                    <li>In the <code>FormatTime</code> class create a <code>componentWillReceiveProps</code> method. <code>componentWillReceiveProps</code> gets <code>nextProps</code> passed into it.
                        <Code html={examples.example34}/>
                    </li>
                    <li>In the <code>componentWillReceiveProps</code> method:
                        <ol>
                            <li>Use destructuring to create an <code>elapsed</code> constant from the <code>nextProps</code> variable
                                <Code html={examples.example35}/>
                            </li>
                            <li>Create a new <code>const</code> called <code>sec</code> to hold the number of seconds that have elapsed. To calculate the number of seconds elapsed you divide the <code>elapsed</code> constant by <code>1000</code>
                                <Code html={examples.example36}/>
                            </li>
                            <li>Create a new <code>const</code> called <code>min</code> to hold the number of minutes that have elapsed. To calculate the number of minutes elapsed you divide <code>sec</code> by <code>60</code>
                                <Code html={examples.example37}/>
                            </li>
                            <li>Lastly we need to use <code>this.setState</code> to set all four values in the state: <code>hour</code>, <code>min</code>, <code>sec</code>, <code>ms</code>. We will be using <code>Math.floor()</code> to remove any decimals and the modulo operator (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators" target="_blank">remainder operator</a>) <code>%</code> to determine the correct minutes and seconds to display
                                <ul>
                                    <li><code>hour</code> set to <code>Math.floor(min / 60)</code></li>
                                    <li><code>min</code> set to <code>Math.floor(min % 60)</code></li>
                                    <li><code>sec</code> set to <code>Math.floor(sec % 60)</code></li>
                                    <li><code>ms</code> set to <code>Math.floor(elapsed % 100)</code></li>
                                </ul>
                                <Code html={examples.example38}/>
                            </li>
                        </ol>
                    </li>
                    <li>In the browser, test your code!
                        <ol>
                            <li>When you click the <code>start</code> button the timer should start and it should be in a readable format
                                <img src={appRender9} className="img-pop"/>
                            </li>
                            <li>Whe you click the <code>stop</code> button the timer should stop and display the time you stopped it at
                                <img src={appRender10} className="img-pop"/>
                            </li>
                        </ol>
                    </li>
                </ol>
            </Card>
            <Card title="5" subtitle="Use Bootstrap to make this look good">
                <p>Now that we have a functional timer we can style it. We will be using Bootstrap to style the timer.</p>
                <p>In the <code>src/components/stopwatch.js</code> file do the following:</p>
                <ol>
                    <li>Within the <code>Stopwatch</code> <code>render</code> method add the following Bootstrap classes</li>
                    <li>On the outer most <code>&lt;div&gt;</code> add the class <code>jumbotron</code></li>
                    <li>On the <code>&lt;h1&gt;</code> add the class <code>display-3</code></li>
                    <li>Directly below the <code>&lt;h1&gt;</code> element add a <code>&lt;hr/&gt;</code> element with the class of <code>my-3</code>
                        <ul>
                            <li><b>NOTE:</b> <i>The <code>my-3</code> class is new to Bootstrap 4 and adds top and bottom margin. You can change the 3 to be any number between 1-5 to determine the amount of margin you want to add.</i></li>
                        </ul>
                    </li>
                    <li>On the <code>&lt;p&gt;</code> element add the classes <code>lead</code> and <code>text-center</code></li>
                    <li>Wrap all 3 buttons in a <code>&lt;p&gt;</code> tag and give the <code>&lt;p&gt;</code> a class of <code>text-center</code></li>
                    <li>For the <b>Start</b> button add the classes <code>btn</code>, <code>btn-outline-success</code>, and <code>mx-3</code>
                        <ul>
                            <li><b>NOTE:</b> <i>The <code>mx</code> classes are like the <code>my</code> classes but the <code>mx</code> classes add left and right margin. Think of the <code>x</code> and <code>y</code> axis of a graph</i></li>
                        </ul>
                    </li>
                    <li>On the <b>Stop</b> button add the classes <code>btn</code>, <code>btn-outline-danger</code>, and <code>mx-3</code></li>
                    <li>On the <b>Reset</b> button add the classes <code>btn</code>, <code>btn-outline-warning</code>, and <code>mx-3</code></li>
                </ol>
                <p>After completing the above steps your app should look similar to the following:</p>
                <img src={appRender11} className="img-pop"/>
                <Code html={examples.example39} confirm text={{show: 'View Full stopwatch.js Example', hide: 'Hide Example'}}/>
                <p>The last thing we need to do to complete the styling is to center the actual time string. This is trickier than it may seem.</p>
                <p>In the <code>src/components/format_time.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>return</code> of the <code>render</code> method add the <code>text-center</code> class to the <code>&lt;div&gt;</code></li>
                    <li>Test your app
                        <ul>
                            <li>Because the time string slightly changes size as the timer runs it causes it to bounce and give a ghosting effect when using <code>text-center</code>. This most likely is not a desired effect so this is not the best solution</li>
                        </ul>
                    </li>
                    <li>In the <code>constructor</code> method we will create a style object to help us center the timer
                        <ol>
                            <li>Add a <code>timerStyle</code> property to <code>this</code> and set it to an <code>object</code></li>
                            <li>Add the following properties to the <code>timerStyle</code> object
                                <ul>
                                    <li><code>display</code> set to <code>'inline-block'</code></li>
                                    <li><code>position</code> set to <code>'relative'</code></li>
                                    <li><code>left</code> set to <code>'50%'</code></li>
                                    <li><code>transform</code> set to <code>'translate(-50%)'</code></li>
                                    <li><code>width</code> set to <code>'295px'</code></li>
                                </ul>
                                <Code html={examples.example40}/>
                                <p><b>NOTE:</b> <i>All the properties and values represent a CSS rule. This is one way of adding styles in React. We will cover this in more detail in a future lesson.</i></p>
                            </li>
                        </ol>
                    </li>
                    <li>In the <code>return</code> of the <code>render</code> method:
                        <ol>
                            <li>Remove the <code>text-center</code> class from the <code>&lt;div&gt;</code></li>
                            <li>Add a <code>style</code> prop to the <code>&lt;div&gt;</code> and set it to the <code>timerStyle</code> object we created
                                <Code html={examples.example41} noHide/>
                            </li>
                        </ol>
                    </li>
                    <p>After completing the above steps your app should look similar to the following:</p>
                    <img src={appRender12_1} className="img-pop"/>
                    <p>Yes I know when the timer is at all zeros it is not perfectly centered, but once the seconds hit double digits it's pretty close...</p>
                    <img src={appRender12_2} className="img-pop"/>
                </ol>
                <p>This is the last required feature set. The next feature set is optional and will cover adding leading zeros for better aesthetics and to help better solve the centering issue.</p>
                <Code html={examples.example2} text={{show: 'View Final index.js Example', hide: 'Hide index.js Example'}} message={<div className="text-center my-3">You should only view this example after completing all above steps</div>} title="View Full index.js Example?" confirm/>
                <Code html={examples.example39} text={{show: 'View Final stopwatch.js Example', hide: 'Hide stopwatch.js Example'}} message={<div className="text-center my-3">You should only view this example after completing all above steps</div>} title="View Full stopwatch.js Example?" confirm/>
                <Code html={examples.example42} text={{show: 'View Final format_time.js Example', hide: 'Hide format_time.js Example'}} message={<div className="text-center my-3">You should only view this example after completing all above steps</div>} title="View Full format_time.js Example?" confirm/>
            </Card>
            <Card title="6" subtitle="Add leading and trailing zeros" optional>
                <p>In this feature set we will add a leading zero to <code>hour</code>, <code>min</code>, and <code>sec</code> when their value is less than 10 and a trailing zero to <code>ms</code> when its value is less than 10</p>
                <p>In the <code>src/components/format_time.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>FormatTime</code> class create a method called <code>leadingZero</code>
                        <ol>
                            <li><code>leadingZero</code> should take a single parameter, <code>number</code></li>
                            <li>Use an <code>if</code> statement to check if <code>number</code> is less than <code>10</code></li>
                            <li>If <code>number</code> is less than <code>10</code> return <code>number</code> with a zero concatenated in front of it</li>
                            <li>If <code>number</code> is <code>10</code> or greater return just <code>number</code></li>
                        </ol>
                        <Code html={examples.example43}/>
                        <Code html={examples.example44} text={{show: 'Show Advanced Example', hide: 'Hide Example'}}/>
                    </li>
                    <li>In the <code>return</code> of the <code>render</code> method use the <code>leadingZero</code> method on <code>hour</code>, <code>min</code>, and <code>sec</code>
                        <Code html={examples.example45}/>
                    </li>
                    <li>In the <code>timerStyle</code> object in the <code>constructor</code> method update the <code>width</code> property to be <code>'383px'</code></li>
                    <li>In the <code>FormatTime</code> class create a method called <code>trailingZero</code>
                        <ol>
                            <li><code>trailingZero</code> should take a single parameter, <code>number</code></li>
                            <li>Use an <code>if</code> statement to check if <code>number</code> is less than <code>10</code></li>
                            <li>If <code>number</code> is less than <code>10</code> return <code>number</code> with a zero concatenated to the end of it</li>
                            <li>If <code>number</code> is <code>10</code> or greater return just <code>number</code></li>
                        </ol>
                        <Code html={examples.example46}/>
                        <Code html={examples.example47} text={{show: 'Show Advanced Example', hide: 'Hide Example'}}/>
                    </li>
                    <li>In the <code>return</code> of the <code>render</code> method call the <code>trailingZero</code> method on <code>ms</code>
                        <Code html={examples.example48}/>
                    </li>
                </ol>
                <p>After completing all the above steps your timer should look something like:</p>
                <img src={appRender13_1} className="img-pop"/>
                <hr className="my-4"/>
                <img src={appRender13_2} className="img-pop"/>
                <Code html={examples.example49} text={{show: 'View Full format_time.js Example', hide: 'Hide Example'}} confirm/>
                <Code html={examples.example50} text={{show: 'View Full format_time.js Advanced Example', hide: 'Hide Example'}} title="Just FYI" message={<div>This example utilizes some more advanced concepts <br/> but accomplishes the exact same result as the above example</div>} confirm/>
            </Card>
            <Card title="7" subtitle="Fix the start button functionality" optional>
                <p>Right now every time you click the start button the timer resets. It would be nice if we could stop the timer and then resume it again by clicking start</p>
                <p>In the <code>src/components/stopwatch.js</code> file do the following:</p>
                <p>Everything in this feature set will be inside the <code>start</code> method within the <code>Stopwatch</code> class</p>
                <ol>
                    <li>Using destructuring create constants for <code>start</code> and <code>elapsed</code> from <code>this.state</code>
                        <Code html={examples.example51}/>
                    </li>
                    <li>Create a variable named <code>newStart</code> to hold the current timestamp. Use the JavaScript <code>Date</code> object to get the current timestamp
                        <Code html={examples.example52}/>
                    </li>
                    <li>If <code>start</code> isn't <code>null</code> set <code>newStart</code> equal to <code>newStart</code> minus <code>elapsed</code>
                        <Code html={examples.example53}/>
                    </li>
                    <li>In the <code>setState</code> method call, set <code>start</code> to <code>newStart</code>
                        <Code html={examples.example54}/>
                    </li>
                    <li>Test your app
                        <ul>
                            <li>Now when you stop the timer then click start again it should resume from where it left off. Also clicking start while the timer is running should have virtually no effect on it.</li>
                        </ul>
                    </li>
                </ol>
                <Code html={examples.example55} text={{show: 'View Full start() Example', hide: 'Hide Example'}} confirm/>
                <Code html={examples.example56} text={{show: 'View Full start() Example Using a Ternary', hide: 'Hide Example'}} title="Just FYI" message={<div>Only view this after you have a working version <br/> This is intended just to show other ways <br/> to accomplish the same result</div>} confirm/>
            </Card>
            <Card title="Extras" subtitle="Here are some ideas of other things to do with the timer" optional>
                <p>The best way to learn is to try doing stuff on your own. Below is a list of some things you can try or you can try your own ideas. Make your timer unique!</p>
                <ol>
                    <li>Find a different (<i>better</i>) way to center the timer text</li>
                    <li>Add a lap button that shows a list of lap times below the timer</li>
                    <li>Add additional styles to improve the look of the timer</li>
                    <li>Allow the user to enter a specific amount of time and have the timer count down to zero</li>
                    <li>Display the time text in a different format</li>
                    <li>Utilize the <code>leadingZero</code> and <code>trailingZero</code> methods in the <code>componentWillReceiveProps</code> method instead of the <code>render</code> method</li>
                </ol>
            </Card>
        </div>
    )
}
