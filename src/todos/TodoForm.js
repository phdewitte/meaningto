import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

let TodoForm = ({ dispatch }) => {
  let text;
  let category;
  let price;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!text.value.trim()) {
            return;
        }
        dispatch(addTodo(text.value, category.value, price.value));
        text.value = '';
        category.value = '';
        price.value = '';
      }}>
        <input ref={node => {
          text = node;
        }} />
        <input ref={node => {
          category = node;
        }} />
        <input ref={node => {
          price = node;
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

TodoForm = connect()(TodoForm);

export default TodoForm;
