import React from 'react';

import AppHeader from '../app-header';
import ToDoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

  const todoData = [
    { id: 1, label: 'Drink Coffe', important: false },
    { id: 2, label: 'Drink Tea', important: true },
    { id: 3, label: 'Eat Something', important: false },
  ];

  return (
    <div className="todo-app">
      <AppHeader todo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList todos={todoData} onDeleted={(id) => console.log(id)} />
    </div>
  );
};

export default App;