import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <p>
        <Example example={props.meaning.example} />
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
