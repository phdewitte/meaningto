import React from 'react';
import FilterLink from '../FilterLink';

const FilterSet = ({ type, displayMsg, filterOptions }) => {
  var filters = [];
  for (let i = 0; i < filterOptions.length; i++) {
    let whatToShow = `SHOW_${filterOptions[i].toUpperCase()}`;

    if (filterOptions[i] !== 'All'
      && filterOptions[i] !== 'Active'
      && filterOptions[i] !== 'Completed'
    ) {
      whatToShow = 'SHOW_CATEGORY';
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
      </div>
    )
  };
  
  return (
    <div>
      {displayMsg}:
      {filters}
    </div>
  )
};

export default FilterSet;
