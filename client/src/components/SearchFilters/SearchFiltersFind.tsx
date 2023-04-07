import React from 'react'

export default function SearchFiltersFind() {
  return (
    <div className="searchFiltersContainer__find">
        <div className="searchFiltersContainer__title">
            <h3> Filtre </h3>
        </div>
        <div className="searchFiltersContainer__filter"> 
            <div className="searchFiltersContainer__category">
                <p> Categoria </p>
                <select className="searchFiltersContainer__select" placeholder='Orice valoare'>
                    <option value="1"> Toate categoriile </option>
                    <option value="2"> Imobiliare </option>
                    <option value="3"> Auto, moto si ambarcatiuni </option>
                    <option value="4"> Electronice si electrocasnice </option>
                    <option value="5"> Animale de companie </option>
                    <option value="6"> Sport si timp liber </option>
                    <option value="7"> Moda si frumusete </option>
                    <option value="8"> Copii si bebelusi </option>
                    <option value="9"> Casa si gradina </option>
                    <option value="10"> Hobby, arta si culectii </option>
                    <option value="11"> Muzica, filme si carti </option>
                    <option value="12"> Servicii </option>
                    <option value="13"> Locuri de munca </option>
                    <option value="14" disabled selected style={{color: 'grey'}} > Orice categorie </option>
                </select>
            </div>
            <div className="searchFiltersContainer__price">
                <p> Pret </p>
                <div className="searchFiltersInputPart">
                <input type="number" placeholder="De la" />
                <input type="number" placeholder="Pana la" />
                </div>
            </div>
        </div>
        <div className="searchFiltersContainer__removeFilter">
            <p> Sterge filtrele </p>
        </div>
    </div>
    )
}
