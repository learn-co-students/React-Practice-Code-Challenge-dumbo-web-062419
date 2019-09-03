import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((sushiObj, index) => {
      return <div key={sushiObj.id} className="empty-plate" style={{ top: -7 * index }} />
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushi)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table
