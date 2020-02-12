import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./character.json";
import Score from "./components/Score";

class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 10,
    charactersChosen: [],
    message: "Click to Play!"
  };

  characterClicked = id => {
    let charactersChosen = this.state.characterClicked;
    if (charactersChosen.includes(id)) {
      this.setState({
        characterChosen: [],
        score: 0,
        message: "You Lost! Play Again!"
      });
      return;
    } else {
      charactersChosen.push(id);
    }

    if (charactersChosen.length === 10) {
      this.setState({
        score: 10,
        message: "You Win! Click to Play again!",
        charactersChosen: []
      });
      return;
    }

    this.setState({
      score: charactersChosen.length,
      message: "You got another one!"
    });

    for (let i = characters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Score
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
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
