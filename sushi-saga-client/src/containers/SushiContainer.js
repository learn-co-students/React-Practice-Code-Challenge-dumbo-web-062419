import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import PrevButton from '../components/PrevButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {

  function renderSushis() { 
    return props.sushis.slice(props.startIndex, props.startIndex+4).map(sushi => <Sushi key={sushi.id} sushi={sushi} addEatenSushi={props.addEatenSushi} payForSushi={props.payForSushi} wallet={props.wallet} />);
  }

  return (
    <Fragment>
      <div className="belt">
        <PrevButton prevSushi={props.prevSushi} />
        {renderSushis()}
        <MoreButton nextSushi={props.nextSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer