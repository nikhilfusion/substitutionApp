import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedPincode: '444444',
    };
  }

  render() {
    return (
      <div className="headerContainer">
        <div className="container">
          <div className="ribbon">Ribbon container</div>
          <h1>BEST DRUG VALUE</h1>
          <div className="pincodeContainer">Pincode here {this.state.selectedPincode}</div>
          <div className="searchContainer">
            <SearchBar />
          </div>
          <div className="impactContainer">Impact here</div>
        </div>
      </div>
    );
  }
}

export default Header;
