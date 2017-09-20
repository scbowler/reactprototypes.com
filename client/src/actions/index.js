import types from './types';
import * as prototypes from '../components/instructions/prototypes';
import * as projects from '../components/instructions/projects';

export function getAll(loc){
    let payload = prototypes;
    if(loc === '/projects'){
        payload = projects;
    }

    return {
        type: types.GET_ALL,
        payload
    }
}

export function setActive(path){
    const key = pathToKey(path);
    const selected = prototypes[key] || projects[key];

    if(!selected){
        return {
            type: types.REDIRECT,
            payload: 'goBack'
        }
    }
    
    return {
        type: types.SET_INST,
        payload: selected
    }
}

function pathToKey(path){
    const pathArr = path.split('-').map((part, index) => {
        if(index > 0){
            return part.slice(0, 1).toUpperCase() + part.slice(1);
        }
        return part;
    });

    return pathArr.join('');
}

/* ===== React Redux Intro Demo ===== */

export function updateTime(){
    return {
        type: types.UPDATE_TIME,
        payload: new Date().toLocaleTimeString()
    }
}
