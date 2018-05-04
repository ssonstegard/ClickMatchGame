import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
    state = {
        characters
    };

    // On Click ID for character
    //// How do I get this to generate a random character???? /////
    randomCharacter = id => {
        const characters = this.state.characters.filter(character =>
            character.id !== id);
        this.setState({ characters });
    };


    // this.state.character render
    render() {
        return (
            <Wrapper>
                <Title>Click and Match</Title>
                {this.state.characters.map(character => (
                    <characterCard
                        //onclick for random character
                        id={character.id}
                        key={character.id}
                        name={character.id}
                        image={character.id}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;