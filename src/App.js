import React, { Component } from 'react';
import './App.css';
import Bureau from './img/thebureau_cover.jpg';
import HighCastle from './img/manhighcastle_cover.jpg';
import HaltFire from './img/haltcatchfire_cover.jpg';
import JackRyan from './img/jackryan_cover.jpg';
import Robot from './img/mrrobot_cover.jpg';
import StrangerThings from './img/strangerthings_cover.jpg';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="item">
            <img src={HighCastle} alt="The Man in the High Castle Logo" />
          </div>
          <div className="item">
            <img src={Bureau} alt="The Bureau Logo" />
          </div>
          <div className="item">
            <img src={Robot} alt="Mr. Robot Logo" />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <img src={StrangerThings} alt="Stranger Things Logo" />
          </div>
          <div className="item">
          <img src={JackRyan} alt="Jack Ryan Logo" />
          </div>
          <div className="item">
          <img src={HaltFire} alt="Hald and Catch Fire Logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
