import React from 'react';


class Search extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: ''
  //   };
  // }

  handleInputChange(e) {
    // this.props.getYouTubeVideos(e.target.value);
    // this.setState({
    //   value: e.target.value
    // });

    console.log(this.props);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.props.value}
          onChange={(e) => {this.props.handleSearchInputChange(e.target.value)}}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
