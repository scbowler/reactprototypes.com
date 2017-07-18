import React from 'react';
import Card from '../../cards/instruction-card';

export default function test1(){ 
    return (
        <div>
            <Card title="Feature Set 1" subtitle="Only the beginning">
                <ol>
                    <li>Fork the react-prototypes repo</li>
                    <li>Clone your forked version of the react-prototypes repo
                        <ol>
                            <li>Make sure to clone it into a place where you can find it</li>
                        </ol>
                    </li>
                </ol>
            </Card>
            <Card title="Feature Set 2" subtitle="Getting started with JSX">
                <ol>
                    <li>Fork the react-prototypes repo</li>
                    <li>Clone your forked version of the react-prototypes repo
                        <ol>
                            <li>Make sure to clone it into a place where you can find it</li>
                        </ol>
                    </li>
                </ol>
            </Card>
        </div>
    )
}
