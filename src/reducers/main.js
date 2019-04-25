import { combineReducers } from 'redux';
// import currentVideo from './currentVideo.js';
// import videoList from './videoList.js';
import videoListReducer from '../reducers/videoList.js';
import currentVideoReducer from '../reducers/currentVideo.js';

// var rootReducer = (state={videoList:[]},action) => {
//    combineReducers({videoList:videoListReducer, currentVideo:currentVideoReducer});
//   if (action.type === 'CHANGE_VIDEO_LIST'){
//     state.videoList =action.videoList;
//   }
var rootReducer = combineReducers({videoList:videoListReducer, currentVideo:currentVideoReducer});

//return state;
  // var newState = {videoList:[]};
  // if(action === undefined){
  //   throw 'Action is undefined';
  // }
  // var newReducer = combineReducers({videoList:videoListReducer, currentVideo:currentVideoReducer});
  // if(action.type ==='CHANGE_VIDEO_LIST'){
  //   newReducer.videoList(newState,'CHANGE_VIDEO_LIST')
  //  }
  // return newState;
//};

// {
//   videoList: {
//      ... state managed by the videoListReducer ...
//   },
//   currentVideo: {
//      ... state managed by the currentVideoReducer ...
//   }
// }




//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
