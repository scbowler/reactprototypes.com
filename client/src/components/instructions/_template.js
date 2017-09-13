import React from 'react';
import Intro from '../gettingStarted';
import Card from '../../../cards/instruction-card';
import Code from '../../../code';
import Cc from '../../../code_component';
import examples from './examples';

// NOTE: Change branch prop in <Intro/>
// Use <code></code> for in line code/command examples
// Use <Cc/> to surround text in < >
// Use <Code/> for large multi line code examples
export default function(){ 
    return (
        <div>
            <Intro branch="change-me"/>
            <Card title="1" subtitle="Something fun">
                <ol>
                    <li>Coming Soon!</li>
                </ol>
            </Card>
        </div>
    )
}
