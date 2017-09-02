import React, { PropTypes, Component } from 'react';
import './MedicineCard.css';

class MedicineCard extends Component { 
  render(){
  	const { medicineName, formFactor, packSize, manufacturer, isRxRequired, quantity, price, substitutes, quantityPerFormFactor } = this.props.medName;
  	return (
	    <div className="medicineCardContainer">
	      <h2>{medicineName}</h2>
	      <div>{quantityPerFormFactor}</div>
	      <div>{formFactor} | {packSize}</div>
	      <div>{`by ${manufacturer}`}</div>
	      <div className="priceRxContainer">
	        <div>
	          {isRxRequired && <span>Prescription Required</span>}
	        </div>
	        <div className="priceContainer">Rs. {price}</div>
	      </div>
	      <div className="quantityContainer">
	        <div className="subsBannerContainer">
	          <span className="subsBanner">Save upto x% more, explore available substitutes</span>
	          <span className="subsCount">{substitutes.length} substitutes</span>
	        </div>
	        <div>Quantity: {quantity}</div>
	      </div>
	    </div>
	  );
	}
}

MedicineCard.propTypes = {
  medName: PropTypes.object
};

export default MedicineCard;
