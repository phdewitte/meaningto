import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visiblityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps));
  },
});

const FilterLink = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      className="filter-set__link"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterLink);
