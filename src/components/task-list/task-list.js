import { Component } from 'react';

import Task from '../task/task';

import './task-list.css';

export default class TaskList extends Component {
  render() {
    const { todoData, onDeleted, onCompleted, updateEdit } = this.props;
    return (
      <ul className="todo-list">
        {todoData.map(({ ...item }) => {
          return (
            <Task
              key={item.id}
              id={item.id}
              label={item.label}
              done={item.done}
              edit={item.edit}
              date={item.date}
              onDeleted={() => onDeleted(item.id)}
              onCompleted={onCompleted}
              updateEdit={updateEdit}
            />
          );
        })}
      </ul>
    );
  }
}
