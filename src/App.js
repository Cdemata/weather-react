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
    </div>
  );
}
