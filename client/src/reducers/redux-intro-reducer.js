import types from '../actions/types';

const DEFAULT_STATE = { time: new Date().toLocaleTimeString() };

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.UPDATE_TIME:
            return {...state, time: action.payload};
        default:
            return state;
    }
}
