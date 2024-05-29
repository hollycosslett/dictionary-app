import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} `);
  }
  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function keywordSearch(response) {
    console.log(response.data.meanings);
  }

  let apiKey = "48d9c02baa93fa8d733783cd33ot621f";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(keywordSearch);

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
