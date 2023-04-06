import React from 'react'
import Categories from '../components/Categories/Categories'
import Footer from '../components/Footer/Footer'
import InfoBoard from '../components/InfoBoard/InfoBoard'
import InfoCategories from '../components/InfoCategories/InfoCategories'
import Navbar from '../components/Navbar/Navbar'
import PromotedAnnounces from '../components/PromotedAnnounces/PromotedAnnounces'
import Search from '../components/SearchInput/Search'
import SecondaryInfoBoard from '../components/SecondaryInfoBoard/SecondaryInfoBoard'

const Home = () => {
  return (
    <div className="Home" style={{overflow: 'hidden'}}>
        <Navbar/>
        <Search />
        <Categories />
        <PromotedAnnounces />
        <InfoBoard />
        <SecondaryInfoBoard />
        <InfoCategories />
        <Footer />
    </div>
    )
}

export default Home