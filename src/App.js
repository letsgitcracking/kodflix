import React, { Component } from 'react';
import './App.css';
import Bureau from './img/thebureau_cover.jpg';
import HighCastle from './img/manhighcastle_cover.jpg';
import HaltFire from './img/haltcatchfire_cover.jpg';
import JackRyan from './img/jackryan_cover.jpg';
import Robot from './img/mrrobot_cover.jpg';
import StrangerThings from './img/strangerthings_cover.jpg';
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
        <div className="container">
          <div className="item">
            <img src={HighCastle} alt="The Man in the High Castle Logo" />
            <div className="overlay">
              <h1>The Man In The High Castle</h1>
            </div>
          </div>
          <div className="item">
            <img src={Bureau} alt="The Bureau Logo" />
            <div className="overlay">
              <h1>The Bureau</h1>
            </div>
          </div>
          <div className="item">
            <img src={Robot} alt="Mr. Robot Logo" />
            <div className="overlay">
              <h1>Mr. Robot</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="item">
            <img src={StrangerThings} alt="Stranger Things Logo" />
            <div className="overlay">
              <h1>Stranger Things</h1>
            </div>
          </div>
          <div className="item">
            <img src={JackRyan} alt="Jack Ryan Logo" />
            <div className="overlay">
              <h1>Jack Ryan</h1>
            </div>
          </div>
          <div className="item">
            <img src={HaltFire} alt="Halt and Catch Fire Logo" />
            <div className="overlay">
              <h1>Halt and Catch Fire</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
