import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text, category, price }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {`Description: ${text} Price: ${price} Category: ${category}`}
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
};

export default Todo;
