import React from "react";

const Card = props => {
  return (
    <div className="card">
      <h1 className="title">{props.user.name}</h1>
      <img className="image" src={props.user.avatar_url} alt="" />
      <p>Location: {props.user.location}</p>
      <p>Followers: {props.user.followers}</p>
      <p>Following: {props.user.following}</p>
      <p>Bio: {props.user.bio}</p>
    </div>
  );
};

export default Card;
