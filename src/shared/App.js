import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Macdonald, Bill } from '../pages/index.js';
import Todo from '../components/Todo';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component = {Todo} />
        <Route exact path='/macdonald' component={Macdonald} />
        <Route exact path='/bill' component={Bill} />
      </div>
    );
  }
}

export default App;