import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary.</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/hollycosslett" target="blank">
            Holly Cosslett
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/hollycosslett/dictionary-app"
            target="blank"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://shecodes-react-dictionary-application.netlify.app"
            target="blank"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
