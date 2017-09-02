import React, { Component } from 'react';
import TopSellingList from '../../components/Homepage/TopSellingList';
import SearchResultList from '../../components/Search/Search';
import './Homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchInitiated: false,
    };
  }

  render() {
    const { isSearchInitiated } = this.state;
    return (
      <div className="homePageContainer">
        <div className="container">
          {!isSearchInitiated && <TopSellingList medicines={[]} />}
          {isSearchInitiated && <SearchResultList medicines={[]} />}
        </div>
      </div>
    );
  }
}

export default Homepage;
