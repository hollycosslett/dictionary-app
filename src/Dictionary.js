import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiKey = "48d9c02baa93fa8d733783cd33ot621f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(keywordSearch);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function keywordSearch(response) {
    setResults(response.data);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            className="input-box"
            type="search"
            placeholder="Enter a word..."
            onChange={handleKeywordChange}
          />
          <input className="form-button" type="submit" value="Submit" />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
