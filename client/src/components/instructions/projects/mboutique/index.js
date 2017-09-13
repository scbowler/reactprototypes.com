import React from 'react';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';
import Cc from '../../../code_component';
import homeDetails from './images/home_details.png';
import homeScreenshot from './images/home_screenshot.png';

export default function(){ 
    return (
        <div>
            <Card title="Getting Started" subtitle="Do this before starting">
                <ol>
                    <li>In your browser navigate to <a href="https://github.com/Learning-Fuze/react_mboutique">https://github.com/Learning-Fuze/react_mboutique</a></li>
                    <li>Fork the repo to your GitHub account</li>
                    <li>Open your terminal</li>
                    <li>In your terminal navigate to your <code>front_end</code> folder. (<i>your folder name may be slightly different</i>)</li>
                    <li>Clone the <code>react_mboutique</code> project from your account
                        <ul>
                            <li><code>git clone https://github.com/[Your Username]/react_mboutique.git</code></li>
                        </ul>
                    </li>
                    <li>Change directories into the newly cloned <code>react_mboutique</code> project directory
                        <ul>
                            <li><code>cd react_mboutique</code></li>
                        </ul>
                    </li>
                    <li>Install all necessary dependencies
                        <ul>
                            <li><code>npm install</code></li>
                        </ul>
                    </li>
                    <li>Create a new branch called <code>home-page</code>
                        <ul>
                            <li><code>git checkout -b home-page</code></li>
                        </ul>
                    </li>
                    <li>Start React dev server
                        <ul>
                            <li><code>npm start</code></li>
                        </ul>
                    </li>
                    <li>You are ready to start working on the project</li>
                </ol>
            </Card>
            <Card title="Design Docs" subtitle="Images to show the layout of the home page">
                <h3 className="mt-4">Home page screenshot</h3>
                <img src={homeScreenshot} className="img-pop"/>

                <h3 className="mt-4">Home page design doc</h3>
                <img src={homeDetails} className="img-pop"/>

                <p className="mt-4"><b>All image files are located in <code>src/assets/images/</code></b></p>
            </Card>
            <Card title="1" subtitle="Create a &lt;Header/&gt; component">
                <ol>
                    <li>Create a new component that will be the header for the home page</li>
                    <li>The <Cc>Header/</Cc> component should include the main banner image (hero image) at the top</li>
                    <li>The <Cc>Header/</Cc> component should take a single <code>prop</code> that will contain the image to display as the main banner (hero image)
                        <ul>
                            <li>This will be useful for the other pages</li>
                        </ul>
                    </li>
                </ol>
            </Card>
            <Card title="2" subtitle="Create a &lt;Footer/&gt; component">
                <ol>
                    <li>Create a new component for the footer of the home page</li>
                </ol>
            </Card>
            <Card title="3" subtitle="Create a &lt;Home/&gt; component">
                <ol>
                    <li>Create a new component that will display all the main content of the home page</li>
                    <li>Utilize the <Cc>Header/</Cc> and <Cc>Footer/</Cc> components within the <Cc>Home/</Cc> component in the appropriate places</li>
                </ol>
            </Card>
        </div>
    )
}
