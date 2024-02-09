import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Characters from '../pages/Characters'
import Episodes from '../pages/Episodes'
import Locations from '../pages/Locations'
import About from '../pages/About'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='characters' element={<Characters />} />
        <Route path='episodes' element={<Episodes />} />
        <Route path='locations' element={<Locations />} />
        <Route path='about' element={<About />} />
    </Routes>
  )
}

export default RoutesIndex