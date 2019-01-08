import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import ToDoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {

  const todoData = [
    { label: 'Drink Coffe', important: false },
    { label: 'Drink Tea', important: true },
    { label: 'Eat Something', important: false },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));