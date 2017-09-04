import React, { Component } from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';
import MedicineCard from '../../components/Common/MedicineCard';
import './ComparePage.css';
import api from '../../api/api';

class ComparePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primaryMedicineId: '12345',
      substitutes: [],
      medicineName: ''
    };
  }

  componentWillMount() {
    api.getTopSellerMedicines().then((medicines) => {
      medicines.topSeller.forEach((seller) => {
        if(seller[Object.keys(seller)[0]]._medicineId == this.props.params.primaryMedicineId) {
          console.log('seller[Object.keys(seller)[0]]')
          this.setState({substitutes: seller[Object.keys(seller)[0]]._substitute, medicineName: seller[Object.keys(seller)[0]]._medicineName});
        }
      })
    })
  }
  render() {
    const { substitutes, medicineName } = this.state;
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
            Substitutes for {medicineName}
          </div>
        </div>
        <div className="substituteListContainer">
          {substitutes.map((subs, key) => <MedicineCard medName={subs} isSubsBanner={true} key={key}/>)}
        </div>
      </div>
    );
  }
}

export default ComparePage;
