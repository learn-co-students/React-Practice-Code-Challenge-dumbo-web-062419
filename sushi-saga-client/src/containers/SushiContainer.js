import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  function renderSushis() {
    return props.sushi.slice(props.startIndex, (props.startIndex+4)).map(sushiObj => <Sushi sushi={sushiObj} key={sushiObj.id} addPlate={props.addPlate} buyOneSushi={props.buyOneSushi} wallet={props.wallet}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        { renderSushis() }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
