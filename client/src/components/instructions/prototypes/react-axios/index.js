import React from 'react';
import Intro from '../gettingStarted';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';
import Cc from '../../../code_component';
import examples from './examples';
import AxiosDemo from './demo/app';
import appRender1 from './images/appRender1.png';
import appRender2 from './images/appRender2.png';
import appRender3 from './images/appRender3.png';
import appRender4 from './images/appRender4.png';
import appRender5 from './images/appRender5.png';
import console1 from './images/console1.png';
import console2 from './images/console2.png';
import console3 from './images/console3.png';
import console4 from './images/console4.png';
import console5 from './images/console5.png';
import console6 from './images/console6.png';

export default function(){ 
    return (
        <div>
            <Intro branch="react-axios"/>
            <Card title="Overview" subtitle="An overview of what you will be creating">
                <h2>Demo:</h2>
                <AxiosDemo/>
            </Card>
            <Card title="1" subtitle="Initial app setup">
                <p>For the initial app set up we will build the skeletons for the three main components we will be utilizing for this prototype: <Cc>App/</Cc>, <Cc>MoviesContainer/</Cc>, and <Cc>Movie/</Cc></p>
                <ol>
                    <li>The <Cc>Movie/</Cc> component will be used to display a single movies information</li>
                    <li>The <Cc>MoviesContainer/</Cc> component will get a list of the top ten movies on iTunes then create an array of <Cc>Movie/</Cc> components to display to the user</li>
                    <li>Ths <Cc>App/</Cc> component will be the main container for the entire application</li>
                </ol>
                <p>In the <code>src/components/</code> folder create a new file named <code>movies.js</code></p>
                <p>In the <code>src/components/movies.js</code> file do the following:</p>
                <ol>
                    <li>Create a functional component</li>
                    <li>The component should <code>return</code> a <Cc>div</Cc></li>
                    <li>Inside the <Cc>div</Cc> add a <Cc>h3</Cc> with the text of <code>Movie</code></li>
                </ol>
                <Code {...examples.fs1e1} confirm/>
                <p>In the <code>src/components/</code> folder create a file named <code>movie_container.js</code></p>
                <p>In the <code>src/components/movie_container.js</code> file do the following:</p>
                <ol>
                    <li>Create a class component</li>
                    <li>Import the <Cc>Movie/</Cc> component</li>
                    <li>The component should render a <Cc>div</Cc></li>
                    <li>Inside the <Cc>div</Cc> add a <Cc>h2</Cc> with the text of <code>Movie Container</code></li>
                    <li>Below the <Cc>h2</Cc> add a <Cc>Movie/</Cc> component</li>
                    <li>Don't forget to export the component</li>
                </ol>
                <Code {...examples.fs1e2} confirm/>
                <p>In the <code>src/components/app.js</code> file do the following:</p>
                <ol>
                    <li>Create a functional component</li>
                    <li>Import the <Cc>MoviesContainer</Cc> component</li>
                    <li>The component should render a <Cc>div</Cc> with a class of <code>container</code></li>
                    <li>Inside the <Cc>div</Cc> add a <Cc>h1</Cc> with a class of <code>text-center</code> and the text <code>Axios Demo</code></li>
                    <li>Below the <Cc>h1</Cc> add the <Cc>MoviesContainer/</Cc> component</li>
                </ol>
                <Code {...examples.fs1e3} confirm/>
                <p>After completing this feature set you should see this in your browser:</p>
                <img src={appRender1} className="img-pop"/>
            </Card>
            <Card title="2" subtitle="Utilize Axios to get the top 10 movies on iTunes">
                <p>Install axios into your project. In your terminal to the following:</p>
                <ol>
                    <li>Verify that you are in the <code>react-prototypes</code> directory
                        <ul>
                            <li>In Mac terminal or bash in windows: <code>pwd</code> will print the current directory</li>
                            <li>In Windows command prompt: <code>dir</code> will print the current directory</li>
                        </ul>
                    </li>
                    <li>Install Axios
                        <ul>
                            <li><code>npm install --save axios</code></li>
                        </ul>
                    </li>
                </ol>
                <p>In the <code>src/components/movies_container.js</code> file do the following:</p>
                <ol>
                    <li>Import axios from axios
                        <Code {...examples.fs2e1}/>
                    </li>
                    <li>Add a <code>componentWillMount</code> method to the <code>MoviesContainer</code> class
                        <Code {...examples.fs2e2}/>
                    </li>
                </ol>
                <p>The next few steps will be inside of the <code>componentWillMount</code> method</p>
                <ol start="3">
                    <li>Create a <code>const</code> to hold the iTunes API URL <code>http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json</code>
                        <Code {...examples.fs2e3}/>
                    </li>
                    <li>Use Axios to make a <code>get</code> request to the iTunes API url
                        <Code {...examples.fs2e4}/>
                    </li>
                    <li>Add <code>.then()</code> onto your request to catch the resolved promise
                        <Code {...examples.fs2e5}/>
                    </li>
                    <li>Add an anonymous function as an argument to <code>then</code> (use a "fat arrow" anonymous function)
                        <Code {...examples.fs2e6}/>
                    </li>
                    <li>The anonymous function will get the response from the request passed in as a parameter, add a parameter to catch it then <code>console.log</code> the result
                        <Code {...examples.fs2e7}/>
                    </li>
                </ol>
                <p>Run your code then check the console in your browser. You should see an object that resembles this:</p>
                <img src={console1} className="img-pop"/>
                <p className="mt-4">The data we want to get is the array of the top 10 movies which is located at: <code>resp.data.feed.entry</code></p>
                <img src={console2} className="img-pop"/>
                <p className="mt-4">Next we want to save the data to <code>state</code> but we need to first create the <code>state</code> in the <code>constructor</code> method</p>
                <ol start="8">
                    <li>In the <code>MoviesContainer</code> class add a <code>constructor</code> method</li>
                    <li>The <code>constructor</code> method needs a parameter of <code>props</code></li>
                    <li>Inside the <code>constructor</code> method call the <code>super</code> method and pass in <code>props</code> as an argument</li>
                    <li>Set <code>this.state</code> equal to an object. Give the object the following property:
                        <ol>
                            <li><code>movies</code> set to <code>[]</code></li>
                        </ol>
                    </li>
                </ol>
                <Code {...examples.fs2e8} confirm/>
                <p>Now we can go back to the <code>componentWillMount</code> method and add the movies array to <code>state</code></p>
                <ol start="12">
                    <li>In the anonymous function where we logged the server response use <code>this.setState</code> to set <code>movies</code> to <code>resp.data.feed.entry</code>
                        <Code {...examples.fs2e9}/>
                    </li>
                    <li>In the <code>render</code> method add a <code>console.log</code> to log out <code>this.state</code>
                        <Code {...examples.fs2e10}/>
                    </li>
                </ol>
                <p>Run your code, you should now see the state logged out in the <code>console</code></p>
                <img src={console3} className="img-pop"/>
                <p className="mt-4">Notice that <code>this.state</code> shows up twice once when the component first loads then again after the state has been updated from the Axios call. The first time <code>this.state</code> shows it is empty then after the Axios call <code>this.state</code> has the array of the ten movie objects</p>
                <img src={console4} className="img-pop"/>
                <p className="mt-4">If you see similar output in your <code>console</code> you have successfully completed this feature set</p>
            </Card>
            <Card title="3" subtitle="Display the data from the API to the user">
                <h3 className="text-danger"><b>NOTE:</b> You might get a different top 10 movies list compared to the examples</h3>
                <p className="mt-4">In the <code>src/components/movies_container.js</code> file do the following:</p>
                <ol>
                    <li>In the <code>render</code> method use <code>map</code> to create an array of <Cc>Movie/</Cc> components from <code>this.state.movies</code>
                        <ol>
                            <li>Create a <code>const</code> called <code>movieList</code> to hold the array</li>
                            <li>Set <code>movieList</code> equal to the result of using <code>map</code> on <code>this.state.movies</code>
                                <Code {...examples.fs3e1}/>
                            </li>
                            <li>Give <code>map</code> an anonymous function as an argument</li>
                            <li>The anonymous function will get two parameters. The first parameter is the item from the array, in this case <code>movieInfo</code>, and the second parameter is the <code>index</code> of that item
                                <Code {...examples.fs3e2}/>
                            </li>
                            <li><code>return</code> the <Cc>Movie/</Cc> component from the anonymous function and give the <Cc>Movie/</Cc> component the following <code>props</code>
                                <ul>
                                    <li><code>info</code> set to <code>movieInfo</code></li>
                                    <li><code>key</code> set to <code>index</code></li>
                                </ul>
                                <Code {...examples.fs3e3}/>
                            </li>
                        </ol>
                    </li>
                    <li>In the <code>return</code> of the <code>render</code> method delete the <Cc>h2</Cc> element and the <Cc>Movie/</Cc> component</li>
                    <li>Within the now empty <Cc>div</Cc> add the <code>movieList</code> array. Don't forget the <code>&#123; &#125;</code>
                        <Code {...examples.fs3e4}/>
                    </li>
                </ol>
                <p>Run your code. If all went well you should see "<b>Movie</b>" printed out ten times in the browser. Once for each item in the <code>movieList</code> array</p>
                <img src={appRender2} className="img-pop"/>
                <p className="mt-4">In the <code>src/components/movie.js</code> file do the following:</p>
                <ol>
                    <li>Add a <code>console.log</code> inside the <Cc>Movie/</Cc> component to log out <code>props.info</code>
                        <Code {...examples.fs3e5}/>
                    </li>
                </ol>
                <p>You should now see ten separate <code>console.log</code>s</p>
                <img src={console5} className="img-pop"/>
                <p className="mt-4">If we expand one of the objects in the <code>console</code> we can see all the information available to us for each movie</p>
                <img src={console6} className="img-pop"/>
                <p className="mt-4">For this feature set we will display the movie image, title, and summary</p>
                <ol start="2">
                    <li>Use destructuring to create a <code>const</code> for <code>info</code> from <code>props</code>
                        <Code {...examples.fs3e6}/>
                    </li>
                    <li>In the <code>return</code> of the component remove the <Cc>h3</Cc> element</li>
                    <li>In the now empty <Cc>div</Cc> add a <Cc>img/</Cc> element
                        <ol>
                            <li>Set the <code>src</code> to the third image from <code>'im:image'</code></li>
                            <li>I chose the third image because it is the largest</li>
                        </ol>
                        <Code {...examples.fs3e7}/>
                    </li>
                </ol>
                <p>Now you should be able to see all the movie images in the browser</p>
                <img src={appRender3} className="img-pop"/>
                <ol start="5" className="mt-4">
                    <li>Below the image add a <Cc>h3</Cc> that displays the <code>name</code> of the movie
                        <Code {...examples.fs3e8}/>
                    </li>
                </ol>
                <p>Run your code, now the movie name should appear below each image</p>
                <img src={appRender4} className="img-pop"/>
                <ol start="6" className="mt-4">
                    <li>Under the <Cc>h3</Cc> element add a <Cc>p</Cc> element that displays the movie's summary
                        <Code {...examples.fs3e9}/>
                    </li>
                </ol>
                <Code {...examples.fs3e10}/>
                <p>After successfully completing this feature set you should see something similar to the below example in your browser. ( <i>Your movies might be different</i> )</p>
                <img src={appRender5} className="img-pop"/>
            </Card>
            <Card title="Extras" subtitle="Some extra stuff you can try">
                <p>Below is a list of extra things you can try with this prototype</p>
                <ol>
                    <li>Clean up the code / remove all the <code>console.log</code>s</li>
                    <li>Use Bootstrap and / or custom CSS to display the movies in a more organized and readable format</li>
                    <li>Add more info about each movie</li>
                    <li>Add a link to iTunes to view more info</li>
                    <li>Add a link to the preview</li>
                    <li>Play the preview on your site</li>
                </ol>
            </Card>
        </div>
    )
}
