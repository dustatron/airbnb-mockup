import React from "react";

function Offer(props) {
  return (
    <div className="the-offer">
      <img src={"https://source.unsplash.com/300x300/?" + props.keyWordFear} />
    </div>
  );
}

export default Offer;
