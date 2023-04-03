import React from 'react'
import './Search.scss'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  return (
    <div className="search">
        <div className="search__container">
            <div className="search__input">
                <AiOutlineSearch className="search__inputIcon" />
                <input className="search__inputField" type="text" placeholder="Caută anunțuri" />
            </div>
                <div className="search__button">
                    <button className="search__buttonField"> Caută acum </button>
                </div>
                <div className="search__buttonCounty">
                    <button className="search__buttonField"> Toata Romania </button>
            </div>
        </div>
    </div>
    )
}

export default Search