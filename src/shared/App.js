import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from '../pages/index.js';
import Todo from '../components/Todo';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component = {Todo} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;