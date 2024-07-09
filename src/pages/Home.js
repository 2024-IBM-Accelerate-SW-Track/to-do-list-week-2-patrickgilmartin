import React, { Component } from 'react';
import AddTodo from '../component/AddTodo';
import Todos from '../component/todos';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };


  addTodo = (todo) => {
    const exists = this.state.todos.find((t) => t.content === todo.content);
    if (exists) return;
    todo.id = Math.random();
    let new_list = [...this.state.todos, todo];
    this.setState({
      todos: new_list,
    });
  };

  render() {
    return (
      <div className="Home">
        <h1>Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Home;
