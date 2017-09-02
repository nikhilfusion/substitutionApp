import React, { Component } from 'react';
import SearchResultList from './SeachResultList';
import './Search.css';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      randomState: '',
    };
  }

  render() {
    return (
      <div className="searchPageContainer">
        <SearchResultList medicines={[]} />
      </div>
    );
  }
}

export default Search;
