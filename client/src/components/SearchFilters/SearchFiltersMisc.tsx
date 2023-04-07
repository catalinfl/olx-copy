import React from 'react'
import { IoIosHeartEmpty } from 'react-icons/io'

export default function SearchFiltersMisc() {
  return (
    <div className="searchFiltersContainer__misc">
        <div className="searchFiltersContainer__misc__services">
           <div className="searchFiltersContainer__misc__services__item"> 
            <input type="checkbox" className="checkmark" />
            <p> Doar cu poze </p>
            </div>
            <div className="searchFiltersContainer__misc__services__item"> 
            <input type="checkbox" />
            <p> Livrare prin OLX disponibila </p>
            </div>
        </div>
        <div className="searchFiltersContainer__misc__save">
            <button className="searchFiltersSaveButton">
                <IoIosHeartEmpty className="searchFiltersIcon" /> Salveaza cautarea </button>
        </div>
    </div>
    )
}
