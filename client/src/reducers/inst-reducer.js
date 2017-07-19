import types from '../actions/types';
const DEFAULT_STATE = { all: null, current: null, redirect: null };

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_ALL:
            return { ...state, all: action.payload, redirect: null }
        case types.SET_INST:
            return { ...state, current: action.payload, redirect: null }
        case types.REDIRECT:
            return { ...state, redirect: action.payload }
        default:
            return state;
    }
}
