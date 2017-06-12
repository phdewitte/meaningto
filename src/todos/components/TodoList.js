import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, filter, category) => {
  let filteredTodos = todos;

  if (category !== 'Any') {
    filteredTodos = todos.filter(todo =>
      todo.category === category);
  }

  switch (filter) {
    case 'SHOW_ALL':
      return filteredTodos;
    case 'SHOW_COMPLETED':
      return filteredTodos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return filteredTodos.filter(todo => !todo.completed);
    default:
      return filteredTodos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter, state.category),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

// Change from a UL to an evenly distributed grid of categories
// Expand category on focus
const TodoList = ({ todos, onTodoClick }) => (
  <ul >
    {todos.map(todo => (
      <Todo
        key={`td-${todo.id}`}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />),
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
