import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text, category, price }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {`${text} - ${price} - ${category}`}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  category: PropTypes.string,
  price: PropTypes.string,
};

Todo.defaultProps = {
  onClick: () => {},
  completed: false,
  text: '',
  category: null,
  price: '',
};

export default Todo;
