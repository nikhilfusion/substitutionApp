import React, { Component } from 'react';
import TopSellingList from '../../components/Homepage/TopSellingList';
import SearchResultList from '../../components/Search/Search';
import api from '../../api/api';
import Header from '../../components/Common/Header';
import './Homepage.css';
const mockMedicines = {"topSeller":[{"AMLOPIN 5MG TAB 10":{"medicineID":"9470","medicineName":"AMLOPIN 5MG TAB 10","formFactor":"tablet","quantityPerFormFactor":"10 tablets per strip","manufacturer":"USV","price":"24.99","substitutes":[{"AMTAS 5MG TAB 15":{"medicineID":"10804","medicineName":"AMTAS 5MG TAB 15","formFactor":"15 tablets per strip","manufacturer":"INTAS PHARMACEUTICALS","price":"37.49"}},{"PRIMODIL 5MG TAB":{"medicineID":"143045","medicineName":"PRIMODIL 5MG TAB","formFactor":"10 tablets per strip","manufacturer":"MEDLEY PHARMACEUTICAL","price":"24.4"}},{"CAMLODIP 5MG TAB":{"medicineID":"223907","medicineName":"CAMLODIP 5MG TAB","formFactor":"10 tablets per strip","manufacturer":"LA RENON HEALTH CARE","price":"24"}},{"AMLODAC 5MG TAB 15":{"medicineID":"253918","medicineName":"AMLODAC 5MG TAB 15","formFactor":"15 tablets per strip","manufacturer":"ZYDUS","price":"37.42"}},{"AMLOGARD 5MG TAB 30":{"medicineID":"253920","medicineName":"AMLOGARD 5MG TAB 30","formFactor":"30 tablets per strip","manufacturer":"PFIZER","price":"74.84"}}]}},{"AB FLO SR 200MG TAB":{"medicineID":"254232","medicineName":"AB FLO SR 200MG TAB","formFactor":"tablet","quantityPerFormFactor":"10 tablets per strip","manufacturer":"Lupin","price":"148.5","substitutes":[{"AB PHYLLINE SR 200MG TAB":{"medicineID":"225450","medicineName":"AB PHYLLINE SR 200MG TAB","formFactor":"10 tablets per strip","manufacturer":"SUN PHARMA","price":"153"}},{"ASCOVENT SR TAB":{"medicineID":"254745","medicineName":"ASCOVENT SR TAB","formFactor":"10 tablets per strip","manufacturer":"GLENMARK","price":"152"}}]}}]}

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchInitiated: false,
      selectedPincode: '444444',
      medicines: [],
      searchText: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    api.getUser().then((res) => {
      this.setState({medicines: res})
    })
  }

  onChange(val) {
    this.setState({'searchText': val})
  }

  render() {
    const { isSearchInitiated } = this.state;
    return (
      <div className="homePageContainer">
        <Header onChange={(val) => {this.onChange(val)}}/>
        <div className="container">
          {!isSearchInitiated && <TopSellingList medicines={mockMedicines.topSeller} searchText={this.state.searchText}/>}
          {isSearchInitiated && <SearchResultList medicines={mockMedicines} />}
        </div>
      </div>
    );
  }
}
export default Homepage;
