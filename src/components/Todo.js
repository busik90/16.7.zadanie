import React from 'react';
import style from './css/Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={style.TodoItem} onClick={() => this.props.removeTodoItem(this.props.todoItem.id)}>
        {this.props.todoItem.text}
      </li>
    )
  }
}

export default Todo;