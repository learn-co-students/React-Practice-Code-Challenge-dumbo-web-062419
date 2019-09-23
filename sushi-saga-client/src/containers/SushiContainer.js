import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi handleEatSushi={props.handleEatSushi} sushi={sushi} subtractWallet={props.subtractWallet}/>)
        }
        <MoreButton handleMoreSushi={props.handleMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer