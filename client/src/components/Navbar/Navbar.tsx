import React from 'react'
import '/src/components/Navbar/Navbar.scss'
import { AiOutlineMessage } from "react-icons/ai"
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__container"> 
            <div className="navbar__logo">
                <img className="navbar__logoImg" src={Logo} alt="logo"/>
            </div>
            <div className="navbar__infoContainer">
                <div className="navbar__infoItem"> 
                    <AiOutlineMessage className="navbar__infoIcon" />
                    <p className="navbar__infoText"> 
                    Mesaje </p> 
                </div>
                <div className="navbar__infoItem"> 
                    <AiOutlineHeart className="navbar__infoIcon"/>
                </div>
                <div className="navbar__infoItem"> 
                    <AiOutlineUser className="navbar__infoIcon" />
                    <p className="navbar__infoText"> Contul tău </p> 
                </div>
                <div className="navbar__infoItem"> 
                    <button className="navbar__buttonAdd">
                        Adaugă anunț
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar