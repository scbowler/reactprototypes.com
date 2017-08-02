import React from 'react';
import Intro from '../gettingStarted';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';
import examples from './examples';
import appRender1 from './imgs/appRender1.png';
import appRender2 from './imgs/appRender2.png';
import appRender3 from './imgs/appRender3.png';
import console1 from './imgs/console1.png';
import console2 from './imgs/console2.png';

export default function(){

    return (
        <div>
            <Intro branch="functional-components"/>
            <Card title="Overview" subtitle="What you'll be building in this prototype">
                <p>In the <b>functional-components</b> prototype you will be creating an <code>&lt;App/&gt;</code> component which is the starting component for most React apps. You will also be creating a <code>&lt;Table&gt;</code> component that will get its data from an array. This prototype will introduce you to creating functional components and dealing with props</p>
                <ol>
                    <li>
                        <b>Related Slides</b>
                        <ul>
                            <li><a href="https://docs.google.com/presentation/d/1HC5Shyjl3FeOEGbvdZXuikeJY4M_Z801lzsUmAt-Ofs/pub?start=false&loop=false&delayms=3000" target="_blank">React Components</a></li>
                        </ul>
                    </li>
                    <li>
                        <b>Feature Set 1</b>
                        <ul>
                            <li>Create an <code>&lt;App&gt;</code> component. <code>&lt;App&gt;</code> components are commonly used in React apps as the starting component that all other components branch from.</li>
                        </ul>
                    </li>
                    <li>
                        <b>Feature Set 2</b>
                        <ul>
                            <li>Create a <code>&lt;Table&gt;</code> component with hard coded values</li>
                        </ul>
                    </li>
                    <li>
                        <b>Feature Set 3</b>
                        <ul>
                            <li>Starting with the <code>&lt;Table&gt;</code> component from <i>feature set 2</i> you will convert the component to be dynamically built with data passed in as props.</li>
                        </ul>
                    </li>
                    <li>
                        <b>Final Output</b>
                        <img src={appRender3} className="img-pop"/>
                    </li>
                </ol>
            </Card>
            <Card title="Feature Set 1" subtitle="Making the &lt;App/&gt; component">
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Import React
                        <Code html={examples.importReact} noHide/>
                    </li>
                    <li>Create a functional component called <code>App</code> that returns a <code>&lt;h1&gt;</code> containing "My first React functional component"
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
            <Card title="Feature Set 2" subtitle="Create a table component">
                <ol>
                    <li>Create a new file in <code>src/components/</code> called <code>table.js</code></li>
                </ol>
                <p>In the <code>src/components/table.js</code> file do the following:</p>
                <ol>
                    <li>Import React at the top of the file
                        <Code html={examples.importReact} noHide/>
                    </li>
                    <li>Create a functional component that returns a table
                        <ol>
                            <li>The table should have a <code>&lt;thead&gt;</code> section that has three headers
                                <ol>
                                    <li><b>Name</b></li>
                                    <li><b>Course</b></li>
                                    <li><b>Grade</b></li>
                                </ol>
                            </li>
                            <li>In the <code>&lt;tbody&gt;</code> add three rows of student data based on the headers</li>
                            <li>Add the class <code>table</code> to the <code>&lt;table&gt;</code> element</li>
                            <li>Add the class <code>thead-inverse</code> to the <code>&lt;thead&gt;</code> element</li>
                        </ol>
                        <Code html={examples.example3} />
                    </li>
                </ol>
                <p>In the <code>src/components/app.js</code> file do the following</p>
                <ol>
                    <li>Import the newly created <code>Table</code> component
                        <Code html={examples.importTable} noHide/>
                    </li>
                    <li>Remove the <code>&lt;h1&gt;</code> element that is being returned from the component</li>
                    <li>Add a new <code>&lt;div&gt;</code> with a class of <code>container</code> to the return statement</li>
                    <li>Inside the <code>&lt;div&gt;</code> add a new <code>&lt;h1&gt;</code> that says "<i>Student Grade Table</i>"</li>
                    <li>Below the <code>&lt;h1&gt;</code> add the <code>&lt;Table&gt;</code> component
                        <Code html={examples.example4}/>
                    </li>
                </ol>
                <p>After completing the above steps you should see the following in the browser:</p>
                <div className="text-center">
                    <img src={appRender2} className="img-pop"/>
                </div>
            </Card>
            <Card title="Feature Set 3" subtitle="Make it dynamic ... Got map?">
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Create a <code>const</code> named <code>students</code>
                        <ol>
                            <li><code>students</code> should be set to an <i>array</i></li>
                            <li>The <i>array</i> should contain at least three student <i>objects</i> with <i>keys</i> of:
                                <ul>
                                    <li>student</li>
                                    <li>course</li>
                                    <li>grade</li>
                                </ul>
                            </li>
                            <li>The <code>students</code> array can be defined inside the component function or outside of it</li>
                        </ol>
                        <Code html={examples.studentData}/>
                    </li>
                    <li>Add a <i>prop</i> to the <code>&lt;Table&gt;</code> component named <code>data</code></li>
                    <li>Set <code>data</code> to <code>students</code>
                        <Code html={examples.dataProp}/>
                    </li>
                </ol>
                <Code html={examples.example5} text={{show: 'View app.js Example', hide: 'Hide Example'}}/>
                <p>In the <code>src/components/table.js</code> file do the following:</p>
                <ol>
                    <li>Add <code>props</code> to the parameter list of the <code>Table</code> component. We can now access the <code>students</code> <i>array</i> in the <code>Table</code> component via <code>props.data</code>
                        <Code html={examples.propsParam} noHide/>
                    </li>
                    <li>Using <code>map()</code> iterate over the <i>objects</i> in the <code>props.data</code> <i>array</i>
                        <ol>
                            <li>Create a new <code>const</code> in the <code>Table</code> component called <code>tableRows</code> that will hold the student rows</li>
                            <li>Set <code>tableRows</code> equal to the result of mapping over <code>props.data</code>
                                <Code html={examples.mapEx1} />
                            </li>
                            <li><code>map()</code> takes a single parameter that is an anonymous function
                                <ol>
                                    <li>The anonymous function gets 2 arguments passed to it
                                        <ul>
                                            <li>An item from the array</li>
                                            <li>The index of the item being passed in</li>
                                        </ul>
                                    </li>
                                    <li>The anonymous function returns the value to be added to the new array. In this case the <code>tableRows</code> constant</li>
                                </ol>
                            </li>
                            <li>Pass an anonymous function into map. (remember it needs 2 parameters)
                                <ol>
                                    <li>In the function <code>console.log</code> <code>item</code></li>
                                    <li>For now <code>return</code> nothing</li>
                                </ol>
                                <Code html={examples.mapEx2}/>
                            </li>
                            <li>Refresh your page in the browser, now in the console you should see 3 separate <code>console.log</code>s. One for every time the anonymous function was called
                                <img src={console1} className="img-pop"/>
                            </li>
                            <li>Using <b>JSX</b> return a <code>&lt;tr&gt;</code>
                                <ol>
                                    <li>The <code>&lt;tr&gt;</code> should contain 3 <code>&lt;td&gt;</code>s. One for <code>name</code>, <code>course</code>, and <code>grade</code></li>
                                    <li>Remove the <code>console.log</code></li>
                                </ol>
                                <Code html={examples.mapEx3}/>
                            </li>
                        </ol>
                    </li>
                    <li>In the return statement <b>remove</b> all the content between <code>&lt;tbody&gt;</code></li>
                    <li>Use a JS expression to output the contents of <code>tableRows</code> in the <code>&lt;tbody&gt;</code>
                        <Code html={examples.example6} />
                    </li>
                    <li>If you view your browser you should now see the table rendered again, but if you open the console you'll see a <code>warning</code>
                        <img src={console2} className="img-pop"/>
                        <ul>
                            <li>The warning is telling us we are missing the <code>key</code> prop on the <code>&lt;tr&gt;</code> we are returning from the map callback function</li>
                        </ul>
                    </li>
                    <li>Add a <code>key</code> prop to the <code>&lt;tr&gt;</code> and set it to the <code>index</code>
                        <Code html={examples.mapEx4}/>
                    </li>
                    <li>You should now be able to view your table in the browser and have no errors/warnings in the console</li>
                </ol>
                <Code html={examples.example7} text={{show: 'View table.js Example', hide: 'Hide Example'}}/>
                <p>After completing the above steps you should see the following in the browser:</p>
                <img src={appRender3} className="img-pop"/>
            </Card>
        </div>
    )
}
