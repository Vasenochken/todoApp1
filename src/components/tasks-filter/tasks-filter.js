const TaskFilter = ({ changeFilter, filter }) => {
  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" },
  ];

  return (
    <ul className="filters">
      {buttons.map(({ name, label }) => {
        const isSelected = filter === name;
        const classBtn = isSelected ? "selected" : " ";
        return (
          <li key={name}>
            <button
              className={classBtn}
              type="button"
              onClick={() => changeFilter(name)}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskFilter;
