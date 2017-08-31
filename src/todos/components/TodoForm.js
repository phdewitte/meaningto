import React from 'react';

import styles from './TodoForm.css';

const TodoForm = (props) => {
  let text;
  let category;
  let price;

  const submitTodo = (e) => {
    e.preventDefault();

    const { addTodo } = props;

    if (!text.value.trim()) {
      return;
    }

    if (typeof addTodo === 'function') {
      addTodo(text.value, category.value, price.value);
    }

    text.value = '';
    category.value = '';
    price.value = '';
  };

  // TODO: Convert from refs to controlled component structure
  return (
    <div>
      <form
        onSubmit={submitTodo}
        className="todo-form"
      >
        <input
          ref={(node) => { text = node; }}
          className="todo-form__input-row"
          label="description"
          name="Description"
        />
        <input
          ref={(node) => { price = node; }}
          type="number"
          placeholder="$"
          className="todo-form__input-row"
          label="price"
          name="Price"
        />
        <select
          name="category"
          ref={(node) => { category = node; }}
          className="todo-form__input-dropdown"
        >
          <option defaultValue value="None">None</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Concerts">Concerts</option>
          <option value="Theatre">Theatre</option>
          <option value="Parks">Parks</option>
        </select>

        <button
          type="submit"
          className="todo-form__submit-button"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
