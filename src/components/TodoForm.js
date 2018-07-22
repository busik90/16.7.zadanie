import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    }
  }

  onChangeHandle = (event) => {
    this.setState({todoText: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.todoText.length >= 5) {
      this.props.addTodo(this.state.todoText);
      this.setState({todoText: ''});
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          onChange={this.onChangeHandle}
          value={this.state.todoText}
          placeholder='Thing to do'
        />
        <input
          type='submit'
          value='+'
        />
      </form>
    )
  }
}

export default TodoForm;