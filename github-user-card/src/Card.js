import React from "react";

const Card = props => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <img src={props.avatar_url} alt="" />
      <p>{props.location}</p>
      <p>{props.followers}</p>
      <p>{props.following}</p>
      <p>{props.bio}</p>
    </div>
  );
};

export default Card;
