import { Component } from 'react';
// import './new-task-form.css';

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      min: '',
      sec: '',
    };
  }

  onEnter = (event) => {
    if(event.key === 'Enter' && this.state.label.trim()) {
      console.log('onEnter: sendState: ', this.state)
      this.props.onItemAdd(this.state.label, this.state.min, this.state.sec)
      this.setState({
        label: '',
        min: '',
        sec: '',
      })
    }
  }

  render() {
    return (
      <header className="app-header">
        <h1 className="app-title">todos</h1>
        <form className="new-todo-form" onKeyUp={this.onEnter}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={(e) => this.setState({label: e.target.value})}
            value={this.state.label}
            autoFocus
          ></input>
          <input 
            className="new-todo-form__timer"
            placeholder="Min" 
            onChange={(e) => this.setState({min: e.target.value})}
            value={this.state.min}
            type="number"
            min={0}
            autoFocus
          ></input>
          <input 
            className="new-todo-form__timer"
            placeholder="Sec"
            onChange={(e) => this.setState({sec: e.target.value})}
            value={this.state.sec}
            type="number"
            min={0}
            autoFocus
          ></input>
          </form>
      </header>
    );
}
}