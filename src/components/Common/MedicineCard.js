import React, { PropTypes, Component } from 'react';
import './MedicineCard.css';
import { Link } from 'react-router';
import UpdateQuantity from '../Cart/updateQuantity';

export default class MedicineCard extends Component {
  constructor(props) {
    super(props);
    this.onChange.bind(this);
    this.state = {
      qty: 0,
      itemId: ''
    };
  }

  onChange(itemId, qty) {
    const localData = JSON.parse(localStorage.getItem("cartData"));
    if(localData && localData.length > 0) {
      const index = localData.findIndex((dt) => {
        return dt.itemId == itemId
      })
      if(index > -1) {
        this.setState({qty: qty, itemId: itemId});
      } 
    }
  }

  componentWillMount() {
    const localData = JSON.parse(localStorage.getItem("cartData"));
    if(localData && localData.length > 0) {
      const index = localData.findIndex((dt) => {
        return dt.itemId == this.props.medName._medicineId
      })
      if(index > -1) {
        this.setState({qty: localData[index].quantity, itemId: localData[index].itemId})
      }
    }
  }
  render() {
    const { _medicineId, _medicineName, _formFactor, _packSize, _manufacturer, _quantity, _price, _substitute, _quantityPerFormFactor } = this.props.medName;
    const compareLink = `/compare/${_medicineId}`;
    return(
      <div className="medicineCardContainer">
        <h2>{_medicineName}</h2>
        <div>{_quantityPerFormFactor}</div>
        <div>{_formFactor} | {_packSize}</div>
        <div>{`by ${_manufacturer}`}</div>
        <div className="priceRxContainer">
          <div>
            <span>Prescription Required</span>
          </div>
          <div className="priceContainer">Rs. {_price}</div>
        </div>
        <div className="quantityContainer">
          <div className="subsBannerContainer">
            <span className="subsBanner">Save upto x% more, explore available substitutes</span>
            {!this.props.isSubsBanner &&
              <Link className="subsCount" to={compareLink}>{_substitute && _substitute.length || 0} substitutes</Link>}
          </div>
          <div className="modifyQtyContainer">
            <UpdateQuantity itemId={Number(this.state.itemId || _medicineId)} quantity={this.state.qty} onChange= {(qty, itemId) => { this.onChange(qty, itemId) }} />
          </div>
        </div>
      </div>
    )
  }
}

MedicineCard.propTypes = {
  medName: PropTypes.object,
  isSubsBanner: PropTypes.bool
};
MedicineCard.defaultProps = {
  medName: {},
  isSubsBanner: false
};
