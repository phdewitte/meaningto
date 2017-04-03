import React from 'react';
import FilterLink from '../FilterLink';

const FilterSet = ({ type, displayMsg, filterItems }) => {
  const filters = [];

  for (let i = 0; i < filterItems.length; i++) {
    filters.push(
      <div key={`${type}-${i}`}>
        <FilterLink
          filter={`SHOW_${filterItems[i].toUpperCase()}`}>
          {filterItems[i]}
        </FilterLink>
        {i === filterItems.length - 1 ? ' ' : ', '}
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
