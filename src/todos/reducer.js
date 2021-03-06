import uuid from 'uuid';
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const todo = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        id: uuid.v4(),
        text: action.payload.text,
        category: action.payload.category,
        price: action.payload.price,
        completed: false,
      };

    case actionTypes.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, todo({}, action)];
    case actionTypes.TOGGLE_TODO:
      return state.map(item => todo(item, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_STATE:
      return action.payload.filter;
    default:
      return state;
  }
};

const category = (state = 'Any', action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORY:
      return action.payload.category;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  category,
});

export default rootReducer;
