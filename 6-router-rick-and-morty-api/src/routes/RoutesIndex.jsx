import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Characters from '../pages/Characters'
import Episodes from '../pages/Episodes'
import Locations from '../pages/Locations'
import About from '../pages/About'
import CharacterDetail from '../pages/CharacterDetail'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='characters' element={<Characters />} />
        {/* Aqui indicamos la ruta dinamica, la pagina tendra un "id" */}
        <Route path='character/:id' element={<CharacterDetail/>}/>
        {/* Mas informacion aqui https://reactrouter.com/en/main/route/route#dynamic-segments */}
        <Route path='episodes' element={<Episodes />} />
        <Route path='locations' element={<Locations />} />
        <Route path='about' element={<About />} />
    </Routes>
  )
}

export default RoutesIndex