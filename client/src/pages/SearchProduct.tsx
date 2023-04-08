import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import SearchFilters from '../components/SearchFilters/SearchFilters'
import Search from '../components/SearchInput/Search'

const SearchProduct = () => {
  return (
    <div className="SearchProduct">
        <Navbar />
        <Search />
        <SearchFilters />
        <Footer />
    </div>
    )
}

export default SearchProduct