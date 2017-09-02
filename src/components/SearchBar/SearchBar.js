import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.changeMedicine = this.changeMedicine.bind(this);
  }

  changeMedicine(event){
    this.setState({ searchTerm: event.target.value });
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="searchBarContainer">
        <input
          className="searchBarInput"
          type="text"
          placeholder="seach medicine"
          value={this.state.searchTerm}
          onChange={this.changeMedicine}
        />
      </div>
    );
  }
}

export default SearchBar;
