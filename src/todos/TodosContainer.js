import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TodoForm, TodoList, FilterSet } from './components';
import * as todoActions from './actions';
import { todoSelectors } from './selectors';

const mapDispatch = dispatch => ({
  todoActions: bindActionCreators(todoActions, dispatch),
});

const TodosContainer = props => (
  <div>
    <TodoForm
      addTodo={props.todoActions.addTodo}
    />

    <TodoList />

    <FilterSet
      type="activeState"
      displayMsg="Completed State"
      filterOptions={['All', 'Active', 'Completed']}
    />

    <FilterSet
      type="categories"
      displayMsg="Categories"
      filterOptions={['Restaurants', 'Concerts', 'Theatre', 'Parks']}
    />
  </div>
);

TodosContainer.propTypes = {
  todoActions: PropTypes.shape({
    addTodo: PropTypes.func,
  }),
};

TodosContainer.defaultProps = {
  todoActions: null,
};

export default connect(todoSelectors, mapDispatch)(TodosContainer);
