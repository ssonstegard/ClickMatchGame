import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <strong>Name:</strong> {props.name}
        </div>
        <span onClick={() => props.randomCharacter(props.id)}
            className="random">
        </span>
    </div>
);

export default CharacterCard;