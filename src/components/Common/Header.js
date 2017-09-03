import React, { Component } from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Header.css';

const pincodes = [
  '123456',
  '234567',
  '456789',
];

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
          <h1 className="siteTitle">
            <Link className="homeButton visible-sm visible-xs" to="/">
              <Glyphicon glyph="home" />
            </Link>
            <span className="bestText">BEST</span>
            <span className="drugText">DRUG</span>
            <span className="valueText">VALUE</span>
          </h1>
          <div className="pincodeContainer hidden-xs hidden-sm">
            <div className="pincodeTitle">Available at</div>
            {pincodes.map(pincode => <div className="pincodeValue">{pincode}</div>)}
          </div>
          <div className="searchContainer">
            <SearchBar onChange= {(val) => { this.onChange(val) }}/>
          </div>
          <div className="impactContainer hidden-sm hidden-xs">Impact here</div>
        </div>
      </div>
    );
  }
}

export default Header;
