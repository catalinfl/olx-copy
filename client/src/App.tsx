import './App.scss'
import Categories from './components/Categories/Categories'
import InfoBoard from './components/InfoBoard/InfoBoard'
import InfoCategories from './components/InfoCategories/InfoCategories'
import Navbar from './components/Navbar/Navbar'
import PromotedAnnounces from './components/PromotedAnnounces/PromotedAnnounces'
import Search from './components/SearchInput/Search'
import SecondaryInfoBoard from './components/SecondaryInfoBoard/SecondaryInfoBoard'

function App() {
  return (
    <div className="App" style={{overflow: 'hidden'}}>
      <Navbar/>
      <Search />
      <Categories />
      <PromotedAnnounces />
      <InfoBoard />
      <SecondaryInfoBoard />
      <InfoCategories />
    </div>
  )
}

export default App
