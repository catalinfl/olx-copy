import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SearchProduct from './pages/SearchProduct'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Router> 
    <div className="App" style={{overflow: 'hidden'}}>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchProduct />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
