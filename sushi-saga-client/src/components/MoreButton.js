import React from 'react'

const MoreButton = (props) => {

    const handleMoreButtonClick = () => {
      // console.log("handleMoreButtonClick has been clicked!");
      props.renderNext4SushisForMoreButtonJS()
    }

    // console.log("MoreButton: ", this);
    // console.log("MoreButton props: ", props);

    return (
      <button onClick={/* Fill me in! */ handleMoreButtonClick}>
        More sushi!
      </button>
    )
}

export default MoreButton
