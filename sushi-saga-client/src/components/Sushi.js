import React, { Fragment, useState } from 'react'
// import React, { useState } from 'react'

const Sushi = (props) => {

  const [eaten, eatSushi] = useState(false)
  
  function handleClick(){
    props.eatSushi(props.sushi)
  }

  return (
    <div className="sushi" onClick={handleClick}>
      <div className="plate" 
           onClick={() => eatSushi(true)} >
        { 
          eaten
           ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details" >
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi