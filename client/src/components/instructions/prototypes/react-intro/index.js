import React from 'react';
import Card from '../../../cards/instruction-card';

export default function(){ 
    return (
        <div>
            <Card title="Feature Set 1" subtitle="Set up the React prototypes repository">
                <ol>
                    <li>Fork the react-prototypes repo
                        <ol>
                            <li>Visit the <a href="https://github.com/Learning-Fuze/react-prototypes" target="_blank">React Prototypes Repo</a></li>
                            <li>Fork the repo to your Github account</li>
                        </ol>
                    </li>
                    <li>Clone your forked version of the react-prototypes repo
                        <ol>
                            <li>In your <code>LFZ</code> folder create a new folder called <code>frontend</code></li>
                            <li>Navigate to the newly created <code>frontend</code> folder in your terminal</li>
                            <li>Run the following command in your terminal to clone the react-prototypes repo:
                                <ul><li><code>git clone https://github.com/[your username]/react-prototypes.git</code></li></ul>
                            </li>
                        </ol>
                    </li>
                    <li>Change directories into <code>react-prototypes</code> (<i>in your terminal</i>)
                        <ul><li><code>cd react-prototypes</code></li></ul>
                    </li>
                    <li>Install dependencies
                        <ul>
                            <li><code>npm install</code></li>
                            <li><i>Depending on your computer this may take a few minutes</i></li>
                        </ul>
                    </li>
                    <li>Create a new branch for this prototype
                        <ol>
                            <li>The branch name should be <code>react-intro</code></li>
                            <li><code>git checkout -b react-intro</code></li>
                        </ol>
                    </li>
                    <li>Start the dev server for react
                        <ol>
                            <li><code>npm start</code></li>
                        </ol>
                    </li>
                    <li>Open your browser to <code>localhost:3000</code>
                        <ul>
                            <li>If all went well you should see the following in your browser</li>
                        </ul>
                    </li>
                </ol>
            </Card>
            <Card title="Feature Set 2" subtitle="Getting started with JSX">
                <ol>
                    <li>Coming Soon!</li>
                </ol>
            </Card>
        </div>
    )
}
