import { Component } from 'react';

import NewTaskForm from '../new-task-form/new-task-form.js';
import TaskList from '../task-list/task-list.js';
import Footer from '../footer/footer.js';

import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [],
      filter: 'all',
    };
  }

  // maxId = 100;

  onItemAdded = (text) => {
    const newItem = {
      label: text,
      done: false,
      date: new Date(),
      id: this.maxId++,
    };
    this.setState(({ todoData }) => {
      const newArr = [...todoData];
      newArr.push(newItem);
      return {
        todoData: newArr,
      };
    });
  };

  completeItem = (id, value) => {
    this.setState(({ todoData }) => {
      const newArr = todoData.map((el) => {
        if (el.id === id) el.done = value;
        return el;
      });
      return { todoData: newArr };
    });
  };

  updateEdit = (id, text) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData];
      newArr[index].label = text;
      return {
        todoData: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData];
      newArr.splice(index, 1);
      return {
        todoData: newArr,
      };
    });
  };

  changeFilter = (filterName) => {
    this.setState({ filter: filterName });
  };

  filterItems = (todoData, filter) => {
    switch (filter) {
      case 'all':
        return todoData;
      case 'active':
        return todoData.filter((item) => !item.done);
      case 'completed':
        return todoData.filter((item) => item.done);
      default:
        return todoData;
    }
  };

  clear = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((elem) => elem.done !== true);
      if (newArr.length > 0)
        return {
          todoData: newArr,
        };
      else
        return {
          todoData: [],
        };
    });
  };

  render() {
    return (
      <div className="bdy">
        <section className="todoApp">
          <NewTaskForm onItemAdded={this.onItemAdded} />
          <section className="main">
            <TaskList
              todoData={this.filterItems(this.state.todoData, this.state.filter)}
              onDeleted={(id) => this.deleteItem(id)}
              onCompleted={this.completeItem}
              updateEdit={this.updateEdit}
            />
            <Footer
              count={this.filterItems(this.state.todoData, this.state.filter).length}
              filter={this.state.filter}
              changeFilter={this.changeFilter}
              onClear={() => this.clear(this.state.todoData)}
            />
          </section>
        </section>
      </div>
    );
  }
}
