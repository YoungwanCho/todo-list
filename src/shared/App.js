import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Macdonald } from '../pages/index.js';
import Todo from '../components/Todo';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component = {Todo} />
        <Route path="/macdonald" component={Macdonald} />
      </div>
    );
  }
}

export default App;