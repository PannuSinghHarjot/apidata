import React, { Component } from 'react';
import LoremIpsum from './Components/PersonList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2> LoremIpsum</h2>
      <LoremIpsum />
      <p>Harjot Singh</p>
       
      </div>
    );
  }
}

export default App;
