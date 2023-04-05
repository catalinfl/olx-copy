import './App.scss'
import Categories from './components/Categories/Categories'
import Navbar from './components/Navbar/Navbar'
import PromotedAnnounces from './components/PromotedAnnounces/PromotedAnnounces'
import Search from './components/SearchInput/Search'

function App() {

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      <Search />
      <Categories />
      <PromotedAnnounces />
    </div>
  )
}

export default App
