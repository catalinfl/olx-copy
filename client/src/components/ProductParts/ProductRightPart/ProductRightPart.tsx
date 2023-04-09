import React from 'react'
import { BsInfo, BsQuestion } from 'react-icons/bs'
import Image from '../../../assets/images/download.jpg'
const ProductRightPart = () => {
  return (
        <div className="productRightPart">
            <div className="productAboutUser">
                <p className="productMisc"> PRIVAT <BsInfo className="icon"/> </p>
                <div className="productUserContainer">
                    <img src={Image} />
                    <div className="productUserInfoContainer">
                        <p className="productUserName"> Mihai </p>
                        <p className="productUserRegister"> Pe olx din aprilie 2014 </p>
                        <p className="productUserLastLogin"> Activ pe 05 aprilie 2023 </p>
                    </div>
                </div>
                <div className="productUserRating">
                    <div className="productUserRatingContainer">
                    <BsQuestion />
                    <p className="ratingInfo"> Utilizatorul nu a primit inca evaluari </p>
                    </div>
                    <p className="ratingQuestion"> Cum functioneaza rating-urile? </p>
                </div>
                <div className="buttonContainer">
                    <button className="productUserButton"> Suna vanzatorul </button>
                    <button className="productUserButton"> Trimite mesaj </button>
                </div>
                <p> Mai multe anunturi ale acestui vanzator </p>
            </div>
        </div>

  )
}

export default ProductRightPart