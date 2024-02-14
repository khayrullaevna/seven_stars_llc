import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Drivers from './pages/Drivers'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'


function App() {

  return ( 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/drivers' element={<Drivers />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
