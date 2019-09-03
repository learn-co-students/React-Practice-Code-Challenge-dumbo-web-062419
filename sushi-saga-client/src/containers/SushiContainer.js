import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log(props.allSushi)
  // console.log(props.moreSushi)
  const sushiComponents = props.allSushi.map(sushi => {
    return <Sushi sushi={sushi} eatSushi={props.eatSushi}/>
  })
  return (
    <Fragment>
      <div className="belt">
        {
          sushiComponents
        }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
