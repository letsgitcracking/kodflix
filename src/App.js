import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Gallery from './Gallery';
import Header from './Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Gallery />
        </div>
      </Router>
    );
  }
}

export default App;