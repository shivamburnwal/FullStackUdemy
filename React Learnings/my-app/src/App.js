import logo from './logo.svg';
import './App.css';
import Item from './Item';
import React from 'react';

class StarWars extends React.Component {
  render() {
    return (
      <h1>Welcome to StarWars.</h1>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StarWars />
        <Item name="Shivam"/>
        <br />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;