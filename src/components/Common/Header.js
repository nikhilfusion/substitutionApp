import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      selectedPincode: '444444',
      searchText: ''
    };
  }

  onChange(value){
    this.setState({'searchText': value});
    this.props.onChange(value);
  }

  render() {
    return (
      <div className="headerContainer">
        <div className="ribbon">
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
            <SearchBar onChange= {(val) => { this.onChange(val) }}/>
          </div>
          <div className="impactContainer">Impact here</div>
        </div>
      </div>
    );
  }
}

export default Header;
