import React, { PropTypes } from 'react';
import FilterLink from './FilterLink';

const FilterSet = ({ type, displayMsg, filterOptions }) => {
  const filters = [];

  for (let i = 0; i < filterOptions.length; i += 1) {
    let whatToShow = `SHOW_${filterOptions[i].toUpperCase()}`;

    if (filterOptions[i] !== 'All'
      && filterOptions[i] !== 'Active'
      && filterOptions[i] !== 'Completed'
    ) {
      whatToShow = 'SET_CATEGORY';
    }

    const listSeparator = i === filterOptions.length - 1
      ? ' '
      : ', ';

    filters.push(
      <div key={`${type}-${i}`}>
        <FilterLink
          filter={whatToShow}
        >
          {filterOptions[i]}
        </FilterLink>
        {listSeparator}
      </div>,
    );
  }

  return (
    <div>
      {displayMsg}:
      {filters}
    </div>
  );
};

FilterSet.propTypes = {
  type: PropTypes.string.isRequired,
  displayMsg: PropTypes.string.isRequired,
  filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterSet;
