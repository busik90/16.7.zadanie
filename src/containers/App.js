import React from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';

import style from './App.css';
import TodoStyle from '../components/css/Todo.css'

import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          text: 'clean room'
        },
        {
          id: 2,
          text: 'wash the dishes'
        },
        {
          id: 3,
          text: 'feed my cat'
        }
      ]
    };
  }

  addTodo = (val) => {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];

    this.setState({data});
    // setTimeout(() => this.animateTodoList(todo.id), 100);
  }

  removeTodo = (id) => {
    const itemToRemove = this.state.data.filter(todo => todo.id == id);

    this.animateTodoList('remove', itemToRemove[0].id);
    setTimeout(() => {
      const remainder = this.state.data.filter(todo => todo.id !== id);
      this.setState({data: remainder});
    }, 500);
  }

  animateTodoList = (param, idName) => {
    const elem = document.getElementById(idName);

    switch(param) {
      case 'add':
        elem.style.height = `${elem.scrollHeight + 5.8}px`;
        break;
      case 'remove':
        elem.style.removeProperty('height');
        break;
    }

    elem.classList.toggle(TodoStyle.visable);
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title
          todoItemsArray={this.state.data}
        />
        <TodoForm
          addTodo={this.addTodo}
        />
        <TodoList
          todoItemsArray={this.state.data}
          removeTodoItem={this.removeTodo}
          animateTodoList={this.animateTodoList}
        />
      </div>
    );
  }
}

export default hot(module)(App);