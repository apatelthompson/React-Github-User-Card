import React from "react";
import CardList from "./CardList";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      followers: []
    };
    console.log(this.state);
  }

  componentDidMount() {
    this.fetchData();
    this.fetchFollowers();
  }

  fetchData = response => {
    fetch("https://api.github.com/users/apatelthompson")
      .then(response => {
        console.log("response", response);
        return response.json();
      })
      .then(card => this.setState({ data: card.response }))
      .catch(err => console.log("error"));
  };

  fetchFollowers = response => {
    fetch("https://api.github.com/users/apatelthompson/followers")
      .then(response => {
        return response.json();
      })
      .then(follower => this.setState({ followers: follower.response }))
      .catch(err => console.log("error"));
  };

  render() {
    return (
      <div>
        <CardList dataProp={this.state.data} />
      </div>
    );
  }
}

export default App;
