import React from 'react'
import { BsInfoCircle, BsQuestion } from 'react-icons/bs'
import { MdLocationCity } from 'react-icons/md'
import Image from '../../../assets/images/download.jpg'
const ProductRightPart = () => {
  return (
        <div className="productRightPart">
            <div className="productAboutUser">
                <p className="productMisc"> PRIVAT <BsInfoCircle className="icon"/> </p>
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
                    <BsQuestion className="icon"/>
                    <p className="ratingInfo"> Utilizatorul nu a primit inca evaluari </p>
                    </div>
                    <p className="ratingQuestion"> Cum functioneaza rating-urile? </p>
                </div>
                <div className="buttonContainer">
                    <button className="productUserButton call"> Suna vanzatorul </button>
                    <button className="productUserButton send"> Trimite mesaj </button>
                </div>
                <p className="info"> Mai multe anunturi ale acestui vanzator </p>
            </div>
            <div className="productLocationContainer">
                <div className="productTitle">
                    <h2> LOCALIZARE </h2>
                </div>
                <div className="productLocation">
                    <MdLocationCity className="icon"/>
                    <p> Bucuresti, <span> Sectorul 1  </span> </p>
                    <img src={Image} alt="locationImage" className="locationImage" />
                </div>
            </div>
        </div>

  )
}

export default ProductRightPart