import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmptyCard from './cards/empty-card';
import Card from './cards/card';
import { getAll } from '../actions';

class List extends Component {
    componentWillMount(){
        this.props.getAll(this.props.match.url);
    }

    render(){
        const { url } = this.props.match;

        let listJSX = <EmptyCard title="Loading..."/>;

        console.log('ALL:', this.props.all);

        if(this.props.all){
            // TODO: check for empty object
            listJSX = <EmptyCard title="No Projects at this time"/>;
            if(url === '/prototypes'){
                listJSX = Object.keys(this.props.all).map((key, index) => {
                    const item = this.props.all[key]
                    const to = `${url}/${item.to}`;
                    return <Card {...this.props} item={item} key={index} to={to} />
                });
            }
        }
        
        return (
            <div>
                {listJSX}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        all: state.inst.all
    }
}

export default connect(mapStateToProps, {getAll})(List);
