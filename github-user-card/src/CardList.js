import React from "react";
import Card from "./Card";

const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      <Card />
    </div>
  );
};

export default CardList;
