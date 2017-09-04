import React, { PropTypes, Component } from 'react';
import MedicineCard from '../Common/MedicineCard';

export default class TopSellingList extends Component {

  getMaxDiscount(medicine) {
    const medPrice = Number(medicine._price);
    // const subPrices = [];
    let maxDiscount = 0;
    medicine._substitute.map(sub => {
      const discount = Math.floor(((medPrice - Number(sub._price)) / medPrice) * 100);
      if (discount > maxDiscount) maxDiscount = discount;
      return discount;
    });
    return maxDiscount;
  }

  render() {
    const { searchText } = this.props;
    let medicines = this.props.medicines;
    if (searchText) {
      medicines = medicines.filter(medicine => {
        const key = Object.keys(medicine)[0];
        return medicine[key]._medicineName.toUpperCase().indexOf(searchText.toUpperCase()) > -1;
      });
    }
    return (
      <div className="topSellingListContainer">
        <h2 className="listTitle">Top Selling Medicines (Total: {medicines.length})</h2>
        <div className="listContainer">
          {medicines.map((medicine, key) =>
            <MedicineCard
              key={key}
              medName={medicine[Object.keys(medicine)[0]]}
              maxDiscount={this.getMaxDiscount(medicine[Object.keys(medicine)])}
            />
          )}
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
  searchText: '',
  medicines: []
};
