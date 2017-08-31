import React, { PropTypes } from 'react';
import FilterLink from './FilterLink';

const FilterSet = ({ type, displayMsg, filterOptions }) => {
  const filters = [];

  for (let i = 0; i < filterOptions.length; i += 1) {
    let filterType = `SHOW_${filterOptions[i].toUpperCase()}`;

    if (filterOptions[i] !== 'All'
      && filterOptions[i] !== 'Active'
      && filterOptions[i] !== 'Completed'
    ) {
      filterType = 'SET_CATEGORY';
    }

    filters.push(
      <div key={`${type}-${i}`}>
        <FilterLink
          filter={filterType}
        >
          {filterOptions[i]}
        </FilterLink>
      </div>,
    );
  }

  return (
    <div className="filter-set">
      <div className="filter-set__title">
        {displayMsg}:
      </div>
      <div className="filter-set__list">
        {filters}
      </div>
    </div>
  );
};

FilterSet.propTypes = {
  type: PropTypes.string.isRequired,
  displayMsg: PropTypes.string.isRequired,
  filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterSet;
