import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    index: 0,
    budget: 100,
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushiData => {
        const sushiArray = sushiData.map(sushi => {
          return {...sushi, eaten: false}
        })
        this.setState({ allSushi: sushiArray })
        // console.log(this.state)
      })
  }

  moreSushi = () => {
    this.setState({ index: this.state.index + 4 })
    // console.log(this.state.index)
  }

  eatSushi = (clickedSushi) => {
    console.log("eaten", clickedSushi)
    let sushiArray = this.state.allSushi.map(sushi => {
      if (sushi.id === clickedSushi.id) {
        sushi.eaten = true
        this.setState({ budget: this.state.budget - sushi.price })
        return sushi
      } else {
        return sushi
      }
    })
    this.setState({ allSushi: sushiArray })
  }

  eatenSushi = () => {
    let eatenSushi = this.state.allSushi.filter(sushi => {
      return sushi.eaten === true
    })
    // console.log(eatenSushi)
    return eatenSushi
  }

  render() {
    const fourSushi = this.state.allSushi.slice(this.state.index, this.state.index + 4)
    // console.log(fourSushi)
    return (
      <div className="app">
        <SushiContainer allSushi={fourSushi} moreSushi={this.moreSushi} eatSushi={this.eatSushi} />
        <Table budget={this.state.budget} eatenSushi={this.eatenSushi}/>
      </div>
    );
  }
}

export default App;
