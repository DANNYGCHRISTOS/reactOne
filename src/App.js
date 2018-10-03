import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: "",
      name: ""
    };
  }
  updatePicture(value) {
    this.setState({ picture: value });
  }
  updateName(value) {
    this.setState({ name: value });
  }
  addFriend() {
    const { friends, picture, name } = this.state;
    let newFriends = friends.slice();
    newFriends.push({ picture, name });
    this.setState({ friends: newFriends, picture: "", name: "" });
  }
  render() {
    const friends = this.state.friends.map((friend, index) => (
      <div key={`friend-${index}-${friend.name}`}>
        <img width="100px" src={friend.picture} />
        <span>{friend.name}</span>
      </div>
    ));
    return (
      <div>
        <label>Picture</label>
        <input
          type="text"
          onChange={e => this.updatePicture(e.target.value)}
          value={this.state.picture}
        />
        <label>Name</label>
        <input
          type="text"
          onChange={e => this.updateName(e.target.value)}
          value={this.state.Name}
        />
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
