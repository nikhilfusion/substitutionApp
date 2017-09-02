import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './MedicineCard.css';

const MedicineCard = (
  { medicineId, medicineName, packForm, packSize, manufacturer, isRxRequired, quantity, price, substitutes }) => {
  const compareLink = `/compare/${medicineId}`;
  return (
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
          <Link className="subsCount" to={compareLink}>{substitutes.length} substitutes</Link>
        </div>
        <div>Quantity: {quantity}</div>
      </div>
    </div>
  );
};

MedicineCard.propTypes = {
  medicineId: PropTypes.string.isRequired,
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
