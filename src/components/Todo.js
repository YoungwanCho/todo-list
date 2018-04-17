import React, { Component } from 'react';
import { Home, About } from '../pages/index.js';
import TodoListTemplate from './TodoListTemplate';
import Form from './Form';
import TodoItemList from './TodoItemList';

class Todo extends Component {
  id = 3
  state = {
    input: ' ',
    todos: [
      { id: 0, text: ' 맥도날드', checked: false },
      { id: 1, text: ' 한식', checked: false },
      { id: 2, text: ' 중식', checked: false }
    ]
  }

  // handleChange = (e) => {
  //   this.setState({
  //     input: e.target.value
  //   });
  // }

  // handleCreate = () => {
  //   const { input, todos } = this.state;
  //   this.setState({
  //     input: '',
  //     todos: todos.concat({
  //       id: this.id++,
  //       text: input,
  //       checked: false
  //     })
  //   });
  // }

  // handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     this.handleCreate();
  //   }
  // }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
    document.location = "/macdonald";
  }

  // handleRemove = (id) => {
  //   const {todos} = this.state;
  //   this.setState({
  //     todos: todos.filter(todo =>todo.id !== id)
  //   });
  // }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <div>
        <TodoListTemplate form={(
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        )}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </TodoListTemplate>
      </div>
    );
  }
}

export default Todo;