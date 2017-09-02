import React, { PropTypes } from 'react';

const MedicineCard = ({ medicineName }) => (
  <div>
    THIS IS MEDICINE CARD - {medicineName}
  </div>
);

MedicineCard.propTypes = {
  medicineName: PropTypes.string.isRequired,
};

export default MedicineCard;
