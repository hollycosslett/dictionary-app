import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <p>{props.results.phonetic}</p>
        <p>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
