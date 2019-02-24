import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TVShowDetails from './TVShowDetails/TVShowDetails';
import Gallery from './Gallery';
import NotFound from './NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:TVShowDetails' component={TVShowDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;