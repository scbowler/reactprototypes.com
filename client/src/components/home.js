import React, {Component} from 'react';
import ListContainer from './list-container';

class Home extends Component {
    
    componentWillMount(){
        const { match, history } = this.props;
        if(match.url === '/') history.push('/prototypes');
    }
    
    render(){
        return (
            <div>
                <header>
                    <h1>React Prototypes</h1>
                    <h3>LearningFuze</h3>
                </header>

                <ListContainer/>
            </div>
        )
    }
};

export default Home;
