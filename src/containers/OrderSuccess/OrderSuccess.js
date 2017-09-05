import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import './OrderSuccess.css';

class OrderSuccess extends Component {
  constructor(props){
    super(props);

    this.state = {
      // cartData: JSON.parse(localStorage.getItem('cartData')) || {},
      //cartData: {},
      // selectedPartner: JSON.parse(localStorage.getItem('selectedPartner')) || {},
    };

    localStorage.removeItem('cartData');
    localStorage.removeItem('cartTotal');
    localStorage.removeItem('bdvTotal');
  }

  returnToHome(){
    localStorage.removeItem('selectedPartner');
    browserHistory.push('/');
  }

  render() {
    const selectedPartner = JSON.parse(localStorage.getItem("selectedPartner"));
    console.log('selectedPartner is ', selectedPartner.name);
    return (
      <div className="orderSuccessContainer">
        <div className="orderSuccessCard">
          <h2>ORDER PLACED</h2>
          <div> via {selectedPartner && selectedPartner.name}</div>
          <Button onClick={() => this.returnToHome()}>Continue Shopping</Button>
        </div>
      </div>
    );
  }
}

export default OrderSuccess;
