import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import Timer from "../timer/timer";

const Task = ({
  id,
  label,
  done,
  timer,
  deleteItem,
  completeItem,
  updateEdit,
}) => {
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);

  const onEdit = () => {
    console.log(label);
    setValue(label);
    setEdit(true);
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(value);
    updateEdit(id, value);
    setValue("");
    setEdit(false);
  };

  const dateCreated = formatDistanceToNow(new Date(), {
    includeSeconds: true,
    addSuffix: true,
  });
  let liClass = " ";
  if (done) liClass += " completed";
  if (edit) liClass += " editing";

  return (
    <li className={liClass}>
      <div className="view">
        <input
          id={id}
          className="toggle"
          type="checkbox"
          checked={done}
          onChange={(e) => {
            completeItem(id, e.target.checked);
          }}
        ></input>
        <label htmlFor={id}>
          <span className="title">{label}</span>
          <span className="description">
            <Timer initialTime={timer} done={done} />
          </span>
          <span className="description">{dateCreated}</span>
        </label>
        <button className="icon icon-edit" onClick={onEdit}></button>
        <button className="icon icon-destroy" onClick={deleteItem}></button>
      </div>
      <form
        onSubmit={(e) => {
          onSubmitEdit(e);
        }}
      >
        <input
          className="edit"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </form>
    </li>
  );
};

export default Task;
