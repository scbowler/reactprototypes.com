import React from 'react';
import Intro from '../gettingStarted';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';

// NOTE: Change branch prop in <Intro/>
// Use <code></code> for in line code/command examples
// Use <Code/> for large multi line code examples
export default function(){ 
    return (
        <div>
            <Intro branch="change-me"/>
            <Card title="Feature Set 1" subtitle="Something fun">
                <ol>
                    <li>Coming Soon!</li>
                </ol>
            </Card>
        </div>
    )
}
