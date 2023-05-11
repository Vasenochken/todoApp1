import Task from "../task/task";

const TaskList = ({ todoData, deleteItem, completeItem, updateEdit }) => {
  return (
    <ul className="todo-list">
      {todoData.map(({ ...item }) => {
        return (
          <Task
            key={item.id}
            id={item.id}
            label={item.label}
            done={item.done}
            date={item.date}
            timer={item.timer}
            deleteItem={() => deleteItem(item.id)}
            completeItem={completeItem}
            updateEdit={updateEdit}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
