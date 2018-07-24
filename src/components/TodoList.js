import React from 'react';
import Todo from './Todo.js';
import style from './css/TodoList.css';

const TodoList = props => {
  const liElem = props.todoItemsArray.map( item =>
    <Todo
      key={item.id}
      todoItem={item}
      removeTodoItem={props.removeTodoItem}
      animateTodoList={props.animateTodoList}
    />
  )

  return (
    <ul className={style.TodoList}>
      {liElem}
    </ul>
  )
}

export default TodoList;