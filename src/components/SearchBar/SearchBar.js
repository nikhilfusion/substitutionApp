import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  render() {
    return (
      <div className="searchBarContainer">
        <input
          className="searchBarInput"
          type="text"
          placeholder="seach medicine"
          value={this.state.searchTerm}
          onChange={event => this.setState({ searchTerm: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
