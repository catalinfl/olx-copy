import React from 'react'
import Card from '../Card/Card'
import './PromotedAnnounces.scss'

const PromotedAnnounces = () => {
  return (
    <div className="promoted">
        <div className="promotedContainer">
            <div className="promoted__titleContainer">
                <h1 className="promoted__title"> Anunțuri promovate </h1>
            </div>
            <div className="promoted__body">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
        </div>
    </div>
    </div>
    )
}

export default PromotedAnnounces