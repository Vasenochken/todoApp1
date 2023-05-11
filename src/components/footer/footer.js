import TaskFilter from "../tasks-filter/tasks-filter.js";

const Footer = ({ clear, changeFilter, filter, count }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TaskFilter filter={filter} changeFilter={changeFilter} />
      <button className="clear-completed" onClick={clear}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
