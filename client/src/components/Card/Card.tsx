import React from 'react'
import Image from '../../assets/images/download.jpg'

const Card = () => {
  return (
    <div className="card">
        <div className="cardImageContainer">
            <img src={Image} alt="" className="cardImage" />
        </div>
        <div className="cardBody">
           <div className="cardTitleContainer">  
            <h3 className="cardTitle"> Titlu </h3>
            </div>
            <div className="cardSecondContainer"> 
            <p className="cardLocation"> Locatie si timestamp </p>
            <h3 className="cardPrice"> 99 lei </h3>
            </div>
        </div>
    </div>
    )
}

export default Card