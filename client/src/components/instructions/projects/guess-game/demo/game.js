import React, { Component } from 'react';
import History from './history';
import './game.css';

class Game extends Component {
    constructor(props){
        super(props);

        this.state = {
            randNum: null,
            userGuess: '',
            message: 'Make a guess',
            numGuesses: 0,
            playable: true,
            shake: false,
            record: localStorage.getItem('lowScore') || 'Not Set',
            history: []
        }

        this.reset = this.reset.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGuess = this.handleGuess.bind(this);
    }

    componentWillMount(){
        this.setRandNum();
    }

    setRandNum(){
        this.setState({
            randNum: Math.floor(Math.random() * 9999) + 1
        });
    }

    reset(){
        this.setState(
            {
                userGuess: '',
                message: 'Make a guess',
                numGuesses: 0,
                playable: true,
                shake: false,
                lastGuess: 'None',
                history: []
            }
        )

        this.setRandNum();
    }

    handleInputChange(e){
        
        if(this.state.playable){
            this.setState({
                userGuess: e.target.value
            });
        }
    }

    updateLowestScore(score){
        const record = localStorage.getItem('lowScore');

        if(!record || record > score){
            localStorage.setItem('lowScore', score);
            this.setState({record: score});
        }
    }

    handleGuess(e){
        e.preventDefault();

        const { playable, userGuess, randNum, numGuesses, history } = this.state;

        if(playable && userGuess){
            const updates = {
                numGuesses: numGuesses + 1
            }
    
            if(userGuess != randNum){
                updates.message = (userGuess > randNum) ? 'Too High' : 'Too Low';
            } else {
                e.target.getElementsByClassName('user-input').userGuess.blur();
                updates.message = 'You Guessed It!';
                updates.playable = false;
                this.updateLowestScore(updates.numGuesses);
            }

            updates.shake = true;
            updates.history = [{guess: userGuess, result: updates.message}, ...history];
            updates.userGuess = '';

            this.setState(updates);

            setTimeout(() => this.setState({shake: false}), 250);
        }
    }

    render(){
        const {userGuess, message, shake, numGuesses, record, history, playable} = this.state;
        return (
            <div>
                <h1 className="text-center my-3">Guess The Number Between 1 - 10,000</h1>
                <form onSubmit={this.handleGuess}>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <input className="form-control form-control-lg user-input" onChange={this.handleInputChange} name="userGuess" type="number" value={userGuess}/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <button type="button" onClick={this.reset} className={`btn btn-lg btn-outline-danger col-2 m-3 ${playable ? '' : 'blink-danger'}`}>Reset Game</button>
                        <button className="btn btn-lg btn-outline-success col-2 m-3">Guess</button>
                    </div>
                </form>
                <h1 className="text-center"><span className={shake ? 'shake' : ''}>{message}</span></h1>
                <p className="text-center">Current Number of Guesses: <b>{numGuesses}</b> | Lowest Score: <b>{record}</b></p>
                <History list={history}/>
            </div>
        )
    }
}

export default Game;
