import { formatDistanceToNow } from 'date-fns';
import { Component } from 'react';
import Timer from '../timer/timer';

export default class Task extends Component {
  constructor(props) {
    super()
    this.state = {
      label: '',
      edit: false,
    }
  }

  onEdited() {
    this.setState({
      edit: true,
      label: this.props.label,
    });
  };

  changeLabel(event) {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmitEdit(event) {
    event.preventDefault();
    const { updateEdit, id } = this.props;
    const text = this.state.label;
    updateEdit(id, text);
    this.setState({
      label: '',
      edit: false,
    });
  };
  
  render() {
    const { label, done, id, date, onDeleted, onCompleted } = this.props;
    let dateCreated = formatDistanceToNow(date, { includeSeconds: true, addSuffix: true });
    let liClass = '';
    if (done) {
      liClass += ' completed';
    }
    if (this.state.edit) liClass += ' editing';

    return (
      <li className={liClass}>
        <div className="view">
          <input
            id={id}
            className="toggle"
            type="checkbox"
            checked={done}
            onChange={(event) => {
              onCompleted(id, event.target.checked);
            }}
          ></input>
          <label htmlFor={id}>
            <span className="title">{label}</span>
            <span className="description">
                <Timer initialTime={this.props.timer} done={done}/>
            </span>
            <span className="description">{dateCreated}</span>
          </label>
          <button className="icon icon-edit" onClick={this.onEdited}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <form onSubmit={this.onSubmitEdit}>
          <input
            className="edit"
            type="text"
            value={this.state.label}
            onChange={(event) => this.changeLabel(event)}
          ></input>
        </form>
      </li>
    );
  }
}
