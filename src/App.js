import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import PropTypes from 'prop-types';

import TodoList from './components/todo/TodoList';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import About from './components/pages/About'

import './App.css';


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) todo.completed = !todo.completed
      return todo
    })
  })
  }

  removeTodo = (id) => { 
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos].filter( todo => (todo.id !== id)) }))
  }

  addTodo = (title) => { 
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title, 
      completed: false
    })
    .then(res => this.setState({todos: [...this.state.todos, res.data]}))
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} removeTodo={this.removeTodo}/>
                <AddTodo addTodo={this.addTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
      
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default App;
