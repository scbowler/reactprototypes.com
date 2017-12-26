import React from 'react';
import Card from '../../../cards/instruction-card';

export default function(){ 
    return (
        <div>
            <Card title="Getting Started" subtitle="Do this before starting">
                <ol>
                    <li>In your browser navigate to <a href="https://github.com/Learning-Fuze/react_sweet_corner.git" target="_blank">https://github.com/Learning-Fuze/react_sweet_corner.git</a></li>
                    <li>Fork the repo to your GitHub account</li>
                    <li>Open your terminal</li>
                    <li>In your terminal navigate to your <code>front_end</code> folder. (<i>your folder name may be slightly different</i>)</li>
                    <li>Clone the <code>react_sweet_corner</code> project from your account
                        <ul>
                            <li><code>git clone https://github.com/[Your Username]/react_sweet_corner.git</code></li>
                        </ul>
                    </li>
                    <li>Change directories into the newly cloned react_sweet_corner project directory
                        <ul>
                            <li><code>cd react_sweet_corner</code></li>
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
                <p>Use the design docs located in the <code>design_docs</code> folder to create the four page Sweet Corner website</p>
                <p>You will need to install React Router to handle the routing: <code>npm install --save react-router-dom</code></p>
                <p>All images are located in the <code>src/assets/images</code> folder</p>
                <p>There is an included font that is not the exact same as what is used in the design docs. You can use the included font or find a better one on your own</p>
                <p>Any questions reach out to an instructor</p>
            </Card>
        </div>
    )
}
