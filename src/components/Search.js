import React from 'react';


class Search extends React.Component {

  handleInputChange(e) {


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
