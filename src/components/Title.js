import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.tasksNumber = this.props.todoItemsArray.length;
  }

  taskWord = () => {
    return this.tasksNumber == 1 ? 'task' : 'tasks';
  }

  render() {
    return (
      <h1>Todo App: You have {this.tasksNumber} {this.taskWord()} to do!</h1>
    );
  }
}

export default Title;