import React, { PropTypes } from 'react';
import './MedicineCard.css';

const MedicineCard = (
  { medicineName, packForm, packSize, manufacturer, isRxRequired, quantity, price, substitutes }) => (
    <div className="medicineCardContainer">
      <h2>{medicineName}</h2>
      <div>{packForm} | {packSize}</div>
      <div>{manufacturer}</div>
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

MedicineCard.propTypes = {
  medicineName: PropTypes.string.isRequired,
  packForm: PropTypes.string.isRequired,
  packSize: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  isRxRequired: PropTypes.bool.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  substitutes: PropTypes.array.isRequired,
};

export default MedicineCard;
