import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductHistory from '../components/ProductParts/ProductHistory/ProductHistory'
import ProductId from '../components/ProductParts/ProductId/ProductId'
import Search from '../components/SearchInput/Search'

const ProductPage = () => {
  return (
    <div className="productPage" style={{backgroundColor: "#f7f2f2"}}>
        <Navbar />
        <Search />
        <ProductHistory />
        <ProductId />
    </div>
    )
}

export default ProductPage