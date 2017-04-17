import React from 'react';
import FilterLink from '../FilterLink';

const FilterSet = ({ type, displayMsg, filterItems }) => {
  var filters = [];

  for (let i = 0; i < filterItems.length; i++) {
    let whatToShow = `SHOW_${filterItems[i].toUpperCase()}`;

    if (filterItems[i] !== 'All'
      || filterItems[i] !== 'Active'
      || filterItems[i] !== 'Completed'
    ) {
      whatToShow = 'SHOW_CATEGORY';
    }

    const listSeparator = i === filterItems.length - 1 
      ? ' '
      : ', ';

    filters.push(
      <div key={`${type}-${i}`}>
        <FilterLink
          filter={whatToShow}>
          {filterItems[i]}
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
