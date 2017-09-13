import React from 'react';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';
import Cc from '../../../code_component';
import ourMacarons from './images/our_macarons_screenshot.png';
import ourMacaronsDesign from './images/our_macarons_design.png';
import giftParties from './images/gift_parties_screenshot.png';
import giftPartiesDesign from './images/gift_parties_design.png';
import contact from './images/contact_screenshot.png';
import contactDesign from './images/contact_design.png';

export default function(){ 
    return (
        <div>
            <Card title="Getting Started" subtitle="Do this before starting">
                <ol>
                    <li>In your terminal navigate to your <code>react_mboutique</code> project</li>
                    <li>If you have not done so already add and commit your work from <code>MBoutique part 1</code> to the <code>home-page</code> branch
                        <ol>
                            <li><code>git add .</code></li>
                            <li><code>git commit -m "Completed home page"</code></li>
                        </ol>
                    </li>
                    <li>Push the <code>home-page</code> branch to GitHub
                        <ul>
                            <li><code>git push origin home-page</code></li>
                        </ul>
                    </li>
                    <li>In <b>your</b> <code>react_mboutique</code> repo on Github create a pull request from <code>home-page</code> to <code>master</code></li>
                    <li>Merge the pull request</li>
                    <li>After the merge finishes click the button that appears to delete the <code>home-page</code> branch</li>
                    <li>In your terminal switch to the <code>master</code> branch
                        <ul>
                            <li><code>git checkout master</code></li>
                        </ul>
                    </li>
                    <li>Pull the <code>master</code> branch to update your local version
                        <ul>
                            <li><code>git pull origin master</code></li>
                        </ul>
                    </li>
                    <li>Delete the <code>home-page</code> branch
                        <ul>
                            <li><code>git branch -d home-page</code></li>
                        </ul>
                    </li>
                    <li>Create a new branch named <code>routing</code>
                        <ul>
                            <li><code>git checkout -b routing</code></li>
                        </ul>
                    </li>
                    <li>You're ready to start the project</li>
                </ol>
            </Card>
            <Card title="1" subtitle="Add routing to the &lt;App/&gt; component">
                <ol>
                    <li>Install React Router into your MBoutique project
                        <ul>
                            <li><code>npm install --save react-router-dom</code></li>
                        </ul>
                    </li>
                    <li>Setup the base routing in <code>src/components/app.js</code>
                        <ul>
                            <li>Just start with the <Cc>Home/</Cc> component for now. We will add the other pages as they are built</li>
                        </ul>
                    </li>
                </ol>
            </Card>
            <Card title="2" subtitle="Create the &lt;OurMacarons/&gt; component">
                <ol>
                    <li>Based on the design docs create the main content for the "Our Macarons" page
                        <ol>
                            <li className="mb-3"><b>Our Macarons Screenshot</b>
                                <div>
                                    <img src={ourMacarons} className="img-pop"/>
                                </div>
                            </li>
                            <li className="mb-3"><b>Our Macarons Design Doc</b>
                                <div>
                                    <img src={ourMacaronsDesign} className="img-pop"/>
                                </div>
                            </li>
                        </ol>
                    </li>
                    <li>Import the newly created <Cc>OurMacarons/</Cc> component into <Cc>App/</Cc> and add it to the routing</li>
                </ol>
            </Card>
            <Card title="3" subtitle="Create the &lt;GiftsParties/&gt; component">
                <ol>
                    <li>Based on the design docs create the main content for the "Gifts &amp; Parties" page
                        <ol>
                            <li className="mb-3"><b>Gifts &amp; Parties Screenshot</b>
                                <div>
                                    <img src={giftParties} className="img-pop"/>
                                </div>
                            </li>
                            <li className="mb-3"><b>Gifts &amp; Parties Design Doc</b>
                                <div>
                                    <img src={giftPartiesDesign} className="img-pop"/>
                                </div>
                            </li>
                        </ol>
                    </li>
                    <li>Import the newly created <Cc>GiftsParties/</Cc> component into <Cc>App/</Cc> and add it to the routing</li>
                </ol>
            </Card>
            <Card title="4" subtitle="Create the &lt;Contact/&gt; component">
                <ol>
                    <li>Based on the design docs create the main content for the "Contact" page
                        <ol>
                            <li className="mb-3"><b>Contact Screenshot</b>
                                <div>
                                    <img src={contact} className="img-pop"/>
                                </div>
                            </li>
                            <li className="mb-3"><b>Contact Design Doc</b>
                                <div>
                                    <img src={contactDesign} className="img-pop"/>
                                </div>
                            </li>
                        </ol>    
                    </li>
                    <li>Import the newly created <Cc>Contact/</Cc> component into <Cc>App/</Cc> and add it to the routing</li>
                </ol>
            </Card>
            <Card title="5" subtitle="Update the &lt;Header/&gt; component">
                <ol>
                    <li>Update the nav menu to use <Cc>Link</Cc> components</li>
                </ol>
            </Card>
        </div>
    )
}
