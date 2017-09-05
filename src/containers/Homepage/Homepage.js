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
      medicines: [],
      searchText: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const pincode = this.props.params.pincode || 400070;
    api.getTopSellerMedicines(pincode).then((res) => {
      this.setState({medicines: res})
    })
  }

  onChange(val, pincode) {
    if(pincode) {
      api.getTopSellerMedicines(pincode).then((res) => {
        this.setState({medicines: res})
      });
    } else {
      this.setState({'searchText': val});
    }
  }


  render() {
    const { isSearchInitiated } = this.state;
    const pincode = this.props.params.pincode || 400070;
    return (
      <div className="homePageContainer">
        <Header onChange={(val, pincode) => {this.onChange(val, pincode)}} pincode={pincode}/>
        <div className="container">
          {!isSearchInitiated && <TopSellingList medicines={this.state.medicines.topSeller} searchText={this.state.searchText} pincode={pincode}/>}
          {isSearchInitiated && <SearchResultList medicines={this.state.medicines.topSeller} />}
        </div>
      </div>
    );
  }
}
export default Homepage;
