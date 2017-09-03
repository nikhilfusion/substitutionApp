import React, { PropTypes, Component } from 'react';
import MedicineCard from '../Common/MedicineCard';

export default class TopSellingList extends Component {
  render() {
    const { searchText } = this.props;
    let medicines = this.props.medicines;
    if(searchText) {
      medicines = medicines.filter(function(medicine){
        let key = Object.keys(medicine)[0];
        return medicine[key].medicineName.toUpperCase().indexOf(searchText.toUpperCase()) > -1;
      });
    }
    return(
      <div className="topSellingListContainer">
        <h2 className="listTitle">Top Selling Medicines</h2>
        <div className="listContainer">
          {medicines.map((medicine, key) => <MedicineCard key={key} medName={medicine[Object.keys(medicine)[0]]}  />)}
        </div>
      </div>
    );
  }
}

TopSellingList.propTypes = {
  medicines: PropTypes.array,
  searchText: PropTypes.string
};
TopSellingList.defaultProps = {
  searchText:'',
  medicines: []
};