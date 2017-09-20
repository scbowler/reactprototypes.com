import { combineReducers } from 'redux';
import inst from './inst-reducer';
import reduxIntro from './redux-intro-reducer.js';

export default combineReducers({ inst, reduxIntro });
