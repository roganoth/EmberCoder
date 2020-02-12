import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./character.json";

class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 10,
    charactersClicked: [],
    message: "Click to Play!"
  };

  characterClicked = id => {
    let charactersClicked = this.state.characterClicked;
    if (charactersClicked.includes(id)) {
      this.setState({
        characterClicked: [],
        score: 0,
        message: "You Lost! Play Again!"
      });
      return;
    } else {
      charactersClicked.push(id);
    }

    if (charactersClicked.length === 10) {
      this.setState({
        score: 10,
        message: "You Win! Click to Play again!",
        charactersClicked: []
      });
      return;
    }

    this.setState({
      score: charactersClicked.length,
      message: "You got another one!"
    });

    for (let i = characters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [characters[i], (characters[j] = characters[j]), characters[i]];
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
