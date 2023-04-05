import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

const Search = () => {
  return (
    <div className="search">
        <div className="search__container">
            <div className="search__input">
                <AiOutlineSearch className="search__inputIcon" />
                <input className="search__inputField" type="text" placeholder="Caută anunțuri" /> 
            </div>
                <div className="search__button">
                    <button className="search__buttonField"> <span className="iconLocation"> <CiLocationOn/> </span> Toată România </button>
                </div>
                <div className="search__buttonCounty">
                    <button className="search__buttonField"> Caută acum <span className="iconSearch2"> <AiOutlineSearch /> </span> </button>
            </div>
        </div>
    </div>
    )
}

export default Search