import React, { PropTypes } from 'react';
import MedicineCard from '../../components/Common/MedicineCard';
import './Search.css';

const SearchResultList = ({ medicines }) => (
  <div className="searchResultContainer">
    <h2 className="listTitle">Search Results</h2>
    <div className="listContainer">
      {medicines.map(medicine => <MedicineCard key={medicine.medicineName} {...medicine} />)}
    </div>
  </div>
);

SearchResultList.propTypes = {
  medicines: PropTypes.array.isRequired,
};

export default SearchResultList;
