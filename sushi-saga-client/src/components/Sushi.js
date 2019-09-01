import React, { Component, Fragment } from 'react'

// Turned Sushi into a Component so that I could set state
class Sushi extends Component {

  state = {
    eaten: false
  }

  handleSushiClick = () => {
    // console.log("handleSushiClick invoked")
    const currentBalance = this.props.balanceForSushiJS
    const sushiPrice = this.props.singleSushiDataForSushiJS.price
    const newBalance = currentBalance - sushiPrice

    if (newBalance >= 0){
      this.setState({ eaten: true })
      // console.log("Eaten? ", this.state.eaten);
      this.props.eatSushiForSushiJS(this)
      // console.log("What is this? ", this)
    } else {
      alert("You're broke. Walk it off")
    }
  }

  render() {

    // console.log("Sushi hit");
    // console.log("Sushi props: ", this.props);
    console.log("Attributes for a single sushi: ", this.props.singleSushiDataForSushiJS);
    // console.log("Eaten? ", this.props.eatenForSushiJS);
    // console.log("eatSushiForSushiJS: ", this.props.eatSushiForSushiJS);
    // console.log("balanceForSushiJS: ", this.props.balanceForSushiJS);

    return (
      <Fragment>
        <div className="sushi">
          <div className="plate"
               onClick={/* Give me a callback! */ this.handleSushiClick}>
            {
              /* Tell me if this sushi has been eaten! */
              this.state.eaten ?
                null
              :
                <img src={/* Give me an image source! */this.props.singleSushiDataForSushiJS.img_url} alt="sushi" width="100%" />
            }
          </div>
          <h4 className="sushi-details">
            {/* Give me a name! */this.props.singleSushiDataForSushiJS.name} - ${/* Give me a price! */this.props.singleSushiDataForSushiJS.price}
          </h4>
        </div>
      </Fragment>
    )
  }

}

export default Sushi
