import React from 'react'
import SearchFiltersCategory from './SearchFiltersCategory'
import SearchFiltersFind from './SearchFiltersFind'
import SearchFiltersMisc from './SearchFiltersMisc'

const SearchFilters = () => {
  return (
    <div className="searchFilters">
        <div className="searchFiltersContainer">
            <SearchFiltersMisc />
            <SearchFiltersFind />
            <SearchFiltersCategory />
        </div>
    </div>
    )
}

export default SearchFilters