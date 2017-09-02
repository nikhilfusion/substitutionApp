import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopSellingList from '../../components/Homepage/TopSellingList';
import SearchResultList from '../../components/Search/index';
import './Homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPincode: '444444',
      searchInitiated: false,
    };
  }s

  render() {
    return (
      <div className="homePageContainer">
        <div className="headerContainer">
          <div className="ribbon">Ribbon container</div>
          <h1>BEST DRUG VALUE</h1>
          <div className="pincodeContainer">Pincode here {this.state.selectedPincode}</div>
          <div className="searchContainer">
            <SearchBar />
          </div>
          <div className="impactContainer">Impact here</div>
        </div>
        <TopSellingList medicineName="xyz" sellingPrice="90" packForm="tablet" />
        <SearchResultList medicineName="abc" sellingPrice="190" packForm="capsule" />
      </div>
    );
  }
}

export default Homepage;
