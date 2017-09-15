import React from 'react';
import MoviesContainer from './movies_container';
import axios from 'axios';
import './app.css';

export default () => {

    return (
        <div className="main-background">
            <div className="container">
                <h1 className="text-center py-4">iTunes Top 10 Movies</h1>
                <MoviesContainer/>
            </div>
        </div>
    )
}
