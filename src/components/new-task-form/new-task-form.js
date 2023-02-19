import { Component } from 'react';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.label.trim()) this.props.onItemAdded(this.state.label);
    else alert('O_0ps! You didn`t finish the task');

    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <header className="app-header">
        <h1 className="app-title">todos</h1>
        <form className="new-task-form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={this.state.label}
            autoFocus
          ></input>
        </form>
      </header>
    );
  }
}
