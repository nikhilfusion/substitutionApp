import React, { Component } from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';
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
            BEST DRUG VALUE
          </h1>
          <div className="pincodeContainer hidden-xs hidden-sm">Pincode here {this.state.selectedPincode}</div>
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
