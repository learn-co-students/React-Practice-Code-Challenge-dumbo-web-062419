import React, { Fragment, useState } from 'react'
// import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const sushiComps = props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi}/>)
  const [count, moresushi] = useState(0)
  const splicedSushiComps = sushiComps.splice(count, 4)
  return (
    <Fragment>
      <div className="belt">
        {
          splicedSushiComps
        }
        {/* <MoreButton /> */}
        <button onClick={() => moresushi(count + 4)}>
            More sushi!
          </button>
      </div>
    </Fragment>
  )
}

export default SushiContainer