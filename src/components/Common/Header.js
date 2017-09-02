import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Header.css';

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
        <div className="ribbon hidden-sm hidden-xs">
          <div className="container">
            <div className="nav-pill">What is BDV?</div>
            <div className="nav-pill">Why BDV?</div>
            <div className="nav-pill">How it works?</div>
            <div className="nav-pill">Benefits</div>
            <div className="nav-pill">Download App</div>
          </div>
        </div>
        <div className="container">
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
