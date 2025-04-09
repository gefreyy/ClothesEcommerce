import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import './App.css'

function App() {

  return (
    // <>
    //   <Header/>
    //   <Body/>
    //   <Footer />
    // </>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<Products />}/>
    </Routes>
  )
}

export default App
