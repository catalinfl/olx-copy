import React from 'react'
import Image from '../../assets/audit.svg'
const InfoCategories = () => {
  return (
    <div className="infoCategories">
        <div className="infoCategoriesContainer">
            <img src={Image} alt="" className="infoCategoriesImage" />
            <p className="titleCategories"> 
            <span className="infoCategories__title"> Categorii principale: </span> <span className="infoCategories__text">
            Auto, moto si ambarcatiuni, Imobiliare, Locuri de munca, Electronice si electrocasnice, Moda si frumusete, Piese auto, Casa si gradina, Mama si copilul, Sport, timp liber, arta, Animale de companie, Agro si industrie, Servicii, Echipamente profesionale si vanzare companii, Cazare - Turism, Inchiriere bunuri si vehicule
            </span>
            </p>
        </div>
        </div>
    )
}

export default InfoCategories