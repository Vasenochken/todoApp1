import { Component } from 'react';
import './tasks-filter.css';

export default class TaskFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  render() {
    const { changeFilter, filter } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isSelected = filter === name;
      const classBtn = isSelected ? 'selected' : ' ';
      return (
        <li key={name}>
          <button className={classBtn} type="button" onClick={() => changeFilter(name)}>
            {label}
          </button>
        </li>
      );
    });
    return <ul className="filters">{buttons}</ul>;
  }
}
