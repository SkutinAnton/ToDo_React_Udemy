import React, { Component } from 'react';

import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form'

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createToDoItem('Drink Coffe'),
      this.createToDoItem('Drink Tea'),
      this.createToDoItem('Eat Something'),
    ],
  };

  createToDoItem(label) {
    return {
      id: this.maxId++,
      label,
      done: false,
      important: false
    }
  }

  addItem = (text) => {
    const newItem = this.createToDoItem(text);
    
    this.setState((state) => {
      const newArray = [...state.todoData, newItem];
      return {
        todoData: newArray
      }
    })
  }

  onToggleImportant = (id) => {
    this.toogleProperty(id, 'important');
  }

  onToggleDone = (id) => {
    this.toogleProperty(id, 'done');
  }

  toogleProperty(id, propName) {
    this.setState((state) => {
      const filterTodoData = state.todoData.map(el => {
        if (el.id === id) {
          el[propName] = !el[propName];
        }

        return el;
      });
      
      return {
        todoData: filterTodoData,
      }
    });
  }

  deleteItem = (id) => {
    this.setState((state) => {
      const filterTodoData = state.todoData.filter((el) => el.id !== id);
      return {
        todoData: filterTodoData,
      }
    });
  };

  render() {

    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader todo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddItemForm onItemAdded={this.addItem}/>
      </div>
    );
  };
};
