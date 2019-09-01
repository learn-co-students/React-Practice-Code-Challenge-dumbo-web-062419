import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    allSushisFromApp: [],
    allSushisFromAppIndex: 0,
    filteredSushisFromApp: [],
    balance: 100
  }

  // Load the first 4 sushis when component mounts/page load/DOMContentLoaded
  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      // .then(allSushis => console.log(allSushis))
      .then(allSushis => {
        this.setState({ allSushisFromApp: allSushis })
        this.showNext4Sushis()
      })
  }

  // Show first 4 sushis or next 4 sushis
  showNext4Sushis = () => {
    console.log("allSushisFromAppIndex after increment: ", this.state.allSushisFromAppIndex)

    let newSushis = []
    const allSushisFromAppArray = this.state.allSushisFromApp
    const allSushisFromAppArrayIndex = this.state.allSushisFromAppIndex

    newSushis.push(allSushisFromAppArray[allSushisFromAppArrayIndex])
    newSushis.push(allSushisFromAppArray[allSushisFromAppArrayIndex + 1])
    newSushis.push(allSushisFromAppArray[allSushisFromAppArrayIndex + 2])
    newSushis.push(allSushisFromAppArray[allSushisFromAppArrayIndex + 3])

    this.setState({ filteredSushisFromApp: newSushis })

    return null
  }

  // Increment allSushisFromAppIndex by 4 and THEN showNext4Sushis
  renderNext4Sushis = () => {
    // console.log("renderNext4Sushis function invoked");
    console.log("allSushisFromAppIndex before increment: ", this.state.allSushisFromAppIndex);

    //increment allSushisFromAppIndex by 4
    const newIndex = this.state.allSushisFromAppIndex + 4

    this.setState(
      { allSushisFromAppIndex: newIndex },
      this.showNext4Sushis
    )
  }

  eatSushi = (sushi) => {
    // console.log("eatSushi invoked");
    // console.log("What is sushi?", sushi);
    // console.log("Price: ", sushi.props.singleSushiDataForSushiJS.price);
    const currentBalance = this.state.balance
    const sushiPrice = sushi.props.singleSushiDataForSushiJS.price
    const newBalance = currentBalance - sushiPrice

    this.setState({ balance: newBalance })
  }

  render() {

    // console.log("allSushisFromApp: ", this.state.allSushisFromApp);
    // console.log("filteredSushisFromApp: ", this.state.filteredSushisFromApp);

    return (
      <div className="app">
        <SushiContainer
          selectedSushisForSushiContainerJS={this.state.filteredSushisFromApp}
          renderNext4SushisForSushiContainerJS={this.renderNext4Sushis}
          eatSushiForSushiContainerJS={this.eatSushi}
          balanceForSushiContainerJS={this.state.balance}
        />
        <Table
          balanceForTable={this.state.balance}
        />
      </div>
    );
  }
}

export default App;
