import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios';

class MoviesContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            movies: []
        }
    }

    componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        
        axios.get(url).then((resp) => {
            this.setState({
                movies: resp.data.feed.entry
            });
        });
    }
    
    render(){
        const moviesList = this.state.movies.map((movieInfo, index) => {
            return <Movie key={index} info={movieInfo} />
        });

        return (<div className="card-columns">{moviesList}</div>);
    }
}

export default MoviesContainer;
