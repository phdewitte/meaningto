import React from 'react';
import TodoForm from './todos/TodoForm';
import FilterSet from './todos/components/FilterSet';
import TodoList from './todos/components/TodoList';

import styles from './app.css';

const App = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1>Meaning to...</h1>
    </div>

    <TodoForm />
    <TodoList />
    <FilterSet
      type="activeState"
      displayMsg="Completed State"
      filterOptions={['All', 'Active', 'Completed']}
    />
    <FilterSet
      type="categories"
      displayMsg="Categories"
      filterOptions={['Restaurants', 'Concerts', 'Theatre', 'Parks']}
    />
  </div>
);

export default App;
