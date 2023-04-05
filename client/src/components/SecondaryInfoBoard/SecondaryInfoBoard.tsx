import React from 'react'
import { CiFacebook, CiTwitter } from 'react-icons/ci'

const SecondaryInfoBoard = () => {
  return (
    <div className="secondaryInfoBoard">
        <div className="secondaryInfoBoardContainer">
            <p className="secondaryInfoBoardText"> 
                OLX.ro iti ofera posibilitatea de a publica anunturi gratuite pentru orasul tau si imprejurimile sale. Vei gasi usor pe OLX.ro anunturi gratuite interesante din Bucuresti, Ilfov si alte orase din tara si vei putea intra usor in legatura cu cei care le-au publicat. Pe OLX.ro te asteapta locuri de munca, apartamente si camere de inchiriat, masini second-hand si telefoane mobile la preturi mici. Daca vrei sa vinzi ceva vei putea adauga foarte usor anunturi gratuite. Daca vrei sa cumperi ceva aici vei putea gasi produsele care te intereseaza la preturi mai mici decat in orice magazin.
            </p>
        </div>
        <div className="secondaryInfoBoardIcons">
            <CiFacebook className="secondaryInfoBoardIcon" />
            <CiTwitter className="secondaryInfoBoardIcon" />
        </div>
        <p className="secondaryIconText"> Fii alaturi de noi pe retelele sociale </p>
    </div>
    )
}

export default SecondaryInfoBoard