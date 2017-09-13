import React from 'react';
import Intro from '../gettingStarted';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';
import Cc from '../../../code_component';
import examples from './examples';
import appRender1 from './images/appRender1.png';
import appRender2 from './images/appRender2.png';
import appRender3 from './images/appRender3.png';
import appRender4 from './images/appRender4.png';
import appRender5 from './images/appRender5.png';
import appRender6 from './images/appRender6.png';
import appRender7 from './images/appRender7.png';
import appRender8 from './images/appRender8.png';
import appRender9 from './images/appRender9.png';
import appRender10 from './images/appRender10.png';
import appRender11 from './images/appRender11.png';
import appRender12 from './images/appRender12.png';

export default function(){
    
    return (
        <div>
            <Intro branch="routing-intro"/>
            <Card title="1" subtitle="Build the base &lt;App/&gt; component">
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Create a functional component that returns a <Cc>div</Cc> with a class of <code>container</code></li>
                    <li>Inside the <Cc>div</Cc> add a <Cc>h1</Cc> with some text to display</li>
                </ol>
                <Code {...examples.fs1e1} confirm/>
                <p>In the <code>src/index.js</code> file do the following:</p>
                <ol>
                    <li>Import the <Cc>App/</Cc> component</li>
                    <li>Replace the first argument of <code>ReactDOM.render</code> with <Cc>App/</Cc></li>
                </ol>
                <Code {...examples.fs1e2} confirm/>
                <p>You should see something like the following in the browser after completing this feature set:</p>
                <img src={appRender1} className="img-pop"/>
            </Card>
            <Card title="2" subtitle="Add routing">
                <p>In your terminal in the <code>react-prototypes</code> directory do the following:</p>
                <ol>
                    <li>Install <b>React Router</b> as a dependency
                        <ul>
                            <li><code>npm install --save react-router-dom</code></li>
                        </ul>
                    </li>
                </ol>
                <p>In the <code>src/index.js</code> file do the following:</p>
                <ol>
                    <li>Import <code>BrowserRouter</code> as <code>Router</code> from <code>react-router-dom</code>
                        <Code {...examples.fs2e1} noHide/>
                    </li>
                    <li>Wrap the first argument of <code>ReactDOM.render</code> with <Cc>Router</Cc>
                        <Code {...examples.fs2e2}/>
                    </li>
                </ol>
                <Code {...examples.fs2e3} confirm/>
                <p>In the <code>src/components/</code> folder create a new file called <code>welcome.js</code></p>
                <p>In the <code>src/components/welcome.js</code> file do the following:</p>
                <ol>
                    <li>Create a functional component that returns a <Cc>div</Cc></li>
                    <li>Inside the <Cc>div</Cc> add a <Cc>h1</Cc> with appropriate text for a welcome page</li>
                    <li>Below the <Cc>h1</Cc> add a <Cc>p</Cc> element with some lorem ipsum or any other dummy text</li>
                </ol>
                <Code {...examples.fs2e4} confirm/>
                <p>In the <code>app/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Import <code>Route</code> from <code>react-router-dom</code>
                        <Code {...examples.fs2e5}/>
                    </li>
                    <li>Import the <Cc>Welcome</Cc> component</li>
                    <li>In the <code>return</code> of the <Cc>App/</Cc> component add a <Cc>Route/</Cc> component below the <Cc>h1</Cc></li>
                    <li>The <Cc>Route/</Cc> component should get two <code>props</code>
                        <ol>
                            <li><code>path</code> set to <code>"/"</code></li>
                            <li><code>component</code> set to <code>&#123;Welcome&#125;</code></li>
                        </ol>
                        <Code {...examples.fs2e6}/>
                    </li>
                </ol>
                <p>You should see something like the following in the browser after completing the steps for this feature set:</p>
                <img src={appRender2} className="img-pop"/>
            </Card>
            <Card title="3" subtitle="Create a &lt;Nav/&gt; component">
                <p>In the <code>src/components/</code> folder create a file named <code>nav.js</code></p>
                <p>In the <code>src/components/nav.js</code> file do the following:</p>
                <ol>
                    <li>Create a functional component that returns a <Cc>ul</Cc></li>
                    <li>At the top of the file import <Cc>Link</Cc> from <code>react-router-dom</code>
                        <Code {...examples.fs3e1}/>
                    </li>
                    <li>In the <code>return</code> of your component add the following three classes to the <Cc>ul</Cc>
                        <ol>
                            <li><code>nav</code></li>
                            <li><code>nav-tabs</code></li>
                            <li><code>mt-3</code></li>
                        </ol>
                    </li>
                    <li>Inside the <Cc>ul</Cc> add a <Cc>li</Cc> with a class of <code>nav-item</code>
                        <Code {...examples.fs3e2}/>
                    </li>
                    <li>Inside the <Cc>li</Cc> add a <Cc>Link</Cc> component with the text <code>Welcome</code>
                        <Code {...examples.fs3e3}/>
                    </li>
                    <li>Add the following two <code>props</code> to the <Cc>Link</Cc> component
                        <ol>
                            <li><code>to</code> set to <code>"/"</code></li>
                            <li><code>className</code> set to <code>"nav-link"</code></li>
                        </ol>
                        <Code {...examples.fs3e4}/>
                    </li>
                </ol>
                <Code {...examples.fs3e5} confirm/>
                <p>In the <code>src/component/app.js</code> file do the following:</p>
                <ol>
                    <li>At the top of the file import the <Cc>Nav/</Cc> component</li>
                    <li>In the <code>return</code> of the <Cc>App/</Cc> component delete the <Cc>h1</Cc> and replace it with the <Cc>Nav/</Cc> component
                        <Code {...examples.fs3e6}/>
                    </li>
                </ol>
                <Code {...examples.fs3e7} confirm/>
                <p>You should see something like the following in the browser after completing the steps for this feature set:</p>
                <img src={appRender3} className="img-pop"/>
            </Card>
            <Card title="4" subtitle="Create the &lt;OurMacarons/&gt; component">
                <p>In the <code>src/components/</code> folder create a file named <code>our_macarons.js</code></p>
                <p>In the <code>src/components/our_macarons.js</code> file do the following:</p>
                <ol>
                    <li>Create a functional component that has the same layout as the <Cc>Welcome/</Cc> component</li>
                    <li>Have the <Cc>h1</Cc> say something that is fitting for the "Our Macarons" page</li>
                </ol>
                <Code {...examples.fs4e1} confirm/>
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Import the <Cc>OurMacarons/</Cc> component</li>
                    <li>Following the format of the <code>Welcome</code> <Cc>Route/</Cc> create a <Cc>Route/</Cc> for the <Cc>OurMacarons/</Cc> component. Set the path to <code>/our-macarons</code></li>
                </ol>
                <Code {...examples.fs4e2} confirm/>
                <p>In the <code>src/components/nav.js</code> file do the following:</p>
                <ol>
                    <li>Make a <Cc>li</Cc> for the <code>/our-macarons</code> route. Use the <Cc>li</Cc> for the <code>/</code> route as an example</li>
                </ol>
                <Code {...examples.fs4e3} confirm/>
                <p>Test your code. When you click on the "Our Macarons" link you should see something similar to:</p>
                <img src={appRender4} className="img-pop"/>
                <p>Both the <Cc>Welcome/</Cc> and <Cc>OurMacarons/</Cc> components display at the same time when on the <code>/our-macarons</code> route. This is not a desired effect</p>
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Add the <code>exact</code> <code>prop</code> to the <Cc>Route/</Cc> for the <Cc>Welcome</Cc> component
                        <Code {...examples.fs4e4}/>
                    </li>
                </ol>
                <Code {...examples.fs4e5} confirm/>
                <p>After successfully completing this feature set you should see something similar to:</p>
                <p className="mt-4"><code>/</code> Route:</p>
                <img src={appRender5} className="img-pop"/>
                <p className="mt-5"><code>/our-macarons</code> Route:</p>
                <img src={appRender6} className="img-pop"/>
            </Card>
            <Card title="5" subtitle="Create the remaining two components &lt;GiftsParties/&gt; and &lt;Contact&gt;">
                <p>In the <code>src/components/</code> folder create two files. One file should be named <code>gifts_parties.js</code> and the other should be named <code>contact.js</code></p>
                <p>In the <code>src/components/gifts_parties.js</code> file do the following:</p>
                <ol>
                    <li>Create a functional component that has the same layout as the <Cc>Welcome/</Cc> component</li>
                    <li>Have the <Cc>h1</Cc> say something that is fitting for the "Gifts &amp; Parties" page</li>
                </ol>
                <Code {...examples.fs5e1} confirm/>
                <p>In the <code>src/components/contact.js</code> file do the following:</p>
                <ol>
                    <li>Create a functional component that has the same layout as the <Cc>Welcome/</Cc> component</li>
                    <li>Have the <Cc>h1</Cc> say something that is fitting for the "Contact" page</li>
                </ol>
                <Code {...examples.fs5e2} confirm/>
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>At the top of the file import both the <Cc>GiftsParties/</Cc> component and the <Cc>Contact/</Cc> component</li>
                    <li>Add two new <Cc>Route</Cc> components
                        <ol>
                            <li><Cc>GiftsParties/</Cc> path should be <code>/gifts-parties</code></li>
                            <li><Cc>Contact</Cc> path should be <code>/contact</code></li>
                        </ol>
                        <Code {...examples.fs5e3}/>
                    </li>
                </ol>
                <Code {...examples.fs5e4} confirm/>
                <p>In the <code>src/components/nav.js</code> file do the following:</p>
                <ol>
                    <li>Create two additional <Cc>li</Cc> elements with <Cc>Link/</Cc> components inside
                        <ol>
                            <li>One link should go to <code>/gifts-parties</code></li>
                            <li>The other should go to <code>/contact</code></li>
                        </ol>
                        <Code {...examples.fs5e5}/>
                    </li>
                </ol>
                <Code {...examples.fs5e6} confirm/>
                <p>After completing this feature set you should have two additional fully functional routes:</p>
                <p className="mt-4"><code>/gifts-parties</code> route</p>
                <img src={appRender7} className="img-pop"/>
                <p className="mt-4"><code>/contact</code> route</p>
                <img src={appRender8} className="img-pop"/>
            </Card>
            <Card title="6" subtitle="Indicate in the nav which route is active" optional>
                <p>As it stands now the nav bar does not indicate which route is active. React Router has an easy fix for this. Then we'll take it one step further</p>
                <p>In the <code>src/components/nav.js</code> file do the following:</p>
                <ol>
                    <li>At the top of the file where <Cc>Link/</Cc> is being imported change it from <code>Link</code> to <code>NavLink</code>
                        <Code {...examples.fs6e1}/>
                    </li>
                    <li>In the nav <Cc>ul</Cc> change all the <Cc>Link</Cc> components to <Cc>NavLink</Cc> components. Nothing else needs to change
                        <Code {...examples.fs6e2}/>
                    </li>
                </ol>
                <p>Test your code. You should notice something isn't quite right. Regardless of which route you select the welcome route is always selected. This is fixed the same way as it is with defining routes</p>
                <img src={appRender9} className="img-pop"/>
                <ol start="3" className="mt-4">
                    <li>Add the <code>exact</code> <code>prop</code> to the <Cc>NavLink</Cc> for the <Cc>Welcome/</Cc> component
                        <Code {...examples.fs6e3}/>
                    </li>
                </ol>
                <p>Test your code. Now the indicators on the nav tabs should work as expected</p>
                <img src={appRender10} className="img-pop"/>
                <p className="mt-4">This works because by default <Cc>NavLink</Cc> adds a class of <code>active</code> to an active link. Bootstrap uses a class of <code>active</code> for its nav items so it all works nicely together.</p>
                <img src={appRender11} className="img-pop"/>
                <p className="mt-4">Next we will make a custom class to add additional styling to active links using the <code>activeClassName</code> <code>prop</code> on all of the <Cc>NavLink</Cc> components</p>
                <ol>
                    <li>On all the <Cc>NavLink</Cc> components add a <code>prop</code> of <code>activeClassName</code> set to <code>"active selected"</code>
                        <ul>
                            <li>We add two classes because we want to keep the Bootstrap styling from the <code>active</code> class and then add our own styling with the <code>selected</code> class</li>
                        </ul>
                        <Code {...examples.fs6e4}/>
                    </li>
                </ol>
                <p>In the <code>src/components/</code> folder create a file named <code>nav.css</code></p>
                <p>In the <code>src/components/nav.css</code> file do the following:</p>
                <ol>
                    <li>Add the below css to your <code>nav.css</code> file
                        <Code {...examples.fs6e5} noHide/>
                    </li>
                </ol>
                <p>In the <code>src/components/nav.js</code> file do the following:</p>
                <ol>
                    <li>At the top of the file import <code>nav.css</code>
                        <Code {...examples.fs6e6}/>
                    </li>
                </ol>
                <p>Test your code. You should now see the custom css from the <code>selected</code> class applied to active links</p>
                <img src={appRender12} className="img-pop"/>
                <Code {...examples.fs6e7} confirm/>
            </Card>
        </div>
    )
}
