import React from 'react';
import Intro from '../gettingStarted';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';
import Cc from '../../../code_component';
import examples from './examples';
import Demo from './example/app';
import appRender1 from './images/appRender1.png';
import appRender2 from './images/appRender2.png';
import appRender3 from './images/appRender3.png';
import appRender4 from './images/appRender4.png';
import appRender5 from './images/appRender5.png';
import appRender6 from './images/appRender6.png';
import appRender7 from './images/appRender7.png';
import appRender8 from './images/appRender8.png';
import appRender9 from './images/appRender9.png';

export default function(){ 
    return (
        <div>
            <Intro branch="styles-images"/>
            <Card title="Example" subtitle="What you will be building">
                <Demo/>
            </Card>
            <Card title="1" subtitle="Initial setup">
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Import React
                        <Code {...examples.importReact} noHide/>
                    </li>
                    <li>Create a functional component called <code>App</code> that returns a <Cc>div</Cc> with a <Cc>h1</Cc> inside of it
                        <ol>
                            <li>Add a class of <code>main-container</code> to the <Cc>div</Cc></li>
                            <li>Add a class of <code>main-title</code> to the <Cc>h1</Cc></li>
                            <li>Add the text "Scrapbook" within the <Cc>h1</Cc></li>
                        </ol>
                        <em>**Remember to export your <Cc>App/</Cc> component</em>
                        <Code {...examples.fs1e1}/>
                    </li>
                </ol>
                <p>In the <code>src/index.js</code> file do the following:</p>
                <ol>
                    <li>
                        Import the <Cc>App/</Cc> component
                        <Code {...examples.fs1e2} noHide/>
                    </li>
                    <li>
                        Replace the first argument of the <code>ReactDOM.render</code> method with the <Cc>App/</Cc> component
                        <Code {...examples.fs1e3}/>
                    </li>
                </ol>
                <p>Test your code. You should see something similar to the below image in your browser:</p>
                <img src={appRender1} className="img-pop"/>
                <p className="mt-4">In the <code>src/components/</code> folder create a file named <code>app.css</code></p>
                <p>In the <code>src/components/app.css</code> file do the following:</p>
                <ol>
                    <li>Add a CSS rule for <code>.main-container</code> with the following properties:
                        <ol>
                            <li><code>background-color</code>: <code>lightblue</code></li>
                            <li><code>min-height</code>: <code>100vh</code></li>
                            <li><code>padding</code>: <code>15px</code></li>
                        </ol>
                        <Code {...examples.fs1e4}/>
                    </li>
                    <li>Add a CSS rule for <code>.main-title</code> with the following properties:
                        <ol>
                            <li><code>color</code>: <code>white</code></li>
                            <li><code>font-size</code>: <code>3.5rem</code></li>
                            <li><code>text-align</code>: <code>center</code></li>
                        </ol>
                        <Code {...examples.fs1e5}/>
                    </li>
                </ol>
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Import the <code>app.css</code> file
                        <Code {...examples.fs1e6} noHide/>
                    </li>
                </ol>
                <p>Test your code. You should see something similar to the below image in your browser:</p>
                <img src={appRender2} className="img-pop mb-4"/>
                <Code {...examples.fs1e7} confirm/>
                <Code {...examples.fs1e8} confirm/>
                <Code {...examples.fs1e9} confirm/>
            </Card>
            <Card title="2" subtitle="Create a Scrapbook component">
                <p>In the <code>src/components/</code> folder create a file called <code>scrapbook.js</code></p>
                <p>In the <code>src/components/scrapbook.js</code> file do the following:</p>
                <ol>
                    <li>Create a basic functional component that returns a <Cc>div</Cc>
                        <ol>
                            <li>Add a class of <code>scrapbook-container</code> to the <Cc>div</Cc></li>
                            <li>Add some text inside the <Cc>div</Cc></li>
                        </ol>
                        <em>**Remember to export your <Cc>Scrapbook/</Cc> component</em>
                        <Code {...examples.fs2e1}/>
                    </li>
                </ol>
                <p>In the <code>src/components/app</code> file do the following:</p>
                <ol>
                    <li>Import the <Cc>Scrapbook/</Cc> component
                        <Code {...examples.fs2e2}/>
                    </li>
                    <li>Add the <Cc>Scrapbook/</Cc> component into the <code>return</code> statement of the <Cc>App/</Cc> component just below the <Cc>h1</Cc>
                        <Code {...examples.fs2e3}/>
                    </li>
                </ol>
                <p>Test your code. You should now see the text from the <code>Scrapbook/</code> component in the browser:</p>
                <img src={appRender3} className="img-pop mb-4"/>
                <p>In the <code>src/components/</code> folder create a new file named <code>scrapbook.css</code></p>
                <p>In the <code>src/components/scrapbook.css</code> file do the following:</p>
                <ol>
                    <li>Add a CSS rule for <code>.scrapbook-container</code> with the following properties:
                        <ol>
                            <li><code>margin</code>: <code>10px auto</code></li>
                            <li><code>min-height</code>: <code>85vh</code></li>
                            <li><code>position</code>: <code>relative</code></li>
                            <li><code>width</code>: <code>80vw</code></li>
                        </ol>
                        <Code {...examples.fs2e4}/>
                    </li>
                </ol>
                <p>In the <code>src/components/scrapbook.js</code> file do the following:</p>
                <ol>
                    <li>Import the CSS from <code>src/components/scrapbook.css</code>
                        <Code {...examples.fs2e5}/>
                    </li>
                </ol>
                <p>Now we have gutters for our scrapbook container along with a set height and width</p>
                <p>Test your code. You should see the gutters now:</p>
                <img src={appRender4} className="img-pop"/>
                <p className="mb-4"><strong>NOTE:</strong> <em>The above image is shown with <code>.scrapbook-container</code> selected in the Chrome dev tools</em></p>
                <p>In the <code>src/components/</code> folder create a new folder named <code>images</code></p>
                <p>Download an image from the internet and save it in the newly created <code>images</code> folder</p>
                <p>In the <code>src/components/scrapbook.js</code> file do the following:</p>
                <ol>
                    <li>Import your image into the <Cc>Scrapbook/</Cc> component
                        <Code {...examples.fs2e6}/>
                    </li>
                    <li>Remove the text from the <Cc>div</Cc> that has the class of <code>scrapbook-container</code></li>
                    <li>Add an <Cc>img</Cc> element inside the <Cc>div</Cc> that has the class of <code>scrapbook-container</code></li>
                    <li>Add a <code>src</code> to the <Cc>img</Cc> element
                        <Code {...examples.fs2e7}/>
                    </li>
                </ol>
                <Code {...examples.fs2e8} confirm/>
                <p>Test you code. You should now see your image in the browser:</p>
                <img src={appRender5} className="img-pop"/>
            </Card>
            <Card title="3" subtitle="Dynamically load multiple images">
                <p>Since we ultimately want to load multiple images all with some custom CSS we will create an array of objects. Each object will describe what image to load and what css to apply to the image</p>
                <p>In the <code>src/components</code> folder create a file named <code>image_data.js</code></p>
                <p>In the <code>src/components/image_data.js</code> file do the following:</p>
                <ol>
                    <li>Import your image from the <code>src/components/images/</code> folder
                        <Code {...examples.fs3e1}/>
                    </li>
                    <li>Export default an empty array
                        <Code {...examples.fs3e2}/>
                    </li>
                    <li>Add an object to the array with the following properties:
                        <ol>
                            <li><code>src</code> set to your image</li>
                            <li><code>style</code> set to an empty object</li>
                        </ol>
                        <Code {...examples.fs3e3}/>
                    </li>
                </ol>
                <Code {...examples.fs3e4}/>
                <p>In the <code>src/components/</code> folder create a new file called <code>scrapbook_images.js</code></p>
                <p>In the <code>src/components/scrapbook_images.js</code> file do the following:</p>
                <ol>
                    <li>Import react
                        <Code {...examples.importReact}/>
                    </li>
                    <li>Create a basic functional component that returns a single <Cc>div</Cc> with some text in it</li>
                    <li>Before the <code>return</code> statement add a <code>console.log</code> to log out <code>props</code></li>
                </ol>
                <Code {...examples.fs3e5} confirm/>
                <p>In the <code>src/components/scrapbook.js</code> file do the following:</p>
                <ol>
                    <li>Remove the import statement for your image</li>
                    <li>Import the <code>imageData</code> from the <code>image_data.js</code> file
                        <Code {...examples.fs3e6}/>
                    </li>
                    <li>Import the <Cc>ScrapbookImage/</Cc> component
                        <Code {...examples.fs3e7}/>
                    </li>
                    <li>Remove any text from the <Cc>div</Cc> with the class of <code>scrapbook_container</code></li>
                    <li>Add the <Cc>ScrapbookImage/</Cc> component inside the <Cc>div</Cc></li>
                    <li>Give <Cc>ScrapbookImage/</Cc> a <code>prop</code> named <code>about</code> set to the first object in the <code>imageData</code> array
                        <Code {...examples.fs3e8}/>
                    </li>
                </ol>
                <Code {...examples.fs3e9}/>
                <p>Test your code. Look in your console to view the props from the <Cc>ScrapbookImage/</Cc> component</p>
                <img src={appRender6} className="img-pop"/>
                <p>Since we now have access to the <code>imageData</code> object we can use it to set the <code>src</code> on an <Cc>img</Cc> element</p>
                <p>In the <code>src/components/scrapbook_images.js</code> file do the following:</p>
                <ol>
                    <li>Inside the component before the <code>return</code> statement use destructuring to create a <code>const</code> for <code>src</code> from <code>props.about</code>
                        <Code {...examples.fs3e10}/>
                    </li>
                    <li>Remove the <Cc>div</Cc> from the <code>return</code> statement</li>
                    <li>Add a <Cc>img/</Cc> to the <code>return</code> statement</li>
                    <li>Add a <code>src</code> prop to the <Cc>img/</Cc> and set the value to the <code>src</code> <code>const</code>
                        <Code {...examples.fs3e11}/>
                    </li>
                </ol>
                <p>Test your code. You should see your image displayed in the browser again:</p>
                <img src={appRender5} className="img-pop"/>
                <p>Now we can add more images to our app just by adding more objects to the <code>imageData</code> array then looping through it</p>
                <p>Download 7 more images to the <code>src/components/images/</code> directory. You should now have a total of 8 images</p>
                <p>In the <code>src/components/image_data.js</code> file do the following:</p>
                <ol>
                    <li>Import all of your image files
                        <Code {...examples.fs3e13}/>
                    </li>
                    <li>Add an image object to the array for each of your images. Leave the style objects empty for now. For a reminder below is an example of an image object:
                        <Code {...examples.fs3e14} noHide/>
                    </li>
                </ol>
                <Code {...examples.fs3e15} confirm/>
                <p>In the <code>src/components/scrapbook.js</code> file do the following:</p>
                <ol>
                    <li>Inside the component definition before the <code>return</code> statement create a <code>const</code> called <code>images</code> equal to the result of calling <code>map</code> on <code>imageData</code>
                        <Code {...examples.fs3e16}/>
                    </li>
                    <li>Add an anonymous function as an argument to the <code>map</code> call, <code>map</code> will pass two arguments to your anonymous function: <code>item</code> from the array and the <code>index</code> of that item
                        <Code {...examples.fs3e17}/>
                    </li>
                    <li>In the anonymous function <code>return</code> the <Cc>ScrapbookImage/</Cc> component and add the following <code>props</code>
                        <ol>
                            <li><code>key</code> set to <code>index</code></li>
                            <li><code>about</code> set to <code>img</code> (<em>or whatever you named the first parameter of your anonymous function</em>)</li>
                        </ol>
                        <Code {...examples.fs3e18}/>
                    </li>
                    <li>In the <code>return</code> statement of the component, delete the contents of the <Cc>div</Cc> with the class <code>scrapbook-container</code></li>
                    <li>Use the <code>images</code> <code>const</code> inside the newly empty <Cc>div</Cc>
                        <Code {...examples.fs3e19}/>
                    </li>
                </ol>
                <Code {...examples.fs3e20} confirm/>
                <p>Test your code. You should now see all your images in the browser:</p>
                <img src={appRender7} className="img-pop"/>
                <p className="mb-4"><em>Note that all the images are different sizes and don't all fit on the screen. You might have different results depending on the images you chose</em></p>
                <p>To fix the sizing issue we will create a CSS <code>class</code></p>
                <p>In the <code>src/components/scrapbook_images.js</code> file do the following:</p>
                <ol>
                    <li>On the <Cc>img/</Cc> tag that is being returned from the component add a class of <code>scrapbook-image</code>
                        <Code {...examples.fs3e21}/>
                    </li>
                </ol>
                <Code {...examples.fs3e22} confirm/>
                <p>In the <code>src/components/scrapbook.css</code> file do the following:</p>
                <ol>
                    <li>Create a CSS rule for the <code>scrapbook-image</code> class. Have the rule do the following:
                        <ol>
                            <li>Set the <code>width</code> to <code>20%</code></li>
                            <li>Add a <code>border</code> that is <code>10px</code> thick, <code>solid</code>, and <code>#fff</code></li>
                        </ol>
                        <Code {...examples.fs3e23}/>
                    </li>
                </ol>
                <p>Test your code. You should see all your images the same <code>width</code> and with a <code>10px border</code>:</p>
                <img src={appRender8} className="img-pop"/>
            </Card>
            <Card title="4" subtitle="Make it look like a scrapbook">
                <p>Now we can utilize the style objects in our <code>image_data</code> to add custom CSS to each image</p>
                <p>Below is just an example of what you can do. You can follow the instructions exactly or you can use your own CSS to make your scrapbook look however you want.</p>
                <p>In the <code>src/components/scrapbook.css</code> file do the following:</p>
                <ol>
                    <li>In the <code>.scrapbook-image</code> rule, add <code>position: absolute</code></li>
                </ol>
                <p>In the <code>src/components/image_data.js</code> file do the following:</p>
                <ol>
                    <li>In the first image object add the following styles to the <code>style</code> object:
                        <ol>
                            <li><code>left</code> set to <code>'5%'</code></li>
                            <li><code>transform</code> set to <code>'rotate(-10deg)'</code></li>
                        </ol>
                    </li>
                    <li>In the second image object add the following styles to the <code>style</code> object:
                        <ol>
                            <li><code>left</code> set to <code>'40%'</code></li>
                            <li><code>transform</code> set to <code>'rotate(6deg)'</code></li>
                        </ol>
                    </li>
                    <li>In the third image object add the following styles to the <code>style</code> object:
                        <ol>
                            <li><code>right</code> set to <code>'15%'</code></li>
                            <li><code>transform</code> set to <code>'rotate(-9deg)'</code></li>
                        </ol>
                    </li>
                    <li>In the fourth image object add the following styles to the <code>style</code> object:
                        <ol>
                            <li><code>left</code> set to <code>'8%'</code></li>
                            <li><code>top</code> set to <code>28%</code></li>
                            <li><code>transform</code> set to <code>'rotate(8deg)'</code></li>
                        </ol>
                    </li>
                    <li>In the fifth image object add the following styles to the <code>style</code> object:
                        <ol>
                            <li><code>left</code> set to <code>'37%'</code></li>
                            <li><code>top</code> set to <code>25%</code></li>
                            <li><code>transform</code> set to <code>'rotate(-12deg)'</code></li>
                        </ol>
                    </li>
                    <li>In the sixth image object add the following styles to the <code>style</code> object:
                        <ol>
                            <li><code>right</code> set to <code>'12%'</code></li>
                            <li><code>top</code> set to <code>26%</code></li>
                            <li><code>transform</code> set to <code>'rotate(10deg)'</code></li>
                        </ol>
                    </li>
                    <li>In the seventh image object add the following styles to the <code>style</code> object:
                        <ol>
                            <li><code>left</code> set to <code>'25%'</code></li>
                            <li><code>top</code> set to <code>48%</code></li>
                            <li><code>transform</code> set to <code>'rotate(-5deg)'</code></li>
                        </ol>
                    </li>
                    <li>In the eighth image object add the following styles to the <code>style</code> object:
                        <ol>
                            <li><code>right</code> set to <code>'25%'</code></li>
                            <li><code>top</code> set to <code>52%</code></li>
                            <li><code>transform</code> set to <code>'rotate(16deg)'</code></li>
                        </ol>
                    </li>
                </ol>
                <Code {...examples.fs3e24} confirm/>
                <p>In the <code>src/components/scrapbook_image.js</code> file do the following:</p>
                <ol>
                    <li>On the line that you are creating a <code>const</code> for <code>src</code> from <code>props.about</code> also create a <code>const</code> for <code>style</code>
                        <Code {...examples.fs3e25}/>
                    </li>
                    <li>On the returned <Cc>img</Cc> add a <code>prop</code> of <code>style</code> set to <code>style</code>
                        <Code {...examples.fs3e26}/>
                    </li>
                </ol>
                <Code {...examples.fs3e27} confirm/>
                <p>Test your code. You should now see your images displayed in a traditional scrapbook style in the browser. Feel free to adjust the CSS to your liking</p>
                <img src={appRender9} className="img-pop"/>
            </Card>
            <Card title="Customize" subtitle="Ideas of things you can add">
                <ol>
                    <li>Add hover effects</li>
                    <li>Add click functionality to each image that opens a modal of the image</li>
                    <li>Add ability to add URLS for additional images</li>
                    <li>Add options for the user to chose initial blur and grayscale options or any other CSS options</li>
                    <li>Add ability to choose initial image size</li>
                </ol>
            </Card>
        </div>
    )
}
