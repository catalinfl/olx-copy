import React from 'react'
import ProductLeftPart from '../ProductLeftPart/ProductLeftPart'
import ProductRightPart from '../ProductRightPart/ProductRightPart'
export default function ProductId() {
  return (
    <div className="productId">
        <div className="productContainer">
            <div className="leftPart">
                <ProductLeftPart />
            </div>
            <div className="rightPart">
                <ProductRightPart />
            </div>
        </div>
    </div>
    )
}
