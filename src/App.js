import React from 'react';
import TodosContainer from './todos/TodosContainer';

import styles from './app.css';

const App = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1>Meaning to...</h1>
    </div>

    <TodosContainer />
  </div>
);

export default App;
