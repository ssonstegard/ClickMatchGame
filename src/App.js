import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
    state = {
        characters: characters,
        currentScore: 0,
        bestScore: 0,
        unclickedCharacters: characters,
        message: "Click an image!"
    };

    // 

    shuffle() {
        console.log("hello")
        for (let i = this.state.characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.state.characters[i], this.state.characters[j]] = [this.state.characters[j], this.state.characters[i]];
        }
        return this.state.characters;
    }

    score = id => {
        if (this.state.unclickedCharacters.find(character => character.id === id) == undefined) {
            this.setState({
                currentScore: 0,
                characters: characters,
                unclickedCharacters: characters,
                Message: "Nailed it!"

            })
        }
        else {
            this.setState({
                currentScore: this.state.currentScore + 1,
                unclickedCharacters: this.state.unclickedCharacters.filter(character => character.id !== id),
                Message: "Nailed it!",
            },
                function () {
                    this.winScore()
                });
        };
        this.winScore(characters)

    };

    winScore = () => {
        if (this.state.bestScore < this.state.currentScore) {
            this.setState({
                bestScore: this.state.currentScore
            });
        };
    };

    // this.state.character render
    // do i need the random character in here?
    render() {
        return (
            <Wrapper>
                <Title>Click and Match</Title>
                <h5 className="text-center">Current Score:{this.state.currentScore} Best Score: {this.state.bestScore}</h5>
                {this.state.characters.map(character => (
                    <CharacterCard
                        score={this.score}
                        id={character.id}
                        key={character.key}
                        name={character.name}
                        image={character.image}
                    // shuffle={this.shuffle}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;