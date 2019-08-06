import React from "react";
import Card from "./Card";

const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      <Card user={props.dataProp} />
      {props.followerProp.map(follower => {
        return <Card key={follower.id} user={follower} />;
      })}
    </div>
  );
};

export default CardList;
