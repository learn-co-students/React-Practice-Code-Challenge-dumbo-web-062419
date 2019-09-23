import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state= {
    sushiCollection: [],
    sushiIndex: 0,
    wallet: 100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      const sushiData =data.map(sushi => {
        sushi.eaten=false 
        return sushi})
      this.setState({sushiCollection: sushiData})
    }) 

  }

  getSushis = () => {
    
    let sushiCollection = this.state.sushiCollection.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
    return sushiCollection
  } 

  handleMoreSushi = () => {
    this.setState({
    sushiIndex: this.state.sushiIndex + 4
    })
  }

  handleEatSushi = (obj) => {
    let updatedArray = this.state.sushiCollection.map(sushi => {
      if  (sushi.id === obj.id ){
        sushi.eaten = true

        return sushi

      }
      else
        return sushi

    })

    this.setState({
      sushiCollection: updatedArray,
      wallet: this.state.wallet-obj.price
    })
  }

  getEatenSushis(){
    return this.state.sushiCollection.filter(sushi => sushi.eaten)
  }




  render() {
    console.log(this.state.sushiCollection)
    return (
      <div className="app">
        <SushiContainer sushis ={this.getSushis()} handleMoreSushi={this.handleMoreSushi} handleEatSushi={this.handleEatSushi}/>
        <Table sushis={this.getEatenSushis()} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;