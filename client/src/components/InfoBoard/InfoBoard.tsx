import React from 'react'
import Image from '../../assets/images/juicy.svg'

const InfoBoard = () => {
  return (
    <div className="infoBoard">
        <div className="infoBoard__container">
            <img className="fixedImage" src={Image} alt="" />
            <div className="allContainer">
            <div className="infoBoardText">
                <h3 className="infoBoardP1"> Creste-ti afacerea pe OLX! </h3>
                <h2 className="infoBoardP2"> Descopera oferta olx pentru afaceri </h2>
            </div>
            <div className="buttonContainer">
            <button className="infoBoardButton"> Vezi mai multe detalii </button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default InfoBoard