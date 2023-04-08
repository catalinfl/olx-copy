import React from 'react'
import WidthCard from '../WidthCard/WidthCard'
import SearchFiltersCards from './SearchFiltersCards'
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
            <SearchFiltersCards />
        </div>
    </div>
    )
}

export default SearchFilters