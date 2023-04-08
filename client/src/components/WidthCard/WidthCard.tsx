import React from 'react'
import { CiDeliveryTruck, CiHeart } from 'react-icons/ci'
import Image from '../../assets/images/download.jpg'

export default function WidthCard() {
  return (
    <div className="widthCard">
        <div className="widthCardImageContainer">
            <img src={Image} />
        </div>
        <div className="widthCardBody"> 
        <div className="widthCardHeader">
            <div className="widthCardHeader__title">
            <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, modi! </h2>
            </div>
            <div className="widthCardHeader__priceContainer">
                <div className="widthCardHeader__price">
                <CiDeliveryTruck className="icon"/>
                <p className="whtextPrice"> 1 000 lei </p>
                </div>
            <p className="whtextInfo"> Pretul este negociabil </p>
            </div>
        </div>
        <div className="widthCardFooter">
            <div className="widthCardFooter__buttonContainer">
            <button className="widthCardFooter__button">
                Second hand
            </button>
            </div>
            <div className="widthCardFooter__infoData">
                <p> Pitesti - Reactualizat la 05 aprilie 2023 </p>
                <CiHeart className="heartIcon"/>
            </div>
        </div>
        </div>
    </div>
    )
}
