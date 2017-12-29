import React from 'react';
import Card from '../../../cards/instruction-card';

export default function(){ 
    return (
        <div>
            <Card title="Getting Started" subtitle="Do this before starting">
                <ol>
                    <li>In your browser navigate to <a href="https://github.com/Learning-Fuze/react_memory_match.git" target="_blank">https://github.com/Learning-Fuze/react_memory_match.git</a></li>
                    <li>Fork the repo to your GitHub account</li>
                    <li>Open your terminal</li>
                    <li>In your terminal navigate to your <code>front_end</code> folder. (<i>your folder name may be slightly different</i>)</li>
                    <li>Clone the <code>react_memory_match</code> project from your account
                        <ul>
                            <li><code>git clone https://github.com/[Your Username]/react_memory_match.git</code></li>
                        </ul>
                    </li>
                    <li>Change directories into the newly cloned react_memory_match project directory
                        <ul>
                            <li><code>cd react_memory_match</code></li>
                        </ul>
                    </li>
                    <li>Install all necessary dependencies
                        <ul>
                            <li><code>npm install</code></li>
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
            <Card title="What to do">
                <p>Create a Memory Match game using React</p>
                <p>You can use your existing Memory Match theme or create a new one</p>
                <p>You will need to create an Array of card objects to keep in a components state. Use the Array of cards to show / hide cards and check for game conditions such as card match, game won, etc</p>
                <p>Any questions reach out to an instructor</p>
            </Card>
        </div>
    )
}
