import React, { PropTypes } from 'react';
import MedicineCard from '../../components/Common/MedicineCard';
import './Search.css';

const SearchResultList = ({ medicines }) => (
  <div className="searchResultContainer">
    <h2 className="listTitle">Search Results</h2>
    <div className="listContainer">
      <div>THIS IS THE MEDICINE CONTAINER</div>
      {medicines.map(({ medicineName }) => <MedicineCard medicineName={medicineName} />)}
    </div>
  </div>
);

SearchResultList.propTypes = {
  medicines: PropTypes.array.isRequired,
};

export default SearchResultList;
