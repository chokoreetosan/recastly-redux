import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

var SearchContainer = () => {
const mapStateToProps = (state)=>{
  return {
    currentVideo: state.currentVideo,
    videoList: state.videoList
  }

}
const mapDispatchToProps = (dispatch) =>{
  return {
    handleInputChange: (query) => dispatch(handleVideoSearch(query))
  };
}

return connect(mapStateToProps,mapDispatchToProps)(Search);
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
