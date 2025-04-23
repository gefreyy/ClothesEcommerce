import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'
import AboutUs from './pages/AboutUs.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

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
      <Route path='/contact' element={<Contact />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
