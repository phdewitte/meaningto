import React, { Component } from 'react';
import TodoForm from './todos/TodoForm';
import FilterSet from './todos/components/FilterSet';
import TodoList from './todos/components/TodoList';

import styles from './app.css';

const App = () => {
  return (
    <div>
      <h1>Meaning to...</h1>

      <TodoForm />
      <TodoList />
      <FilterSet
        type="activeState"
        displayMsg="Completed State"
        filterItems={['All', 'Active', 'Completed']}
      />
      <FilterSet
        type="categories"
        displayMsg="Categories"
        filterItems={['Restaurants', 'Concerts', 'Theatre', 'Parks']}
      />
    </div>
  );
};

export default App;
