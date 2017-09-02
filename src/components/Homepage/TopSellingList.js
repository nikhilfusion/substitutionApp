import React, { PropTypes } from 'react';
import MedicineCard from '../Common/MedicineCard';

const TopSellingList = ({ medicines }) => (
  <div className="topSellingListContainer">
    <h2 className="listTitle">Top Selling Medicines</h2>
    <div className="listContainer">
      <div>THIS IS THE MEDICINE CONTAINER</div>
      {medicines.map(({ medicineName }) => <MedicineCard medicineName={medicineName} />)}
    </div>
  </div>
);

TopSellingList.propTypes = {
  medicines: PropTypes.array.isRequired,
};

export default TopSellingList;
