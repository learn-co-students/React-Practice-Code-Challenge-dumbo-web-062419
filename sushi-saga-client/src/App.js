import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    startIndex: 0,
    eatenSushi: [],
    wallet: 100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushiData => this.setState({sushi: sushiData}))
  }

  moreSushi = () => {
    this.setState({
      startIndex: this.state.startIndex+4
    })
  }

  addPlate = (sushiObj) => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushiObj]
    })
  }

  buyOneSushi = (price) => {
    this.setState({
      wallet: this.state.wallet-price
    })
  }

  render() {
    const {sushi, startIndex, eatenSushi, wallet} = this.state
    console.log(eatenSushi);
    return (
      <div className="app">
        <SushiContainer sushi={sushi} startIndex={startIndex} moreSushi={this.moreSushi} addPlate={this.addPlate} buyOneSushi={this.buyOneSushi} wallet={wallet}/>
        <Table eatenSushi={eatenSushi} wallet={wallet}/>
      </div>
    );
  }
}

export default App;
