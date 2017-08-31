import React from 'react';
import TodosContainer from './todos/TodosContainer';

import './app.css';

const App = () => (
  <div className="app-container">
    <div className="app-header">
      <h1>Meaning to...</h1>
    </div>

    <TodosContainer />
  </div>
);

export default App;
