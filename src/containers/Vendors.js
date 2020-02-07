import React, { Component } from 'react'

export default class Vendors extends Component {
  constructor() {
    super();
    this.state = {
      vendorsData: [
        {
          vendorId: 1,
          vendorName: 'Nike',
          remainingBalance: 100
        },
        {
          vendorId: 2,
          vendorName: 'Puma',
          remainingBalance: 150
        },
        {
          vendorId: 3,
          vendorName: 'UCB',
          remainingBalance: 250
        }
      ],
      pageTitle: 'Vendors Description',
      pageNumber: 1
    };
  }

  changeAvailableBalance = () => {

    const newState = this.state.vendorsData.map((vendorData) => {
      vendorData.remainingBalance = vendorData.remainingBalance - 10;
      return vendorData;
    })
    this.setState({
      newState,
      pageNumber: 5
    })
    this.setState({
      pageNumber: 2
    })
    this.setState({
      pageNumber: 3
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        {
          this.state.vendorsData.map((vendorData) => {
            return  <div>VendorId: {vendorData.vendorId} || VendorName: {vendorData.vendorName} || RemainingBalance: {vendorData.remainingBalance}</div>
          })
        }
        <div>PageNumber: {this.state.pageNumber}</div>
        <button onClick = {this.changeAvailableBalance}> Update Available Balance</button>
      </div>
    )
  }
}
