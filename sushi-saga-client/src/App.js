import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = `http://localhost:3000/sushis`

class App extends Component {

  state={
    allSushi: [ ],
    startIdx: 0,
    eatenSushi: [ ]
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiObj => this.setState({allSushi: sushiObj.slice(this.state.startIdx, this.state.startIdx + 4)}))
  }

  plusSushi = () => {
    this.setState({
      startIdx: this.state.startIdx + 4
    })
  }

  render() {
    const{allSushi, startIdx, eatenSushi} = this.state
    return (
      <div className="app">
        <SushiContainer allSushi={allSushi} plusSushi={this.plusSushi} startIdx={startIdx}/>
        <Table eatenSushi={eatenSushi}/>
      </div>
    );
  }
}

export default App;
