import React, { Component } from 'react';
import './App.css';
import Matrix from './img/matrix.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Matrix} alt="Matrix wallpaper"/>
      </div>
    );
  }
}

export default App;
