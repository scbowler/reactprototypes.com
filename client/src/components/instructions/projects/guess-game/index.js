import React from 'react';
import Card from '../../../cards/instruction-card';
import Game from './demo/game';

export default function(){ 
    return (
        <div>
            <Card title="Getting Started" subtitle="Do this before starting">
                <ol>
                    <li>In your browser navigate to <a href="https://github.com/Learning-Fuze/react_guess_game">https://github.com/Learning-Fuze/react_guess_game</a></li>
                    <li>Fork the repo to your GitHub account</li>
                    <li>Open your terminal</li>
                    <li>In your terminal navigate to your <code>front_end</code> folder. (<i>your folder name may be slightly different</i>)</li>
                    <li>Clone the <code>react_guess_game</code> from your account
                        <ul>
                            <li><code>git clone https://github.com[Your Username]/react_guess_game.git</code></li>
                        </ul>
                    </li>
                    <li>Change directories into the newly cloned react_guess_game project directory
                        <ul>
                            <li><code>cd react_guess_game</code></li>
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
            <Card title="Overview" subtitle="What you'll be building">
                <p>In this project you will be building a simple number guessing game. The game will have a single input where a user can enter a number to make a guess. The game should also have two buttons, one to <code>reset</code> the game and one to <code>submit</code> a users guess. The user should get feedback about if they guessed correctly, too high, or too low.</p>
                <ol className="mb-4">
                    <li><b>Prerequisites</b>
                        <ol>
                            <li><a href="http://reactprototypes.com/prototypes/react-intro">React Intro Prototype</a></li>
                            <li><a href="http://reactprototypes.com/prototypes/react-components">React Functional Components Prototype</a></li>
                            <li><a href="http://reactprototypes.com/prototypes/react-component-state">React Class Components with State Prototype</a></li>
                            <li><a href="http://reactprototypes.com/prototypes/react-inputs-forms">React Handling Inputs / Forms Prototype</a></li>
                        </ol>
                    </li>
                    <li><b>Feature Set 1</b>
                        <ul>
                            <li>Build out the minimum amount of JSX required for the game</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 2</b>
                        <ul>
                            <li>Add basic functionality to the game</li>
                        </ul>
                    </li>
                    <li><b>Feature Set 3</b>
                        <ul>
                            <li>Make it your own</li>
                        </ul>
                    </li>
                    <li><b>Demo</b>
                        <ul>
                            <li>Below is a fully functional version of the game. You do not need to style/design your game in the same way. You can also add different features to your version.</li>
                        </ul>
                    </li>
                </ol>
                <Game/>
            </Card>
            <Card title="1" subtitle="Build out the minimum amount of JSX needed for the game to work">
                <p>In the <code>src/components/game.js</code> file do the following:</p>
                <ol>
                    <li>The game component should display an <code>input</code>, a <code>button</code> to reset the game, and a <code>button</code> to submit a guess</li>
                    <li>For best results wrap the input in a <code>form</code> element. This will make it easy to submit a guess when a user presses the <kbd>Enter</kbd> key</li>
                    <li>Add an area to display messages to the user based on their guess</li>
                </ol>
            </Card>
            <Card title="2" subtitle="Build out basic functionality">
                <p>Below are just high level instructions and do not have to be followed exactly. They are meant as a road map for anyone that doesn't know where to start. You can build the game any way you like, just keep the main premise.</p>
                <p>In the <code>src/components/game.js</code> file do the following:</p>
                <ol>
                    <li>Add a property to <code>state</code> to hold a randomly generated number</li>
                    <li>Create a method to set the new property to a random number</li>
                    <li>Connect the <code>input</code> to <code>state</code></li>
                    <li>Create a <code>reset</code> method that resets the <code>state</code> to its starting values</li>
                    <li>Have the <code>reset</code> button call the <code>reset</code> method</li>
                    <li>Use a lifecycle method to set the random number when the component is first added to the DOM</li>
                    <li>Create a method to handle guess submissions
                        <ol>
                            <li>The method should check if the guess is equal to the random number</li>
                            <li>If the guess is not equal determine if it was higher or lower. Display something to the user to let them know if the guess was higher or lower</li>
                            <li>If the numbers are equal, display something to the user letting them know they guessed the correct number</li>
                        </ol>
                    </li>
                </ol>
            </Card>
            <Card title="3" subtitle="Make it your own">
                <p>Come up with some additional features to add to your game. Here is a list of ideas to help get you started.</p>
                <ol>
                    <li>Utilize Bootstrap or your own styling to improve the look of the game</li>
                    <li>Don't let the user submit an empty guess</li>
                    <li>Have the input accept only numbers</li>
                    <li>Add a guess counter</li>
                    <li>Utilize <code>localStorage</code> or <code>cookies</code> to save a users best score (<i>lowest</i>)</li>
                    <li>Add a history</li>
                    <li>Have the background change color depending how close the user's guess was to the random number</li>
                    <li>Allow the user to choose the range for the random number</li>
                    <li>Anything else you can think of</li>
                </ol>

            </Card>
        </div>
    )
}
