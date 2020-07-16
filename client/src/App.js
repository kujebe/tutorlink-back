import React from "react";
import useRequest from "utils/swr-hook";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { data, error } = useRequest("/teachers");
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
