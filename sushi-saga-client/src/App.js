import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startIndex: 0,
    eatenSushi: [],
    wallet: 150
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({sushis: sushis}));
  }

  nextSushi = () => {
    this.setState({
      startIndex: this.state.startIndex + 4
    });
  }

  prevSushi = () => {
    this.setState({
      startIndex: this.state.startIndex - 4
    });
  }

  addEatenSushi = (sushiObj) => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushiObj]
    });
  }

  payForSushi = (sushiPrice) => {
    this.setState({
      wallet: this.state.wallet-sushiPrice
    });
  }

  render() {
    const {sushis, startIndex, eatenSushi, wallet} = this.state;
    
    return (
      <div className="app">
        <SushiContainer sushis={sushis} startIndex={startIndex} nextSushi={this.nextSushi} prevSushi={this.prevSushi} addEatenSushi={this.addEatenSushi} payForSushi={this.payForSushi} wallet={this.state.wallet} />
        <Table eatenSushi={eatenSushi} wallet={wallet} />
      </div>
    );
  }
}

export default App;