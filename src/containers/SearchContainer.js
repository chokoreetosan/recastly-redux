import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

const mapStateToProps = (state)=>{
  return {
    currentVideo: state.video,
    videoList: state.videos
  }

}
const mapDispatchToProps = (dispatch) =>{
  return {
    handleSearchInputChange: (query) => dispatch(handleVideoSearch(query))
  };
}
var SearchContainer = connect(mapStateToProps,mapDispatchToProps)(Search);


export default SearchContainer;
