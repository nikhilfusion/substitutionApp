import React, { Component } from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';
import MedicineCard from '../../components/Common/MedicineCard';
import './ComparePage.css';

class ComparePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primaryMedicineId: '12345',
      medicines: localStorage.getItem('medicines') || [],
    };
  }
  render() {
    const substitutes = [];
    return (
      <div className="comparePageContainer">
        <div className="comparePageHeader">
          <div className="container">
            <Link className="homeButton" to="/">
              <Glyphicon glyph="home" />
            </Link>
            <Link className="cartButton" to="/cart">
              <Glyphicon glyph="shopping-cart" />
            </Link>
            Substitutes for XYZ
          </div>
        </div>
        <div className="substituteListContainer">
          {substitutes.map(subs => <MedicineCard medName={subs} />)}
        </div>
      </div>
    );
  }
}

export default ComparePage;
