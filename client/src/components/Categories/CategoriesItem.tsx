import React from 'react'
import Image from '../../assets/download.jpg'

type CategoriesItemProps = {
  title: string
  image: string
}


const CategoriesItem = ({title, image}: CategoriesItemProps) => {
  return (
    <div className="categories__container__item">
            <img className="categories__itemPhoto" src={Image} alt="photo"/>
            <p className="categories__itemTitle"> {title} </p>
    </div>
    )
}

export default CategoriesItem