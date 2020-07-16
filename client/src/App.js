import React from "react";
import logo from "./logo.svg";
import useSwr from "swr";
import "./App.css";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

function App() {
  const { data, error } = useSwr(`http://localhost:5000/api/v1/teachers`, {
    fetcher,
  });
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
