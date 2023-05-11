import { useState } from "react";

import NewTaskForm from "../new-task-form/new-task-form.js";
import TaskList from "../task-list/task-list.js";
import Footer from "../footer/footer.js";

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState("all");

  const generateId = () => {
    const date = Date.now();
    const random = Math.floor(Math.random() * 1000);
    const newId = parseInt(`${date}${random}`);
    return newId;
  };

  const onItemAdd = (text, min, sec) => {
    const newItem = {
      label: text,
      done: false,
      date: new Date(),
      id: generateId(),
      timer: +min * 60 + +sec,
    };
    const newArr = [...todoData];
    newArr.push(newItem);
    setTodoData(newArr);
  };

  const deleteItem = (id) => {
    const index = todoData.findIndex((el) => el.id === id);
    const newArr = [...todoData];
    newArr.splice(index, 1);
    setTodoData(newArr);
  };

  const completeItem = (id, done) => {
    const newArr = todoData.map((el) => {
      if (el.id === id) el.done = done;
      return el;
    });
    setTodoData(newArr);
  };

  const updateEdit = (id, text) => {
    const index = todoData.findIndex((el) => el.id === id);
    const newArr = [...todoData];
    newArr[index].label = text;
    setTodoData(newArr);
  };

  const changeFilter = (filterName) => {
    setFilter(filterName);
  };

  const clear = () => {
    const newArr = todoData.filter((elem) => elem.done !== true);
    setTodoData(newArr);
  };

  const filterItems = (todoData, filter) => {
    switch (filter) {
      case "all":
        return todoData;
      case "active":
        return todoData.filter((item) => !item.done);
      case "completed":
        return todoData.filter((item) => item.done);
      default:
        return todoData;
    }
  };

  return (
    <section className="todoApp">
      <NewTaskForm onItemAdd={onItemAdd} />
      <section className="main">
        <TaskList
          todoData={filterItems(todoData, filter)}
          deleteItem={deleteItem}
          completeItem={completeItem}
          updateEdit={updateEdit}
        />
        <Footer
          count={filterItems(todoData, filter).length}
          filter={filter}
          changeFilter={changeFilter}
          clear={clear}
        />
      </section>
    </section>
  );
};

export default App;
