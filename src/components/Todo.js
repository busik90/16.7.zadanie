import React from 'react';
import style from './css/Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    setTimeout(() => this.props.animateTodoList('add', this.props.todoItem.id), 200);
  }

  render() {
    return (
      <li id={this.props.todoItem.id}
          className={style.TodoItem}
          onClick={() => this.props.removeTodoItem(this.props.todoItem.id)}
      >
        {this.props.todoItem.text}
      </li>
    )
  }
}

export default Todo;