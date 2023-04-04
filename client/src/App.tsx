import './App.scss'
import Categories from './components/Categories/Categories'
import Navbar from './components/Navbar/Navbar'
import Search from './components/SearchInput/Search'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Search />
      <Categories />
    </div>
  )
}

export default App
