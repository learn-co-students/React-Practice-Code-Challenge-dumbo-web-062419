import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  console.log(props)
  return (
    <Fragment>
      <div className="belt">
        { props.allSushi.map(sushiObj => <Sushi sushi={sushiObj}/>) }
        <MoreButton plusSushi={props.plusSushi}/>
      </div>

    </Fragment>
  )
}

export default SushiContainer
