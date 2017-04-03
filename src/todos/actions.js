import * as actionTypes from './actionTypes';

export const addTodo = (text, category, price) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      text,
      category,
      price,
    }
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter,
  };
};

export const toggleTodo = id => {
  return {
    type: actionTypes.TOGGLE_TODO,
    id,
  };
};
