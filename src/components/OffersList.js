import React from "react";
import Offer from "./Offer";

function OfferList() {
  return (
    <div className="offers">
      <h3 className="offerUp"> We know things are bad but we still need your money.</h3>
      <div className="row">
        <div className="col-md-4">
          <Offer keyWordFear="fear" />
        </div>
        <div className="col-md-4">
          <Offer keyWordFear="pizza" />
        </div>
        <div className="col-md-4">
          <Offer keyWordFear="love" />
        </div>
      </div>
    </div>
  );
}

export default OfferList;
