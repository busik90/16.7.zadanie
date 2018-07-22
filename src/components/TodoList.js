import React from 'react';
import style from './css/TodoList.css';

const TodoList = props => {
  const liElem = props.todoItemsArray.map( item => <li className={style.TodoItem} key={item.id}>{item.text}</li> )

  return (
    <ul className={style.TodoList}>{liElem}</ul>
  )
}

export default TodoList;