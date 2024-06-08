import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="text-center">{props.results.word}</h2>
          <p className="text-center">{props.results.phonetic}</p>
        </section>
        <section>
          <p>
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </p>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
