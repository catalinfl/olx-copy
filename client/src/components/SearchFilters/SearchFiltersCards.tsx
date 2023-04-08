import React from 'react'
import WidthCard from '../WidthCard/WidthCard'

export default function SearchFiltersCards() {
  const color: string = 'rgb(230, 228, 228)' 

  return (
    <div className="searchFiltersCard">
        <div className="searchFiltersCard__container">
            <WidthCard />
            <WidthCard />
            <WidthCard />
            <WidthCard />
            <WidthCard />
        </div>
    </div>
    )
}
