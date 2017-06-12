import { createSelector } from 'reselect';

export const todosSelector = state => state && state.todos;

export const todoSelectors = createSelector(
  todosSelector,
  todos => ({
    todos,
  }),
);
