import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="seach medicine" />
        <div>search: {this.state.searchTerm}</div>
      </div>
    );
  }
}

export default SearchBar;
