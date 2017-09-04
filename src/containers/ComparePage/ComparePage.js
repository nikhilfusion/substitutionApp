import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';
import MedicineCard from '../../components/Common/MedicineCard';
import './ComparePage.css';
import api from '../../api/api';

class ComparePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primaryMedicine: {},
      substitutes: [],
      medicineName: ''
    };
  }

  componentWillMount() {
    // api.getTopSellerMedicines().then((medicines) => {
    //   medicines.topSeller.forEach((seller) => {
    //     if(seller[Object.keys(seller)[0]]._medicineId == this.props.params.primaryMedicineId) {
    //       this.setState({substitutes: seller[Object.keys(seller)[0]]._substitute, medicineName: seller[Object.keys(seller)[0]]._medicineName});
    //     }
    //   })
    // })

    api.getTopSellerMedicines().then(medicines => {
      const medObject = medicines.topSeller.find(seller =>
        seller[Object.keys(seller)[0]]._medicineId === Number(this.props.params.primaryMedicineId));
      const primaryMedicine = Object.values(medObject)[0];
      this.setState({
        substitutes: primaryMedicine._substitute,
        medicineName: primaryMedicine._medicineName,
        primaryMedicine,
      });
    });
  }

  render() {
    const { substitutes, medicineName, primaryMedicine } = this.state;
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
            <div className="titleContainer">
              <div className="titleText">Substitutes for {medicineName}</div>
              <div className="subTitleText">
                Substitutes can only be ordered if mentioned on the prescription
                OR If the doctor has prescribed the salt
              </div>
            </div>
          </div>
        </div>
        <div className="substituteListContainer">
          {substitutes.map((subs, key) =>
            <MedicineCard medName={subs} isSubsBanner key={key} primaryMed={primaryMedicine} />)}
        </div>
        <div className="cartButtonContainer">
          <Link className="cartFooterButton" to="/cart">View Cart</Link>
        </div>
      </div>
    );
  }
}

ComparePage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default ComparePage;
