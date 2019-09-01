import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushi: [],
    moneySpent: 0
  }

  componentDidMount(){
    fetch(API).then(res => res.json()).then(sushis => this.setState({ sushis }))
  }


  handleEatSushi = (sushi) => {
    const removedSushi = this.state.sushis.filter(function(ele){
      return ele !== sushi
    })
    this.setState({
      sushis: removedSushi,
      eatenSushi: [...this.state.eatenSushi, sushi],
      moneySpent: this.state.moneySpent +sushi.price
    })
  }

  makeMoney = () => {
    this.setState({
      moneySpent: this.state.moneySpent - 25
    })
  }

  render() {
    // console.log(this.state)
    console.log(this.state.moneySpent)
    if(this.state.moneySpent < 100){
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.sushis} eatSushi={this.handleEatSushi}/>
        <Table eatenSushi={this.state.eatenSushi} moneySpent={this.state.moneySpent} makeMoney={this.makeMoney}/>
      </div>
    );} else {
      return(
        <div>
          <h1>
            You spent all your money and are too broke to buy sushi!
          </h1>
        </div>
      )
    }
  }
}

export default App;