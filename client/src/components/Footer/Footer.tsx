import React from 'react'
import AppStore from '../../assets/images/AppStore.svg'
import GooglePlay from '../../assets/images/GooglePlay.svg'
import { CiTwitter, CiFacebook, CiMail } from 'react-icons/ci'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__container">
            <div className="footerAboutPages">
                <div className="footerFlex1"> 
                <li> Ajutor si contact </li>
                <li> Despre noi </li>
                <li> Termeni si conditii </li>
                <li> Politica de confidentialitate </li>
                <li> Conditii de utilizare </li>
                <li> Mai adauga 1 </li>
                </div>
                <div className="footerFlex2"> 
                <li> Setari cookies </li>
                <li> Alte setari </li>
                <li> Cariere in OLX </li>
                <li> Harta judetelor </li>
                <li> Harta site </li>
                <li> Blog OLX </li>
                </div>
            </div>
            <div className="footerSocial">
                <p> Urmareste-ne pe </p>
                <div className="footerSocialContainer">
                <CiTwitter className="footerSocialIcon"/>
                <CiFacebook className="footerSocialIcon"/>
                <CiMail className="footerSocialIcon"/>
                </div>
                <p> Descarca aplicatia pentru telefon din </p>
                <div className="footerMobileContainer">
                <img src={GooglePlay} className="footerSocialApp"/>
                <img src={AppStore} className="footerSocialApp"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer