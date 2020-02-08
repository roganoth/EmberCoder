import React, { Component } from "react";
import FriendCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./character.json";

class App extends Component {
  state = {
    friends
  };

  shuffleCharacters = id => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleCharacters={this.shuffleCharacters}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={false}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
