import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

Todo.defaultProps = {
  onClick: () => {},
  completed: false,
  text: '',
  category: null,
};

export default Todo;
