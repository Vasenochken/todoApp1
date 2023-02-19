import { Component } from 'react';

import TaskFilter from '../tasks-filter/tasks-filter.js';
import './footer.css';

export default class Footer extends Component {
  render() {
    const { onClear, changeFilter, filter, count } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{count} items left</span>
        <TaskFilter filter={filter} changeFilter={changeFilter} />
        <button className="clear-completed" onClick={onClear}>
          Clear completed
        </button>
      </footer>
    );
  }
}
