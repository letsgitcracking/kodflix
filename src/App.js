import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TVShowID from './TVShowID';
import Gallery from './Gallery';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Gallery} />
          <Route exact path='/:TVShowID' component={TVShowID} />
        </div>
      </Router>
    );
  }
}

export default App;