import { combineReducers } from 'redux';
import videoListReducer from '../reducers/videoList.js';
import currentVideoReducer from '../reducers/currentVideo.js';

var rootReducer = combineReducers({videoList:videoListReducer, currentVideo:currentVideoReducer});


export default rootReducer;
