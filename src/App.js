import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p>
            <Weather defaultCity="Tokyo" />
          </p>
        </header>
      </div>

      <footer className="credit">
        <small>
          {" "}
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/61959-chanelle-demata"
            target="_blank"
            className="creditlink"
          >
            Chanelle Demata
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Cdemata/weather-react"
            target="_blank"
            className="creditlink"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://iridescent-hotteok-b6cb19.netlify.app"
            target="_blank"
            className="creditlink"
          >
            hosted on Netlify
          </a>{" "}
        </small>
      </footer>
    </div>
  );
}
