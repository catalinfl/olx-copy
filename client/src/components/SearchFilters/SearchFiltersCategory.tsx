import React from 'react'

export default function SearchFiltersCategory() {
  return (
    <div className="searchFiltersContainer__categoryContainer">
        <div className="searchFiltersContainer__sort">
            <p> Sorteaza dupa: </p>
            <select name="sort" id="sort">
                <option value="relevance"> Relevanta </option>
                <option value="price"> Pret </option>
                <option value="date"> Data </option>
            </select>
            <p> Cum sunt anunturile organizate? </p>
            <p> Moneda: </p>
            <select name="currency" id="currency">
                <option value="RON"> RON </option>
                <option value="EUR"> EUR </option>
            </select>
        </div>
        <div className="searchFiltersContainer__searchCategories">
            <p> Auto, moto si imbarcatiuni, </p>
            <p> Imobiliare, </p>
            <p> Electronice si electrocasnice, </p>
            <p> Animale de companie, </p>
            <p> Sport si timp liber, </p>
            <p> Moda si frumusete, </p>
            <p> Copii si bebelusi, </p>
            <p> Casa si gradina, </p>
            <p> Hobby, arta si colectii, </p>
            <p> Muzica, filme si carti, </p>
            <p> Servicii, </p>
            <p> Locuri de munca </p>
        </div>
    </div>
    )
}
