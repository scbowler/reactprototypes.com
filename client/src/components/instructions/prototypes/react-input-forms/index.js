import React from 'react';
import Intro from '../gettingStarted';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';
import Cc from '../../../code_component';
import examples from './examples';
import ContactDemo from './demo/contact_demo';
import overview1 from './imgs/overview1.png';
import appRender1 from './imgs/appRender1.png';
import appRender2 from './imgs/appRender2.png';
import appRender3 from './imgs/appRender3.png';
import appRender4 from './imgs/appRender4.png';
import appRender5 from './imgs/appRender5.png';
import appRender6 from './imgs/appRender6.png';
import appRender7 from './imgs/appRender7.png';
import appRender8 from './imgs/appRender8.png';
import appRender9 from './imgs/appRender9.png';
import appRender10 from './imgs/appRender10.png';
import appRender11 from './imgs/appRender11.png';
import appRender12 from './imgs/appRender12.png';
import appRender13 from './imgs/appRender13.png';
import appRender14 from './imgs/appRender14.png';
import appRender15 from './imgs/appRender15.png';
import console1 from './imgs/console1.png';
import console2 from './imgs/console2.png';
import console3 from './imgs/console3.png';
import console4 from './imgs/console4.png';
import console5 from './imgs/console5.png';
import console6 from './imgs/console6.png';
import console7 from './imgs/console7.png';
import console8 from './imgs/console8.png';
import console9 from './imgs/console9.png';
import console10 from './imgs/console10.png';

export default function(){ 
    return (
        <div>
            <Intro branch="forms-inputs"/>
            <Card title="Overview" subtitle="What you'll be building in this prototype">
                <p>In the <b>inputs and forms</b> prototype you will be building a contact list that displays you contacts info in a card and has a form to allow you to add additional contacts. This prototype will introduce you to using "dummy" data and utilizing a form to add to your existing data.</p>
                <ol>
                    <li><b>Related Slides</b>
                        <ul>
                            <li><a href="https://docs.google.com/presentation/d/e/2PACX-1vSTcvN0h8KaAI6H_K_kxYble2DaNUM9Fjs-gMdPxDIZMUY-ikMgqmORlJe8B9J_QjIYDBX9R9TkCIzw/pub?start=false&loop=false&delayms=3000" target="_blank">Component State - Inputs</a></li>
                        </ul>
                    </li>
                    <li><b>Feature Set 1</b>
                        <ul>
                            <li>You will build the initial <Cc>App/</Cc> component, from which the entire application will build from</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 2</b>
                        <ul>
                            <li>Create a component that will display a contact's information. Build dummy data to test the newly created <Cc>ContactCard/</Cc> component</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 3</b>
                        <ul>
                            <li>Utilize Bootstrap 4 classes to display a contact's information in a "card" format
                                <img src={overview1} className="img-pop"/>
                            </li>
                        </ul>
                    </li>
                    <li><b>Feature Set 4</b>
                        <ul>
                            <li>Build a basic form that has two inputs, one for a contact's first name and one for a contact's second name</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 5</b>
                        <ul>
                            <li>Create a new <Cc>Field/</Cc> component to make it easier to add inputs to the contact from. Utilize the <Cc>Field/</Cc> component to add two additional inputs to the add contact form.</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 6</b>
                        <ul>
                            <li>Bring everything together by having the contact form add a contact to the <code>contactData</code> array</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 7</b>
                        <ul>
                            <li>In this optional feature set you will create a <code>reset</code> method for the contact form so you can clear the form with a button or after the form is submitted</li>
                        </ul>
                    </li>
                    <li><b>Extras</b>
                        <ul>
                            <li>A list of extra things you can do to improve your Address Book app</li>
                        </ul>
                    </li>
                    <li><b>Demo:</b></li>
                </ol>
                <ContactDemo/>
            </Card>
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
                    <li>Create a <code>constructor</code> method within the <code>ContactList</code> class
                        <ol>
                            <li>The <code>constructor</code> method takes a single parameter of <code>props</code></li>
                            <li>Call the <code>super</code> method and pass in <code>props</code> as an argument</li>
                            <li>Create the <code>this.state</code> object, give it the following property:
                                <ul>
                                    <li><code>contacts</code> set to <code>contactData</code></li>
                                </ul>
                            </li>
                        </ol>
                        <Code html={examples.contactListConstructor}/>
                    </li>
                    <li>Within the <code>render</code> method add a <code>console.log</code> to view the contents of <code>this.state.contacts</code>. The <code>console.log</code> must be before the <code>return</code> statement
                        <Code html={examples.logContactData} noHide/>
                    </li>
                    <li>Open the console in the browser and view the result of the previous step. You should see something like:
                        <img src={console1} className="img-pop my-3"/>
                        <p>You should see the array containing the few contact objects you created. If you are unable to see your array in the console try reviewing all the steps for this feature set to help figure out what might of gone wrong. If you are unable to make it work ask an instructor before continuing.</p>
                    </li>
                    <li>If you were able to view your data in the console delete the <code>console.log</code> from your code. Otherwise if you're stuck ask for help before continuing</li>
                </ol>
                <p>Next we will be using <code>map</code> to loop through the <code>this.state.contacts</code> array to build a new array that holds <code>JSX</code> instead of the contact objects</p>
                <ol start="6">
                    <li>Create a new <code>const</code> called <code>list</code>. Set <code>list</code> to the result of calling <code>map</code> on <code>this.state.contacts</code>
                        <Code html={examples.example12} noHide/>
                    </li>
                    <li>Add an anonymous function into the <code>map</code> call as an argument:
                        <ol>
                            <li>The anonymous function will get two parameters passed to it: <code>item</code> and <code>index</code></li>
                            <li>Inside the anonymous function body add a <code>console.log</code> containing <code>item</code> so we can verify what is happening with <code>map</code></li>
                        </ol>
                        <Code html={examples.example13}/>
                        <p>Run your code and check your console, you should see your contacts printed out on separate lines from each time the anonymous function in <code>map</code> was called, once for every item in the <code>this.state.contacts</code> array</p>
                        <img src={console2} className="img-pop mb-3"/>
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
                <ol start="10" className="mt-4">
                    <li>Delete the <code>console.log</code> from the anonymous function in the <code>map</code> method</li>
                </ol>
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
                <img src={appRender4} className="img-pop mb-3"/>
                <p>The last things we need to do is pass all of each contact's information to <code>ContactCard</code> then utilize that information inside of <code>ContactCard</code></p>
                <p>In the <code>src/components/contact_list.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>render</code> method of the <code>ContactList</code> class, within the <code>return</code> of the <code>map</code>s anonymous function: remove the <code>firstName</code> and <code>lastName</code> <code>props</code> from <Cc>ContactCard/</Cc>
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
                <p>In this feature set we will be creating a form so we can add new contacts</p>
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
                    <li>Within the <code>&lt;div&gt;</code> with a <code>class</code> of <code>row</code> add a new <code>&lt;div&gt;</code> above the <code>&lt;ContactList&gt;</code> component. Give the new div a <code>class</code> of <code>col-4</code>
                        <Code html={examples.example4}/>
                    </li>
                </ol>
                <p>You should now see something like the following in the browser:</p>
                <img src={appRender6} className="img-pop"/>
                <p className="mt-3">Back to the <code>src/components/contact_form.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>return</code> of the <code>render</code> method remove the <code>&lt;h1&gt;</code> and replace it with a <code>&lt;form&gt;</code> element
                        <Code html={examples.example32}/>
                    </li>
                    <li>In the <code>form</code> element create a <code>&lt;div&gt;</code> with a <code>class</code> of <code>form-group</code></li>
                    <li>Inside the <code>form-group</code> <code>&lt;div&gt;</code> add a <code>&lt;label&gt;</code> element with the text <code>First Name</code></li>
                    <li>After the <code>&lt;label&gt;</code> element add an <code>&lt;input&gt;</code> add the following <code>props</code> to the <code>&lt;input&gt;</code>
                        <ol>
                            <li><code>name</code> set to <code>firstName</code></li>
                            <li><code>type</code> set to <code>text</code></li>
                            <li><code>className</code> set to <code>form-control</code></li>
                        </ol>
                        <Code html={examples.example33}/>
                    </li>
                    <li>Repeat the last three steps for <code>Last Name</code>
                        <ol>
                            <li>In the <code>&lt;label&gt;</code> put the text <code>Last Name</code></li>
                            <li>On the <code>&lt;input&gt;</code> set the <code>name</code> prop to <code>lastName</code></li>
                        </ol>
                        <Code html={examples.example34}/>
                    </li>
                </ol>
                <p>Below is an example of what the app should look like so far:</p>
                <img src={appRender7} className="img-pop"/>
                <p className="mt-3">Now that we have a couple inputs we need to use the components state to control them</p>
                <ol start="6">
                    <li>Add a <code>constructor</code> method to the <code>ContactForm</code> <code>class</code>
                        <ul>
                            <li>Remember the <code>constructor</code> method gets <code>props</code> as a parameter and that you need to call <code>super</code> with <code>props</code></li>
                        </ul>
                        <Code html={examples.example35}/>
                    </li>
                    <li>In the <code>constructor</code> method declare the <code>state</code> object and give it a property named <code>form</code> set to an object with the following properties:
                        <ol>
                            <li><code>firstName</code> set to <code>''</code></li>
                            <li><code>lastName</code> set to <code>''</code></li>
                        </ol>
                        <Code html={examples.example36}/> 
                    </li>
                    <li>In the <code>render</code> method, before the <code>return</code> statement, use destructuring to create constants for <code>firstName</code> and <code>lastName</code> from <code>this.state.form</code>
                        <Code html={examples.example37} className="img-pop"/>
                    </li>
                    <li>On the <code>input</code> for <b>First Name</b> add a <code>prop</code> of <code>value</code> and set it to <code>firstName</code>
                        <Code html={examples.example38} className="img-pop"/>
                    </li>
                    <li>On the <code>input</code> for <b>Last Name</b> add a <code>prop</code> of <code>value</code> and set it to <code>lastName</code>
                        <Code html={examples.example39} className="img-pop"/>
                    </li>
                </ol>
                <p>Now when you try to type in the inputs nothing should happen, you shouldn't see any characters appear in the inputs. The next step will be to create a method that handles updating state as someone types into the inputs</p>
                <ol start="11">
                    <li>In the <code>ContactForm</code> class add a method called <code>handleInputChange</code>
                        <ul>
                            <li>The method will receive a single parameter that will be an <code>event</code></li>
                            <li>Inside the method <code>console.log</code> the <code>event</code></li>
                        </ul>
                        <Code html={examples.example40}/>
                    </li>
                    <li>In the <code>constructor</code> method bind <code>this</code> to the <code>handleInputChange</code> method
                        <Code html={examples.example41}/>
                    </li>
                    <li>In the <code>render</code> method add a <code>onChange</code> <code>prop</code> set to <code>this.handleInputChange</code> to both inputs
                        <Code html={examples.example42}/>
                    </li>
                </ol>
                <p>Now when you type into one of the inputs you should see the <code>event</code> object in the <code>console</code></p>
                <img src={console3} className="img-pop"/>
                <ol start="14" className="mt-3">
                    <li>In the <code>handleInputChange</code> method update the <code>console.log</code> to log out <code>event.target.value</code>
                        <Code html={examples.example43}/>
                    </li>
                    <li>Add another <code>console.log</code> that logs out <code>event.target.name</code>
                        <Code html={examples.example44}/>
                    </li>
                    <li>Run your code and view what happens in the <code>console</code> when you type into either of the inputs. You should see the letter typed and the <code>name</code> of the input you are typing into
                        <img src={console4} className="img-pop"/>
                    </li>
                    <li className="mt-3">In the <code>handleInputChange</code> method use destructuring to create constants for <code>value</code> and <code>name</code> from <code>event.target</code>
                        <Code html={examples.example45} className="img-pop"/>
                    </li>
                    <li>Use destructuring to create a constant for <code>form</code> from <code>this.state</code>
                        <Code html={examples.example46} className="img-pop"/>
                    </li>
                    <li>Use the <code>name</code> constant to select the correct <code>key</code> in the <code>form</code> object and set it to the constant <code>value</code>
                        <Code html={examples.example47} noHide/>
                    </li>
                    <li>Use <code>this.setState</code> to update <code>form</code> in state, don't forget to use destructuring to set <code>form</code> to a new object
                        <Code html={examples.example48}/>
                    </li>
                    <li>Test your code. You should now be able to type in the inputs and have no errors in the console
                        <img src={appRender8} className="img-pop mt-3"/>
                        <p className="my-3">In the <code>console</code> you can see the <code>value</code> constant update as you type into the inputs</p>
                        <img src={console5} className="img-pop"/>
                        <p className="mt-3">Delete the two <code>console.log</code> from the <code>handleInputChange</code> method</p>
                        <Code html={examples.example49} text={{show: 'View Complete handleInputChange Method Example', hide: 'Hide Example'}} confirm/>
                    </li>
                    <li>Now that the component's <code>state</code> is controlling the inputs and storing our inputs values at the same time we can create a <code>handleSubmit</code> method. In the <code>ContactForm</code> <code>class</code> add a method called <code>handleSubmit</code></li>
                    <li>In the <code>handleSubmit</code> method <code>console.log</code> <code>this.state.form</code>
                        <Code html={examples.example50}/>
                    </li>
                    <li>In the <code>constructor</code> method of the <code>ContactForm</code> class <code>bind</code> <code>handleSubmit</code> to <code>this</code>
                        <Code html={examples.example51}/>
                    </li>
                    <li>In the <code>return</code> of the <code>render</code> method add a <code>&lt;button&gt;</code> inside the <code>&lt;form&gt;</code> at the bottom below the last <code>form-group</code>. Give your <code>&lt;button&gt;</code> the text of <code>Add Contact</code>
                        <Code html={examples.example52}/>
                    </li>
                    <li>Still in the <code>return</code> of the <code>render</code> method add an <code>onSubmit</code> <code>prop</code> to the <code>form</code> element. Set the <code>onSubmit</code> <code>prop</code> to <code>this.handleSubmit</code>
                        <Code html={examples.example53}/>
                    </li>
                    <li>Test your code. Enter some text into both <code>input</code> fields then click your <code>Add Contact</code> button. What happens?
                        <img src={appRender9} className="img-pop my-3"/>
                        <p>After you click <code>Add Contact</code> you'll notice that the inputs clear and you <b>don't</b> see the <code>console.log</code> from the <code>handleSubmit</code> in the <code>console</code>. This is happening because the <code>form</code> is submitting and causing the page to refresh. We don't want this.</p>
                    </li>
                    <li>The <code>handleSubmit</code> method is getting a parameter passed into that is the <code>event</code>. Add a paramter called <code>event</code> to <code>handleSubmit</code> to catch the <code>event</code></li>
                    <li>Inside <code>handleSubmit</code>, before the <code>console.log</code>, call <code>event.preventDefault()</code>. This will stop the <code>form</code> from trying to submit and refresh the page
                        <Code html={examples.example54}/>
                    </li>
                    <li className="mb-3">Test your code again. Now when you add some text into the inputs and click <code>Add Contact</code> you should now see the <code>console.log</code> output from the <code>handleSubmit</code> method
                        <img src={appRender10} className="img-pop my-3"/>
                        <p>After clicking the <code>Add Contact</code> button you should see the following in the <code>console</code></p>
                        <img src={console6} className="img-pop"/>
                    </li>
                </ol>
                <p>The base for the contact form is complete. In the next feature sets we will add additional inputs and actually make the form add to the array of contacts.</p>
                <Code html={examples.example55} text={{show: 'View Complete src/components/app.js Example', hide: `Hide Example`}} confirm/>
                <Code html={examples.example56} text={{show: 'View Complete src/components/contact_form.js Example', hide: 'Hide Example'}} confirm/>
            </Card>
            <Card title="5" subtitle="Add more inputs">
                <p>We will be adding the two inputs we are missing to make a full contact object, <code>phone</code> and <code>email</code>. To make it easier to add inputs now and in the future we will make a new component for input fields called <code>Field</code></p>
                <ol>
                    <li>In the <code>src/components/</code> folder create a new file called <code>field.js</code></li>
                </ol>
                <p>In the <code>src/components/field.js</code> do the following:</p>
                <ol>
                    <li>import <code>React</code></li>
                    <li>Create a functional component. Don't forget to <code>export</code> your component
                        <Code html={examples.example57}/>
                    </li>
                    <li>From your component <code>return</code> a <code>&lt;div&gt;</code> that has a <code>class</code> of <code>form-group</code>. Wrap it in parentheses, there will be more than one line</li>
                    <li>Inside the <code>&lt;div&gt;</code> from the previous step add a <code>&lt;label&gt;</code> and a <code>&lt;input/&gt;</code> as siblings
                        <Code html={examples.example58}/>
                    </li>
                    <li>Add a <code>class</code> of <code>form-control</code> to the <code>&lt;input/&gt;</code>
                        <Code html={examples.example59}/>
                    </li>
                </ol>
                <p>In the <code>src/components/contact_form.js</code> file do the following:</p>
                <ol>
                    <li>import <code>Field</code> from <code>field.js</code> at the top of the file
                        <Code html={examples.example60}/>
                    </li>
                    <li>In the <code>return</code> of the <code>render</code> method delete everything inside <code>&lt;form&gt;</code> <b>EXCEPT</b> the <code>&lt;button&gt;</code>
                        <Code html={examples.example61}/>
                    </li>
                    <li>Add a <code>&lt;Field/&gt;</code> component inside of <code>&lt;form&gt;</code>
                        <Code html={examples.example62}/>
                    </li>
                    <li>Now we need to give <code>&lt;Field/&gt;</code> some information so it functions properly and displays the correct information to the user. We will pass the information using <code>props</code>. We will be adding a lot of the same stuff that was on the <code>&lt;input/&gt;</code> before. Add the following <code>props</code> to the <code>&lt;Field/&gt;</code> component:
                        <ul>
                            <li><code>name</code> set to <code>"firstName"</code></li>
                            <li><code>label</code> set to <code>"First Name"</code></li>
                            <li><code>type</code> set to <code>"text"</code></li>
                            <li><code>value</code> set to <code>&#123;firstName&#125;</code></li>
                            <li><code>onChange</code> set to <code>&#123;this.handleInputChange&#125;</code></li>
                        </ul>
                        <Code html={examples.example63}/>
                    </li>
                </ol>
                <p>To take advantage of the <code>props</code> we are passing into <code>&lt;Field/&gt;</code> we will need to make some some changes to the <code>Field</code> component</p>
                <p>In the <code>src/components/field.js</code> file do the following:</p>
                <ol>
                    <li>Inside the <code>Field</code> component, before the <code>return</code>, add a <code>console.log</code> to log out <code>props</code>
                        <Code html={examples.example64}/>
                    </li>
                    <li>Look at the <code>console</code> to see everything the <code>props</code> object now has in it:
                        <img src={console7} className="img-pop my-3"/>
                    </li>
                    <li>Have <code>props.label</code> print out between the <code>&lt;label&gt;&lt;/label&gt;</code> tags
                        <Code html={examples.example65}/>
                    </li>
                    <li>On the <code>&lt;input/&gt;</code> use destructuring to add all the contents of <code>props</code> onto <code>&lt;input/&gt;</code>
                        <Code html={examples.example66}/>
                    </li>
                    <li>Test your code. The <code>&lt;Field&gt;</code> component should now be fully functional. We should see the label on the input in the browser:
                        <img src={appRender11} className="img-pop my-3"/>
                        <p>After putting some text in the input and clicking the <code>Add Contact</code> button you should see the <code>firstName</code> property on the <code>state</code> object contains the value from the input. This is coming from the <code>console.log</code> in the <code>handleSubmit</code> method in the <code>ContactForm</code> class</p>
                        <img src={console8} className="img-pop"/>
                        <p className="mt-3">Remove the <code>console.log</code> from the <code>&lt;Field&gt;</code> component</p>
                    </li>
                </ol>
                <p>Now that the <code>&lt;Field&gt;</code> component is working we can utilize it to add the other three inputs: <code>lastName</code>, <code>phone</code>, and <code>email</code></p>
                <p>In the <code>src/components/contact_form.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>constructor</code> method add the following properties to the <code>form</code> object in <code>this.state</code>:
                        <ul>
                            <li><code>phone</code> set to <code>''</code></li>
                            <li><code>email</code> set to <code>''</code></li>
                        </ul>
                        <Code html={examples.example68}/>
                    </li>
                    <li>In the <code>render</code> method where we are utilizing destructuring to create constants for <code>firstName</code> and <code>lastName</code> add in <code>phone</code> and <code>email</code>
                        <Code html={examples.addPhoneEmail}/>
                    </li>
                    <li>In the <code>return</code> of the <code>render</code> method add another <code>&lt;Field/&gt;</code> component below the one for <code>firstName</code>. Give it the following <code>props</code>:
                        <ul>
                            <li><code>name</code> set to <code>"lastName"</code></li>
                            <li><code>label</code> set to <code>"Last Name"</code></li>
                            <li><code>type</code> set to <code>"text"</code></li>
                            <li><code>value</code> set to <code>&#123;lastName&#125;</code></li>
                            <li><code>onChange</code> set to <code>&#123;this.handleInputChange&#125;</code></li>
                        </ul>
                    </li>
                    <li>Add a third <code>&lt;Field/&gt;</code> component for a phone number. Giv it the following props:
                        <ul>
                            <li><code>name</code> set to <code>"phone"</code></li>
                            <li><code>label</code> set to <code>"Phone Number"</code></li>
                            <li><code>type</code> set to <code>"tel"</code></li>
                            <li><code>value</code> set to <code>&#123;phone&#125;</code></li>
                            <li><code>onChange</code> set to <code>&#123;this.handleInputChange&#125;</code></li>
                        </ul>
                    </li>
                    <li>Add one more <code>&lt;Field/&gt;</code> component for an email. Give it the following props:
                        <ul>
                            <li><code>name</code> set to <code>"email"</code></li>
                            <li><code>label</code> set to <code>"Email"</code></li>
                            <li><code>type</code> set to <code>"email"</code></li>
                            <li><code>value</code> set to <code>&#123;email&#125;</code></li>
                            <li><code>onChange</code> set to <code>&#123;this.handleInputChange&#125;</code></li>
                                        </ul>
                    </li>
                </ol>
                <Code html={examples.example67} text={{show: 'View Complete render Method Example', hide: 'Hide Example'}} confirm/>
                <ol start="6">
                    <li>Test your code. You should now be able to put info in all the inputs then see it printed in the <code>console</code> after the <code>Add Contact</code> button is clicked
                        <img src={appRender12} className="img-pop my-3"/>
                        <p className="my-3">After the <code>Add Contact</code> button is clicked you should see the form values logged in the <code>console</code></p>
                        <img src={console9} className="img-pop"/>
                    </li>
                </ol>
            </Card>
            <Card title="6" subtitle="Add contacts to the contact list">
                <p>Now that we have a fully functional contact form it's time to actually start adding the new data to the <code>contactData</code> array. However there is a problem, as it stands right now <Cc>ContactList/</Cc> is the owner of the <code>contactData</code> array. The problem is that <Cc>ContactList/</Cc> and <Cc>ContactForm</Cc> are siblings so there is no direct line of communication between them. The best and easiest way to solve this is to lift the <code>state</code> up to the <Cc>App/</Cc> component. So now we will import our "dummy data" into the <Cc>App/</Cc> component instead of <Cc>ContactList</Cc>. By lifting the <code>state</code> up to <Cc>App/</Cc> now both <Cc>ContactList/</Cc> and <Cc>ContactForm/</Cc> will have access to the <code>contactData</code> array.</p>
                <p>In the <code>src/components/contact_list.js</code> file do the following:</p>
                <ol>
                    <li>At the top of the file delete the <code>import</code> statement for <code>ContactData</code></li>
                    <li>In the <code>ContactList</code> class delete the <code>constructor</code> method</li>
                    <li>In the <code>render</code> method, on the line that is creating the <code>list</code> constant change <code>state</code> to <code>props</code>
                        <p>(<i>Do not change anything inside the anonymous function in <code>map</code></i>)</p>
                        <Code html={examples.example69} noHide/>
                        <p className="text-center"><b>- TO -</b></p>
                        <Code html={examples.example70} noHide/>
                        <p>We changed <code>state</code> to <code>props</code> because the <Cc>ContactList</Cc> component no longer has any data on its <code>state</code>. We will be passing the contact data through props now.</p>
                        <p><b>THIS WILL BREAK YOUR APP FOR NOW</b></p>
                    </li>
                </ol>
                <Code html={examples.example71} text={{show: 'View Updated src/components/contact_list.js Example', hide: 'Hide Example'}} confirm/>
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Convert the <Cc>App/</Cc> component into a <code>class</code> component. Don't forget to add <code>&#123;Component&#125;</code> to the <code>import</code> statement at the top of the page
                        <Code html={examples.example72}/>
                    </li>
                    <li>At the top of the file <code>import</code> <code>contactData</code> from <code>../data/contacts</code>
                        <Code html={examples.example73}/>
                    </li>
                    <li>Add a <code>constructor</code> method to the <Cc>App/</Cc> class
                        <ol>
                            <li>Have the <code>constructor</code> method takes a parameter named <code>props</code></li>
                            <li>In the <code>constructor</code> method call the <code>super</code> method and pass in <code>props</code> as an argument</li>
                            <li>Create the <code>this.state</code> object and give it the following property:
                                <ul>
                                    <li><code>contacts</code> set to <code>contactData</code></li>
                                </ul>
                            </li>
                        </ol>
                        <Code html={examples.example74}/>
                    </li>
                    <li>In the <code>return</code> of the <code>render</code> method add a <code>prop</code> to the <Cc>ContactList/</Cc> component called <code>contacts</code> set to <code>this.state.contacts</code>
                        <Code html={examples.example75}/>
                    </li>
                </ol>
                <p>Test your code, your app should work again.</p>
                <img src={appRender13} className="img-pop"/>
                <Code html={examples.example76} text={{show: 'View src/components/app.js Example', hide: 'Hide Example'}}  confirm/>
                <p>Still in the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Create an <code>addContact</code> method inside the <code>App</code> class
                        <ol>
                            <li><code>addContact</code> should take a single parameter named <code>contact</code></li>
                            <li>Add a <code>console.log</code> to <code>addContact</code>. Log out <code>contact</code>
                                <Code html={examples.example77} noHide/>
                            </li>
                        </ol>
                    </li>
                    <li>In the <code>constructor</code> method <code>bind</code> <code>this</code> to <code>addContact</code>
                        <Code html={examples.example78}/>
                    </li>
                    <li>In the <code>return</code> of the <code>render</code> method add a <code>prop</code> to <Cc>ContactForm/</Cc> called <code>add</code> set it to <code>this.addContact</code>
                        <Code html={examples.example79}/>
                    </li>
                </ol>
                <p>In the <code>src/components/contact_form.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>handleSubmit</code> method call <code>this.props.add</code> pass in <code>this.state.form</code> as an argument
                        <Code html={examples.example80}/>
                    </li>
                    <li>Test your code. Fill out the form and submit it. Now in the <code>console</code> you should see two <code>console.log</code>s, the first one is from the <Cc>ContactForm/</Cc> <code>handleSubmit</code> method and the second one is from the <Cc>App/</Cc> <code>addContact</code> method
                        <img src={console10} className="img-pop my-3"/>
                    </li>
                </ol>
                <p>Now that we have the contact form communicating with the app component we can update the <code>addContact</code> method in the <Cc>App/</Cc> component</p>
                <p>In the <code>src/components/app.js</code></p>
                <ol>
                    <li>In the <code>addContact</code> method use <code>this.setState</code> to add the new <code>contact</code> to the <code>this.state.contacts</code> array. Below are two options for updating <code>state</code>, choose only one.
                        <ul>
                            <li>You can use destructuring to create a new array and add in <code>contact</code>
                                <Code html={examples.example81} text={{show: 'View example using destructuring', hide: 'Hide destructuring example'}}/>
                            </li>
                            <li>Another option is to use <code>slice</code> to create a new array then use <code>unshift</code> or <code>push</code> to add the new <code>contact</code> to the array
                                <Code html={examples.example82} text={{show: 'View example using slice and unshift', hide: 'Hide slice/unshift example'}}/>
                            </li>
                        </ul>
                    </li>
                </ol>
                <p>You should now have a functional form that actually adds contacts to the list of contacts</p>
                <img src={appRender14} className="img-pop"/>
                <Code html={examples.example83} text={{show: 'View Full src/components/app.js Example', hide: 'Hide app.js Example'}} confirm/>
                <Code html={examples.example84} text={{show: 'View Full src/components/contact_card.js Example', hide: 'Hide contact_card.js Example'}} confirm/>
                <Code html={examples.example85} text={{show: 'View Full src/components/contact_form.js Example', hide: 'Hide contact_form.js Example'}} confirm/>
                <Code html={examples.example86} text={{show: 'View Full src/components/contact_list.js Example', hide: 'Hide contact_list.js Example'}} confirm/>
                <Code html={examples.example87} text={{show: 'View Full src/components/field.js Example', hide: 'Hide field.js Example'}} confirm/>
            </Card>
            <Card title="7" subtitle="Make the form reset" optional>
                <p>In this optional feature set we will create a <code>reset</code> method for the form so we can add a <code>Clear Form</code> button and have the form reset after a contact has been added. Since all the inputs are controlled by <code>state</code>, the <code>reset</code> method will set <code>state</code> back to its starting values</p>
                <p>In the <code>src/components/contact_form.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>ContactForm</code> class add a method called <code>reset</code>
                        <ul>
                            <li><code>reset</code> will take no parameters</li>
                        </ul>
                    </li>
                    <li>In the <code>reset</code> method use <code>this.setState</code> to set all the <code>form</code> values back to <code>''</code>
                        <Code html={examples.example88}/>
                    </li>
                    <li>In the <code>constructor</code> method <code>bind</code> <code>this</code> to the <code>reset</code> method</li>
                    <li>In the <code>return</code> of the <code>render</code> method add another <Cc>button</Cc> below the "Add Contact" <Cc>button</Cc>. Give it the text "Clear Form" and add the following <code>props</code>:
                        <ul>
                            <li><code>type</code> set to <code>"button"</code></li>
                            <li><code>onClick</code> set to <code>&#123;this.reset&#125;</code></li>
                        </ul>
                        <Code html={examples.example89}/>
                    </li>
                    <li>Test your code. Add some text into all four inputs then click the "Clear Form" button, the form should clear. If the form doesn't clear revisit the steps for this feature set, or ask for help if you are stuck.</li>
                    <li>Now that we have a working <code>reset</code> method we can utilize it in the <code>handleSubmit</code> method. At the the end of the <code>handleSubmit</code> method add a call to <code>this.reset</code>
                        <Code html={examples.example90}/>
                    </li>
                    <li>Test your code, after submitting the form the form should clear itself.</li>
                </ol>
                <Code html={examples.example91}/>
            </Card>
            <Card title="Extras" subtitle="Some extra stuff you can try">
                <p>Here is a list of some stuff you can add to this prototype for further practice</p>
                <ol>
                    <li>Clean up the code:
                        <ol>
                            <li>Convert <code>ContactList</code> to a functional component. It no longer needs to be a class component</li>
                            <li>Remove all the <code>console.log</code>s</li>
                            <li>Any other code clean up you can find</li>
                        </ol>
                    </li>
                    <li>Add some Bootstrap classes to the buttons and other elements to add more style to the app</li>
                    <li>Add inputs for a full address and update the <Cc>ContactCard/</Cc> component to display the full address of each contact. Below is an example of what you can do:
                        <img src={appRender15} className="img-pop"/>
                    </li>
                    <li>Add in some error handling to prevent empty fields from being added</li>
                    <li>Make the contacts searchable</li>
                    <li>Make the contacts sortable</li>
                    <li>Add delete functionality</li>
                    <li>Make the contacts editable</li>
                </ol>
            </Card>
        </div>
    )
}
