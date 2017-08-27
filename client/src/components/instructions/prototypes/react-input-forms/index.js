import React from 'react';
import Intro from '../gettingStarted';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';
import examples from './examples';
import appRender1 from './imgs/appRender1.png';
import appRender2 from './imgs/appRender2.png';
import appRender3 from './imgs/appRender3.png';
import appRender4 from './imgs/appRender4.png';
import appRender5 from './imgs/appRender5.png';
import console1 from './imgs/console1.png';
import console2 from './imgs/console2.png';

export default function(){ 
    return (
        <div>
            <Intro branch="forms-inputs"/>
            <Card title="Feature Set 1" subtitle="Making the &lt;App/&gt; component">
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Import React
                        <Code html={examples.importReact} noHide/>
                    </li>
                    <li>Create a functional component called <code>App</code> that returns a <code>&lt;div&gt;</code> with a <code>&lt;h1&gt;</code> inside of it
                        <ol>
                            <li>Add a class of <code>container</code> to the <code>&lt;div&gt;</code></li>
                            <li>Add a class of <code>text-center</code> to the <code>&lt;h1&gt;</code></li>
                            <li>Add the text "Address Book" within the <code>&lt;h1&gt;</code></li>
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
            <Card title="2" subtitle="Contact Cards">
                <p>In this feature set we will make a <code>ContactCard</code> component to display a persons contact info. We will then make a <code>ContactList</code> component that will display a list of all the <code>ContactCard</code> components, one <code>ContactCard</code> component for each contact in our <code>contactData</code> array that we will create. We will start with making the dummy data, (<code>contactData</code>).</p>
                <p>In the <code>src/</code> folder create a new folder called <code>data</code>. Within <code>src/data/</code> create a file called <code>contacts.js</code></p>
                <p>In the <code>src/data/contacts.js</code> file do the following:</p>
                <ol>
                    <li>export default an array
                        <Code html={examples.example5} noHide/>
                    </li>
                    <li>Inside the array add 3 - 4 objects that contain the following data:
                        <ul>
                            <li><code>firstName</code> set to a <code>string</code></li>
                            <li><code>lastName</code> set to a <code>string</code></li>
                            <li><code>phone</code> set to a <code>string</code></li>
                            <li><code>email</code> set to a <code>string</code></li>
                        </ul>
                    </li>
                    <li>Here is some sample data you can copy and paste or you can create your own:
                        <Code html={examples.example6} text={{show: 'View Example Data', hide: 'Hide Example Data'}}/>
                    </li>
                </ol>
                <p>In the <code>src/components/</code> folder create a file called <code>contact_card.js</code></p>
                <p>In the <code>contact_card.js</code> file we will be creating a functional component that will display a single persons contact info. We will eventually be utilizing Bootstrap classes to help with styling.</p>
                <p>In the <code>src/components/contact_card.js</code> file do the following:</p>
                <ol>
                    <li>import <code>React</code>
                        <Code html={examples.importReact} noHide/>
                    </li>
                    <li>Create a functional component that returns a <code>&lt;h1&gt;</code> that uses <code>props</code> to show a persons full name:
                        <Code html={examples.example7} noHide/>
                    </li>
                </ol>
                <p>In the <code>src/components/</code> folder create a new file called <code>contact_list.js</code></p>
                <p>In the <code>src/components/contact_list.js</code> file do the following:</p>
                <ol>
                    <li>import <code>React</code> and <code>Component</code>
                        <Code html={examples.importReactComponent} noHide/>
                    </li>
                    <li>Create a <code>class</code> component called <code>ContactList</code>
                        <Code html={examples.example8}/>
                    </li>
                    <li>Add a <code>render</code> method to the <code>ContactList</code> class. The <code>render</code> method should return a <code>&lt;h1&gt;</code> with some text in it, it can say whatever you want
                        <Code html={examples.example9}/>
                    </li>
                    <li>export the <code>ContactList</code> component
                        <Code html={examples.example10}/>
                    </li>
                </ol>
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>import <code>ContactList</code>
                        <Code html={examples.importContactList}/>
                    </li>
                    <li>Add the <code>&lt;ContactList/&gt;</code> component to the <code>&lt;App/&gt;</code> component just below the <code>&lt;h1&gt;</code> element
                        <Code html={examples.example11}/>
                    </li>
                </ol>
                <p>You should now see the output from <code>&lt;ContactList&gt;</code> in the browser:</p>
                <img src={appRender2} className="img-pop"/>
                <p className="mt-3">It may seem like we have done a lot of work for little payoff, but we've actually laid a lot of ground work and now we will put it all together.</p>
                <p>In the <code>src/components/contact_list.js</code> file do the following:</p>
                <ol>
                    <li>import <code>ContactCard</code>
                        <Code html={examples.importContactCard}/>
                    </li>
                    <li>import the dummy data we created earlier in <code>src/data/contacts.js</code>
                        <Code html={examples.importContactData} noHide/>
                    </li>
                    <li>Within the <code>render</code> method add a <code>console.log</code> to view the contents of <code>contactData</code>. The <code>console.log</code> must be before the <code>return</code> statement
                        <Code html={examples.logContactData} noHide/>
                    </li>
                    <li>Open the console in the browser and view the result of the previous step. You should see something like:
                        <img src={console1} className="img-pop"/>
                        <p>You should see the array containing the few contact objects you created. If you are unable to see your array in the console try reviewing all the steps for this feature set to help figure out what might of gone wrong. If you are unable to make it work ask an instructor before continuing.</p>
                    </li>
                    <li>If you were able to view your data in the console delete the <code>console.log</code> from your code. Otherwise if you're stuck ask for help before continuing</li>
                </ol>
                <p>Next we will be using <code>map</code> to loop through the <code>contactData</code> array to build a new array that holds <code>JSX</code> instead of the contact objects</p>
                <ol start="6">
                    <li>Create a new <code>const</code> called <code>list</code>. Set <code>list</code> to the result of calling <code>map</code> on <code>contactData</code>
                        <Code html={examples.example12} noHide/>
                    </li>
                    <li>Add an anonymous function into the <code>map</code> call as a parameter:
                        <ol>
                            <li>The anonymous function will get two parameters passed to it: <code>item</code> and <code>index</code></li>
                            <li>Inside the anonymous function body add a <code>console.log</code> containing <code>item</code> so we can verify what is happening with <code>map</code></li>
                        </ol>
                        <Code html={examples.example13}/>
                        <p>Run your app and check your console, you should see your contacts printed out on separate lines from each time the anonymous function in <code>map</code> was called, once for every item in the <code>contactData</code> array</p>
                        <img src={console2} className="img-pop"/>
                    </li>
                    <li>Add a <code>return</code> statement to the anonymous function in <code>map</code>
                        <ol>
                            <li>Using <code>JSX</code> return the <code>&lt;ContactCard/&gt;</code> component</li>
                            <li>Add a prop onto <code>&lt;ContactCard/&gt;</code> of <code>key</code> set to <code>index</code></li>
                            <li>Add another prop onto <code>&lt;ContactCard/&gt;</code> of <code>firstName</code> set to <code>item.firstName</code></li>
                            <li>Add a final prop onto <code>&lt;ContactCard/&gt;</code> of <code>lastName</code> set to <code>item.lastName</code></li>
                        </ol>
                        <Code html={examples.example14}/>
                    </li>
                    <li>In the <code>render</code> method delete the <code>&lt;h1&gt;</code> from the <code>return</code> statement. Replace it with a <code>&lt;div&gt;</code> that outputs the <code>list</code> array
                        <Code html={examples.example15}/>
                    </li>
                </ol>
                <p>If all went well you should see your contacts full names rendered to the <code>DOM</code> in the browser</p>
                <img src={appRender3} className="img-pop"/>
                <Code html={examples.example6} text={{show: 'View Complete src/data/contact.js Example', hide: 'Hide contact.js'}} confirm/>
                <Code html={examples.example7} text={{show: 'View Complete src/components/contact_card.js Example', hide: 'Hide contact_card.js'}} confirm/>
                <Code html={examples.example17} text={{show: 'View Complete src/components/contact_list.js Example', hide: 'Hide contact_list.js'}} confirm/>
                <Code html={examples.example16} text={{show: 'View Complete src/components/app.js Example', hide: 'Hide app.js'}} confirm/>
            </Card>
            <Card title="3" subtitle="Add styling to the contact cards and get all the data for each contact">
                <p>In this feature set we will add some styling to the <code>ContactCard</code> component using <b>Bootstrap</b>. We will also pass all the information we have about each contact into <code>ContactCard</code> using <code>props</code>, as opposed to just passing in first and last name like we are doing now.</p>
                <p>We will be utilizing <b>Bootstrap</b> cards. <a href="https://v4-alpha.getbootstrap.com/components/card/#header-and-footer" target="_blank">View Bootstrap's example for card</a></p>
                <p>In the <code>src/components/contact_card.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>ContactCard</code> component delete the <code>&lt;h1&gt;</code> from the <code>return</code> statement</li>
                    <li>At the <code>return</code> statement add a <code>&lt;div&gt;</code>. Add the <code>class</code> <code>col-6</code> and the <code>class</code> <code>my-3</code> to the <code>&lt;div&gt;</code>. (<i>Don't forget to wrap it in parentheses</i>)
                        <Code html={examples.example18}/>
                    </li>
                    <li>Inside the <code>&lt;div&gt;</code> you created in the previous step, create a new <code>&lt;div&gt;</code> with a <code>class</code> of <code>card</code>
                        <Code html={examples.example19}/>
                    </li>
                    <li>Inside the <code>&lt;div&gt;</code> with the <code>class</code> of <code>card</code> add two new <code>&lt;div&gt;</code>s that are siblings
                        <ol>
                            <li>Give the first <code>&lt;div&gt;</code> a <code>class</code> of <code>card-header</code></li>
                            <li>Give the second <code>&lt;div&gt;</code> a <code>class</code> of <code>card-block</code></li>
                        </ol>
                        <Code html={examples.example20}/>
                    </li>
                    <li>Inside the <code>&lt;div&gt;</code> with a <code>class</code> of <code>card-block</code> add a <code>&lt;h4&gt;</code> with a <code>class</code> of <code>card-title</code></li>
                    <li>Below the <code>&lt;h4&gt;</code> add a <code>&lt;div&gt;</code> with a <code>class</code> of <code>card-text</code>
                        <Code html={examples.example21}/>
                    </li>
                    <li>Within the <code>&lt;div&gt;</code> that has a <code>class</code> of <code>card-text</code> add a <code>&lt;p&gt;</code> element
                        <ol>
                            <li>Inside the <code>&lt;p&gt;</code> element add <code>&lt;b&gt;</code> with the text <code>Phone:</code></li>
                        </ol>
                    </li>
                    <li>Within the <code>&lt;div&gt;</code> that has a <code>class</code> of <code>card-text</code> add another <code>&lt;p&gt;</code> element
                        <ol>
                            <li>Inside the <code>&lt;p&gt;</code> element add <code>&lt;b&gt;</code> with the text <code>Email:</code></li>
                        </ol>
                    </li>
                </ol>
                <Code html={examples.example22} text={{show: 'View src/components/contact_card.js Example', hide: 'Hide contact_card.js Example'}} confirm/>
                <p>Now that the basic layout for our new and improved <code>ContactCard</code> is complete we'll make a few adjustments in other files then finish up back in the <code>ContactCard</code> component</p>
                <p>In the <code>src/components/contact_list.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>ContactList</code> <code>render</code> method add a <code>class</code> of <code>col-8</code> to the <code>&lt;div&gt;</code> that is being returned, also wrap it in parentheses</li>
                    <li>Inside the <code>&lt;div&gt;</code> add a new <code>&lt;div&gt;</code> with a <code>class</code> of <code>row</code> that wraps <code>&#123;list&#125;</code></li>
                </ol>
                <Code html={examples.example23} text={{show: 'View src/components/contact_list.js Example', hide: 'Hide contact_list.js Example'}} confirm/>
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>return</code> of the <code>App</code> component wrap the <code>&lt;ContactList/&gt;</code> in a <code>&lt;div&gt;</code> with a <code>class</code> of <code>row</code></li>
                </ol>
                <Code html={examples.example24} text={{show: 'View src/components/app.js Example', hide: 'Hide app.js Example'}} confirm/>
                <p>If all is going well so far, you should see something like this in your browser:</p>
                <img src={appRender4} className="img-pop"/>
                <p>The last things we need to do is pass all of each contact's information to <code>ContactCard</code> then utilize that information inside of <code>ContactCard</code></p>
                <p>In the <code>src/components/contact_list.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>render</code> method of the <code>ContactList</code> class, within the <code>return</code> of the <code>map</code>s anonymous function: remove the <code>firstName</code> and <code>lastName</code> <code>props</code>
                        <Code html={examples.example25}/>
                    </li>
                    <li>Replace the removed <code>props</code> with a single <code>prop</code> called <code>contact</code> set to <code>item</code>
                        <Code html={examples.example26}/>
                    </li>
                </ol>
                <p>In the <code>src/components/contact_card.js</code> file do the following:</p>
                <ol>
                    <li>Inside the <code>ContactCard</code> component before the <code>return</code> use destructuring to create the following constants from <code>props.contact</code>
                        <ul>
                            <li>firstName</li>
                            <li>lastName</li>
                            <li>phone</li>
                            <li>email</li>
                        </ul>
                        <Code html={examples.example27}/>
                    </li>
                    <li>Inside the <code>&lt;div&gt;</code> that has a <code>class</code> of <code>card-header</code> output <code>lastName</code>
                        <Code html={examples.example28}/>
                    </li>
                    <li>Inside the <code>&lt;h4&gt;</code> with a <code>class</code> of <code>card-title</code> use some form of concatenation to output the contacts full name using <code>firstName</code> and <code>lastName</code>. (<i>Don't forget the space</i>)
                        <Code html={examples.example29}/>
                    </li>
                    <li>Use your best guess to try and figure out where to output <code>phone</code> and <code>email</code></li>
                </ol>
                <p>If all went well you should see something resembling the following:</p>
                <img src={appRender5} className="img-pop"/>
                <Code html={examples.example24} text={{show: 'View src/components/app.js Example', hide: 'Hide app.js Example'}} confirm/>
                <Code html={examples.example30} text={{show: 'View src/components/contact_list.js Example', hide: 'Hide contact_list.js Example'}} confirm/>
                <Code html={examples.example31} text={{show: 'View src/components/contact_card.js Example', hide: 'Hide contact_card.js Example'}} confirm/>
            </Card>
            <Card title="4" subtitle="Contact Form">
                <p>In this feature set we will be creating the beginning of the contact form so we can add new contacts</p>
                <ol>
                    <li>In the <code>src/components/</code> folder create a new file named <code>contact_form.js</code></li>
                </ol>
                <p>In the <code>src/components/contact_form.js</code> file do the following:</p>
                    <ol>
                        <li>import <code>React</code> and <code>Component</code> from <code>'react'</code>
                            <Code html={examples.importReactComponent}/>
                        </li>
                        <li>Create a class called <code>ContactForm</code> that extends <code>Component</code></li>
                        <li>Add a <code>render</code> method to the <code>ContactForm</code> have it return a <code>&lt;h1&gt;</code> with some text inside.
                            <ul>
                                <li><i>The <code>&lt;h1&gt;</code> is temporary and just to test the component</i></li>
                            </ul>
                        </li>
                        <li>Export the component at the end of the file</li>
                    </ol>
                    <Code html={examples.example3} text={{show: 'View contact_form.js Example', hide: 'Hide Example'}} confirm/>
                    <p>In the <code>src/components/app.js</code> file do the following:</p>
                    <ol>
                        <li>import <code>ContactForm</code> from <code>contact_form.js</code></li>
                        <li>In the <code>&lt;App&gt;</code> component add the <code>&lt;ContactForm/&gt;</code> component below the <code>&lt;h1&gt;</code>
                            <Code html={examples.example4}/>
                        </li>
                    </ol>
            </Card>
        </div>
    )
}
