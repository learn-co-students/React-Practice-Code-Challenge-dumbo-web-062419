import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  // console.log("SushiContainer hit")
  // console.log("SushiContainer props: ", props);
  // console.log("Selected sushis for sushiContainerJS: ", props.selectedSushisForSushiContainerJS);
  // console.log("eatSushiForSushiContainerJS: ", props.eatSushiForSushiContainerJS);
  // console.log("balanceForSushiContainerJS: ", props.balanceForSushiContainerJS);

  const allSushisForSushiJS = props.selectedSushisForSushiContainerJS.map(sushiData => {
    // console.log("Single sushiData: ", sushiData);
    return <Sushi
        key={sushiData.id}
        singleSushiDataForSushiJS={sushiData}
        eatSushiForSushiJS={props.eatSushiForSushiContainerJS}
        balanceForSushiJS={props.balanceForSushiContainerJS}
      />
  })

  return (
    <Fragment>
      <div className="belt">
        {
          /*
             Render Sushi components here!\
          */
          allSushisForSushiJS
        }
        <MoreButton
          renderNext4SushisForMoreButtonJS={props.renderNext4SushisForSushiContainerJS}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer
