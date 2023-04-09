import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'

const ProductHistory = () => {
  return (
    <div className="productHistory">
      <div className="productHistoryContainer">
        <div className="productHistoryButtonContainer">
          <IoMdArrowBack className="buttonIcon"/>
          <button className="productHistoryButton">  Inapoi </button>
        </div>
        <div className="productHistoryTitleContainer">
          <h5> Pagina principala </h5>
        </div>
        </div>
    </div>
    )
}

export default ProductHistory