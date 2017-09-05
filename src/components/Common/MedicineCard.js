import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import UpdateQuantity from '../Cart/updateQuantity';
import './MedicineCard.css';

export default class MedicineCard extends Component {
  constructor(props) {
    super(props);
    this.onChange.bind(this);
    this.state = {
      qty: 0,
      itemId: ''
    };
  }

  componentWillMount() {
    const localData = JSON.parse(localStorage.getItem('cartData'));
    if (localData && localData.length > 0) {
      const index = localData.findIndex(dt => dt.itemId === this.props.medName._medicineId);
      if (index > -1) {
        this.setState({ qty: localData[index].quantity, itemId: localData[index].itemId });
      }
    }
  }

  onChange(itemId, qty) {
    const localData = JSON.parse(localStorage.getItem('cartData'));
    if (localData && localData.length > 0) {
      const index = localData.findIndex(dt => dt.itemId === itemId);
      if (index > -1) {
        this.setState({ qty, itemId });
      }
    }
  }

  render() {
    const pincode = this.props.pincode;
    const {
      _medicineId,
      _medicineName,
      _formFactor,
      _manufacturer,
      // _quantity,
      _price,
      _substitute,
      _quantityPerFormFactor
    } = this.props.medName;
    const compareLink = `/${pincode}/compare/${_medicineId}`;

    const { primaryMed, isSubsBanner, maxDiscount } = this.props;

    const savedPercent = isSubsBanner ?
      Math.floor(((Number(primaryMed._price) - Number(_price)) / primaryMed._price) * 100) :
      null;
    return (
      <div className="medicineCardContainer">
        <h2>{_medicineName}</h2>
        <div>{_formFactor || (primaryMed && primaryMed._formFactor)} | {_quantityPerFormFactor}</div>
        <div>{`by ${_manufacturer}`}</div>
        <div className="priceRxContainer">
          <div>
            <span>Prescription Required</span>
          </div>
          <div className="priceContainer">Rs. {_price}</div>
        </div>
        <div className="quantityContainer">
          {!isSubsBanner && maxDiscount > 0 &&
          <div className="subsBannerContainer">
            <span className="subsBanner">Save upto {maxDiscount}% more, explore available substitutes</span>
            <Link className="subsCount" to={compareLink}>{(_substitute && _substitute.length) || 0} substitutes</Link>
          </div>
          }
          <div className="modifyQtyContainer">
            <UpdateQuantity
              itemId={Number(this.state.itemId || _medicineId)}
              quantity={this.state.qty}
              onChange={(qty, itemId) => { this.onChange(qty, itemId); }}
            />
          </div>
          {isSubsBanner && savedPercent &&
          <div className="subsBannerContainer">
            {savedPercent > 0 && <span className="savePercentText"> Save {savedPercent}% </span>}
            {savedPercent <= 0 && <span className="noSavePercentText"> No Savings </span>}
          </div>
          }
        </div>
      </div>
    );
  }
}

MedicineCard.propTypes = {
  maxDiscount: PropTypes.number,
  medName: PropTypes.object,
  isSubsBanner: PropTypes.bool,
  primaryMed: PropTypes.object,
};

MedicineCard.defaultProps = {
  maxDiscount: 0,
  medName: {},
  isSubsBanner: false,
  primaryMed: {},
};
