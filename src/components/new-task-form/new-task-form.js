import { useState } from "react";

const NewTaskForm = ({ onItemAdd }) => {
  const [label, setLabel] = useState("");
  const [min, setMinute] = useState("");
  const [sec, setSecond] = useState("");

  const onEnter = (event) => {
    if (event.key === "Enter" && label.trim()) {
      onItemAdd(label, min, sec);
      setLabel("");
      setMinute("");
      setSecond("");
    }
  };

  return (
    <header className="app-header">
      <h1 className="app-title">todos</h1>
      <form className="new-todo-form" onKeyUp={onEnter}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(e) => setLabel(e.target.value)}
          value={label}
          autoFocus
        ></input>
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={(e) => setMinute(e.target.value)}
          value={min}
          type="number"
          min={0}
          autoFocus
        ></input>
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={(e) => setSecond(e.target.value)}
          value={sec}
          type="number"
          min={0}
          autoFocus
        ></input>
      </form>
    </header>
  );
};

export default NewTaskForm;
