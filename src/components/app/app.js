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
      { id: 1, label: 'Drink Coffe', important: false },
      { id: 2, label: 'Drink Tea', important: true },
      { id: 3, label: 'Eat Something', important: false },
    ],
  };

  addItem = (text) => {
    const newItem = {
      id: this.maxId++,
      label: text,
      important: false
    }
    
    this.setState((state) => {
      const newArray = [...state.todoData, newItem];
      return {
        todoData: newArray
      }
    })
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
    return (
      <div className="todo-app">
        <AppHeader todo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <AddItemForm onItemAdded={this.addItem}/>
      </div>
    );
  };
};
