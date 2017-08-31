import * as actionTypes from './actionTypes';

export const addTodo = (text, category, price) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    text,
    category,
    price,
  },
});

export const setActiveState = filterComponents => ({
  type: actionTypes.SET_ACTIVE_STATE,
  payload: {
    filter: filterComponents.filter,
  },
});

export const setCategory = filterComponents => ({
  type: actionTypes.SET_CATEGORY,
  payload: {
    filter: filterComponents.filter,
    category: filterComponents.children,
  },
});


export const setVisibilityFilter = filterComponents => (
  (dispatch) => {
    const isActiveStateUpdate = filterComponents.children === 'All'
      || filterComponents.children === 'Active'
      || filterComponents.children === 'Completed';

    return isActiveStateUpdate
      ? dispatch(setActiveState(filterComponents))
      : dispatch(setCategory(filterComponents));
  });

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  id,
});

export default {
  addTodo,
  setActiveState,
  setCategory,
  setVisibilityFilter,
  toggleTodo,
};
