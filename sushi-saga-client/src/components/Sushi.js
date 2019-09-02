import React, { Fragment, Component } from 'react'

class Sushi extends Component {

  state = {
    isEaten: false
  }

  eatIt = () => {
    if(this.props.wallet >= this.props.sushi.price){
      this.setState({
        isEaten: true
      }, () => this.props.addEatenSushi(this.props.sushi.id));
      this.props.payForSushi(this.props.sushi.price);
    }
  }

  render() {
    return (
      <Fragment>
      <div className="sushi">
        <div className="plate" onClick={this.state.isEaten ? null : this.eatIt}>
          {this.state.isEaten ? null : <img src={this.props.sushi.img_url} width="100%" alt={this.props.sushi.name}  />}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
      </Fragment>
    )
  }
}

export default Sushi