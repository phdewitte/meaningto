import React from 'react';
import FilterLink from '../FilterLink';

const FilterSet = ({ type, displayMsg, filterItems }) => {
  const filters = [];

  for (let i = 0; i < filterItems.length; i++) {
    let showFilter = `SHOW_${filterItems[i].toUpperCase()}`;

    if (filterItems[i] !== 'All'
      || filterItems[i] !== 'Active'
      || filterItems[i] !== 'Completed'
    ) {
      showFilter = 'SHOW_CATEGORY';
    }

    const separator = i === filterItems.length - 1 
      ? ' '
      : ', ';

    filters.push(
      <div key={`${type}-${i}`}>
        <FilterLink
          filter={showFilter}>
          {filterItems[i]}
        </FilterLink>
        {separator}
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
