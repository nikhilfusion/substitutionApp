import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './MedicineCard.css';

const MedicineCard = ({ medName }) => {
  const {
    medicineId,
    medicineName,
    formFactor,
    packSize,
    manufacturer,
    isRxRequired,
    quantity,
    price,
    substitutes,
    quantityPerFormFactor
  } = medName;
  const compareLink = `/compare/${medicineId}`;
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
          <Link className="subsCount" to={compareLink}>{substitutes.length} substitutes</Link>
        </div>
        <div>Quantity: {quantity}</div>
      </div>
    </div>
  );
};

MedicineCard.propTypes = {
  medName: PropTypes.object
};
MedicineCard.defaultProps = {
  medName: {}
};
export default MedicineCard;
