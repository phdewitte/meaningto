import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

import styles from './TodoForm.css';

let TodoForm = ({ dispatch }) => {
  let text;
  let category;
  let price;

  const submitTodo = (e) => {
    e.preventDefault();

    if (!text.value.trim()) {
        return;
    }

    dispatch(addTodo(text.value, category.value, price.value));

    text.value = '';
    category.value = '';
    price.value = '';
  }

  return (
    <div>
      <form 
        onSubmit={submitTodo}
        className={styles.todoForm}
      >
        <input
          ref={node => { text = node; }}
          className={styles.inputRow}
        />
        <input
          ref={node => { price = node; }}
          className={styles.inputRow}
        />
        <select
          name="category"
          ref={node => { category = node; }}
        >
          <option defaultValue value="None">None</option> 
          <option value="Restaurants">Restaurants</option>
          <option value="Concerts">Concerts</option>
          <option value="Theatre">Theatre</option>
          <option value="Parks">Parks</option>
        </select>

        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

TodoForm = connect()(TodoForm);

export default TodoForm;
