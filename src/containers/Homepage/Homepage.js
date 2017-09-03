import React, { Component } from 'react';
import TopSellingList from '../../components/Homepage/TopSellingList';
import SearchResultList from '../../components/Search/Search';
import api from '../../api/api';
import Header from '../../components/Common/Header';
import './Homepage.css';

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
    api.getTopSellerMedicines().then((res) => {
      this.setState({medicines: res})
    })
  }

  onChange(val) {
    this.setState({'searchText': val})
  }

  render() {
    const { isSearchInitiated } = this.state;
    console.log('this.state.medicines.topSeller is ', this.state.medicines.topSeller);
    return (
      <div className="homePageContainer">
        <Header onChange={(val) => {this.onChange(val)}}/>
        <div className="container">
          {!isSearchInitiated && <TopSellingList medicines={this.state.medicines.topSeller} searchText={this.state.searchText}/>}
          {isSearchInitiated && <SearchResultList medicines={this.state.medicines.topSeller} />}
        </div>
      </div>
    );
  }
}
export default Homepage;
