import React, { useState } from "react";
import Results from "./Results";
import Images from "./Images";
import "./Dictionary.css";

import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [images, setImages] = useState(null);

  function imageSearch(response) {
    setImages(response.data.photos);
  }
  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function keywordSearch(response) {
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = "48d9c02baa93fa8d733783cd33ot621f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(keywordSearch);

    let imageApiKey = "48d9c02baa93fa8d733783cd33ot621f";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(imageSearch);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          className="input-box"
          type="search"
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
        />
        <input className="form-button" type="submit" value="Search" />
      </form>
      <div>
        <Results results={results} />
      </div>
      <br />
      <section>
        <Images images={images} />
      </section>
    </div>
  );
}
