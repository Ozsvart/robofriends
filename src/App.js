import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 classname="App-title">Welcome to React</h1>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
