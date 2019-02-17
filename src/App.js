import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';
import Kodflix from './img/kodflix.png'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="logo">
            <img src={Kodflix} alt="Kodflix Logo" />
          </div>
        </div>
        <Gallery />
      </div>
    );
  }
}

export default App;