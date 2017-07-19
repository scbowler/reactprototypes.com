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
        const { match: { url }, all } = this.props;

        let listJSX = <EmptyCard title="Loading..."/>;

        if(all){
            if(Object.keys(all).length === 0){
                listJSX = <EmptyCard title="No items at this time"/>;
            } else {
                listJSX = Object.keys(all).map((key, index) => {
                    const item = all[key]
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
