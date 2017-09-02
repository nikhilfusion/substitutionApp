import React, { Component } from 'react';
import TopSellingList from '../../components/Homepage/TopSellingList';
import SearchResultList from '../../components/Search/Search';
import './Homepage.css';

const mockMedicines = [
  {
    medicineId: '12345',
    medicineName: 'Crocin',
    manufacturer: 'Cipla Ltd',
    packForm: 'tablet',
    packSize: '10 tables in a Strip',
    quantity: 0,
    isRxRequired: false,
    price: 240,
    substitutes: [],
  },
  {
    medicineId: '67890',
    medicineName: 'Disprin',
    manufacturer: 'GSK Pharma',
    packForm: 'capsule',
    packSize: '10 Capsule in a Strip',
    quantity: 0,
    isRxRequired: true,
    price: 140,
    substitutes: [{}, {}, {}],
  },
];

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchInitiated: false,
    };
  }

  render() {
    const { isSearchInitiated } = this.state;
    return (
      <div className="homePageContainer">
        <div className="container">
          {!isSearchInitiated && <TopSellingList medicines={mockMedicines} />}
          {isSearchInitiated && <SearchResultList medicines={mockMedicines} />}
        </div>
      </div>
    );
  }
}

export default Homepage;
