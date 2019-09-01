import React, { Fragment, Component } from 'react'

class Sushi extends Component {

  state={
    eaten: false
  }

  eatSushi = () => {
    this.setState({
      eaten: true
    })
  }

render(){

  return (
    <div className="sushi">
      <div className="plate"
           onClick={this.eatSushi}>
        {
          /* Tell me if this sushi has been eaten! */
          this.state.eaten ?
            null
          :
            <img src={this.props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
}
}

export default Sushi;
