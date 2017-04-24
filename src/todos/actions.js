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

export const setActiveState = (filterComponents) => {
  return {
    type: actionTypes.SET_ACTIVE_STATE,
    payload: {
      filter: filterComponents.filter,
    }
  };
}

export const setCategory = (filterComponents) => {
 return {
    type: actionTypes.SHOW_CATEGORY,
    payload: {
      filter: filterComponents.filter,
      category: filterComponents.children,
    }
  }; 
}


export const setVisibilityFilter = (filterComponents) => {
  return dispatch => {
    const isActiveState = filterComponents.children === 'All'
      || filterComponents.children === 'Active'
      || filterComponents.children === 'Completed';

    return isActiveState
      ? dispatch(setActiveState(filterComponents))
      : dispatch(setCategory(filterComponents))
  }
};

export const toggleTodo = id => {
  return {
    type: actionTypes.TOGGLE_TODO,
    id,
  };
};
